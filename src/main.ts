import { App, Editor, MarkdownView, Notice, Plugin, TFile, normalizePath } from 'obsidian';
import { getTranslations, Translations } from './i18n';
import { Img2HtmlSettings, DEFAULT_SETTINGS } from './types';
import { Img2HtmlSettingTab } from './settings';
import { getFileExtension, createHtmlImgTag } from './utils';

export default class Img2HtmlPlugin extends Plugin {
	settings: Img2HtmlSettings;
	i18n: Translations;
	settingTab: Img2HtmlSettingTab;

	async onload() {
		await this.loadSettings();
		
		// 加载翻译
		this.i18n = getTranslations();

		// 注册编辑器粘贴事件
		this.registerEvent(
			this.app.workspace.on('editor-paste', this.handlePaste.bind(this))
		);

		// 添加设置选项卡
		this.settingTab = new Img2HtmlSettingTab(this.app, this);
		this.addSettingTab(this.settingTab);
		
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
		const fileName = `image_${timestamp}.${getFileExtension(file.type)}`;
		
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
		const imgTag = createHtmlImgTag(
			fileName, 
			imagePath, 
			imageDir, 
			this.settings.useCustomPath,
			this.settings.imagePath,
			this.settings.imageWidth,
			this.settings.includeAlt
		);
		
		// 插入 HTML 图片标签到编辑器
		editor.replaceSelection(imgTag);
		
		// 显示通知
		if (this.settings.showNotice) {
			new Notice(`${this.i18n.notice.imagePasted} ${imageDir}`);
		}
	}
} 