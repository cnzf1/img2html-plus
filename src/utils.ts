/**
 * 根据 MIME 类型获取文件扩展名
 */
export function getFileExtension(mimeType: string): string {
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
export function createHtmlImgTag(
	fileName: string, 
	imagePath: string, 
	imageDir: string, 
	useCustomPath: boolean,
	customPath: string,
	imageWidth: string,
	includeAlt: boolean
): string {
	let src = '';
	
	if (useCustomPath) {
		// 使用自定义路径
		const path = customPath.trim();
		
		// 如果是相对路径（以 ./ 或 ../ 开头）
		if (path.startsWith('./') || path.startsWith('../')) {
			src = `${path}/${fileName}`;
		} else {
			// 否则添加 ./ 前缀
			src = `./${path}/${fileName}`.replace(/\/\//g, '/');
		}
	} else {
		// 使用默认路径（与当前文件同目录）
		src = fileName;
	}
	
	// 构建 HTML 标签
	if (includeAlt) {
		return `<img src="${src}" width="${imageWidth}" alt="${fileName}">`;
	} else {
		return `<img src="${src}" width="${imageWidth}">`;
	}
} 