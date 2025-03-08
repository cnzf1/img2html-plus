import { App, Editor, MarkdownView, Notice, Plugin, PluginSettingTab, Setting, TFile, normalizePath } from 'obsidian';
import { getTranslations, Translations } from './src/i18n';

interface Img2HtmlSettings {
	// 图片宽度设置，可以是固定值或百分比
	imageWidth: string;
	// 是否在粘贴时显示通知
	showNotice: boolean;
	// 自定义图片保存路径
	imagePath: string;
	// 是否使用自定义路径
	useCustomPath: boolean;
	// 是否包含 alt 属性
	includeAlt: boolean;
}

const DEFAULT_SETTINGS: Img2HtmlSettings = {
	imageWidth: 'auto',
	showNotice: true,
	imagePath: './assets',
	useCustomPath: false,
	includeAlt: false
}

export default class Img2HtmlPlugin extends Plugin {
	settings: Img2HtmlSettings;
	i18n: Translations;
	statusBarItemEl: HTMLElement;
	settingTab: Img2HtmlSettingTab;

	async onload() {
		await this.loadSettings();
		
		// 加载国际化翻译
		this.i18n = getTranslations();

		// 注册编辑器粘贴事件
		this.registerEvent(
			this.app.workspace.on('editor-paste', this.handlePaste.bind(this))
		);

		// 添加设置选项卡
		this.settingTab = new Img2HtmlSettingTab(this.app, this);
		this.addSettingTab(this.settingTab);

		// 添加状态栏项目
		this.statusBarItemEl = this.addStatusBarItem();
		this.statusBarItemEl.setText(this.i18n.statusBar.enabled);
		
		// 监听语言变更
		this.registerDomEvent(window, 'storage', (e: StorageEvent) => {
			if (e.key === 'language') {
				this.updateI18n();
			}
		});
	}

	onunload() {
		// 插件卸载时的清理工作
	}
	
