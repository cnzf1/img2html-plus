/**
 * 插件设置接口
 */
export interface Img2HtmlSettings {
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

/**
 * 默认设置
 */
export const DEFAULT_SETTINGS: Img2HtmlSettings = {
	imageWidth: 'auto',
	showNotice: true,
	imagePath: './assets',
	useCustomPath: false,
	includeAlt: false
}; 