	/**
	 * 更新国际化翻译并刷新界面
	 */
	updateI18n() {
		// 更新翻译
		this.i18n = getTranslations();
		
		// 更新状态栏
		this.statusBarItemEl.setText(this.i18n.statusBar.enabled);
		
		// 如果设置页面已打开，则刷新设置页面
		if (this.settingTab && this.settingTab.containerEl.parentElement) {
			this.settingTab.display();
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	/**
	 * 处理粘贴事件
	 */
	async handlePaste(evt: ClipboardEvent, editor: Editor, view: MarkdownView) {
		// 如果剪贴板中没有文件，则不处理
		if (!evt.clipboardData?.files.length) {
			return;
		}

		// 阻止默认粘贴行为
		evt.preventDefault();

		const file = evt.clipboardData.files[0];
		
		// 检查是否为图片文件
		if (!file.type.startsWith('image/')) {
			return;
		}

		// 获取当前文件
		const activeFile = view.file;
		if (!activeFile) {
			return;
		}

		// 生成图片文件名
		const timestamp = new Date().getTime();
		const fileName = `image_${timestamp}.${this.getFileExtension(file.type)}`;
		
		// 创建图片文件路径
		let imagePath = '';
		let imageDir = '';
		
		if (this.settings.useCustomPath) {
			// 使用自定义路径
			const basePath = activeFile.parent?.path || '';
			const customPath = this.settings.imagePath.trim();
			
			// 确保自定义路径不以斜杠开头
			const normalizedCustomPath = customPath.startsWith('/') 
				? customPath.substring(1) 
				: customPath;
				
			// 如果是相对路径（以 ./ 或 ../ 开头）
			if (normalizedCustomPath.startsWith('./') || normalizedCustomPath.startsWith('../')) {
				// 直接使用相对路径
				imageDir = normalizePath(`${basePath}/${normalizedCustomPath}`);
			} else {
				// 否则视为从 vault 根目录开始的路径
				imageDir = normalizePath(normalizedCustomPath);
			}
			
			// 确保目录存在
			if (!await this.app.vault.adapter.exists(imageDir)) {
				await this.app.vault.createFolder(imageDir);
			}
			
			imagePath = `${imageDir}/${fileName}`;
		} else {
			// 使用默认路径（与当前文件同目录）
			const basePath = activeFile.parent?.path || '';
			imageDir = basePath;
			imagePath = `${basePath}/${fileName}`;
		}
		
		// 读取图片文件内容
		const buffer = await file.arrayBuffer();
		
		// 保存图片到 vault
		await this.app.vault.createBinary(imagePath, buffer);
		
		// 构建 HTML 图片标签
		const imgTag = this.createHtmlImgTag(fileName, imagePath, imageDir);
		
		// 插入 HTML 图片标签到编辑器
		editor.replaceSelection(imgTag);
		
		// 显示通知
		if (this.settings.showNotice) {
			new Notice(`${this.i18n.notice.imagePasted} ${imageDir}`);
		}
	}

	/**
	 * 根据 MIME 类型获取文件扩展名
	 */
	getFileExtension(mimeType: string): string {
		const mimeToExt: Record<string, string> = {
			'image/jpeg': 'jpg',
			'image/png': 'png',
			'image/gif': 'gif',
			'image/svg+xml': 'svg',
			'image/webp': 'webp',
			'image/bmp': 'bmp',
			'image/tiff': 'tiff'
		};
		
		return mimeToExt[mimeType] || 'png';
	}

	/**
	 * 创建 HTML 图片标签
	 */
	createHtmlImgTag(fileName: string, imagePath: string, imageDir: string): string {
		let src = '';
		
		if (this.settings.useCustomPath) {
			// 使用自定义路径
			const customPath = this.settings.imagePath.trim();
			
			// 如果是相对路径（以 ./ 或 ../ 开头）
			if (customPath.startsWith('./') || customPath.startsWith('../')) {
				src = `${customPath}/${fileName}`;
			} else {
				// 否则添加 ./ 前缀
				src = `./${customPath}/${fileName}`.replace(/\/\//g, '/');
			}
		} else {
			// 使用默认路径（与当前文件同目录）
			src = fileName;
		}
		
		// 构建 HTML 标签
		if (this.settings.includeAlt) {
			return `<img src="${src}" width="${this.settings.imageWidth}" alt="${fileName}">`;
		} else {
			return `<img src="${src}" width="${this.settings.imageWidth}">`;
		}
	}
}

class Img2HtmlSettingTab extends PluginSettingTab {
	plugin: Img2HtmlPlugin;

	constructor(app: App, plugin: Img2HtmlPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;
		const i18n = this.plugin.i18n;

		containerEl.empty();

		containerEl.createEl('h2', {text: i18n.settings.title});

		new Setting(containerEl)
			.setName(i18n.settings.imageWidth.name)
			.setDesc(i18n.settings.imageWidth.desc)
			.addText(text => text
				.setPlaceholder('auto')
				.setValue(this.plugin.settings.imageWidth)
				.onChange(async (value) => {
					this.plugin.settings.imageWidth = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(i18n.settings.useCustomPath.name)
			.setDesc(i18n.settings.useCustomPath.desc)
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.useCustomPath)
				.onChange(async (value) => {
					this.plugin.settings.useCustomPath = value;
					await this.plugin.saveSettings();
				}));
				
		new Setting(containerEl)
			.setName(i18n.settings.imagePath.name)
			.setDesc(i18n.settings.imagePath.desc)
			.addText(text => text
				.setPlaceholder('./assets')
				.setValue(this.plugin.settings.imagePath)
				.onChange(async (value) => {
					this.plugin.settings.imagePath = value;
					await this.plugin.saveSettings();
				}));
				
		new Setting(containerEl)
			.setName(i18n.settings.includeAlt.name)
			.setDesc(i18n.settings.includeAlt.desc)
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.includeAlt)
				.onChange(async (value) => {
					this.plugin.settings.includeAlt = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName(i18n.settings.showNotice.name)
			.setDesc(i18n.settings.showNotice.desc)
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.showNotice)
				.onChange(async (value) => {
					this.plugin.settings.showNotice = value;
					await this.plugin.saveSettings();
				}));
	}
} 