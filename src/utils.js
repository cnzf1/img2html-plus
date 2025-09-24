/**
 * Get file extension from MIME type
 */
export function getFileExtension(mimeType) {
    const mimeToExt = {
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
 * Create HTML image tag
 */
export function createHtmlImgTag(fileName, imagePath, imageDir, useCustomPath, customPath, imageWidth, includeAlt, align) {
    let src = '';
    if (useCustomPath) {
        // Use custom path
        const path = customPath.trim();
        // If relative path (starts with ./ or ../)
        if (path.startsWith('./') || path.startsWith('../')) {
            src = `${path}/${fileName}`;
        }
        else {
            // Use custom path directly without ./ prefix
            src = `${path}/${fileName}`.replace(/\/\//g, '/');
        }
    }
    else {
        // Use default path (same directory as current file)
        src = fileName;
    }
    // Build HTML tag
    if (includeAlt) {
        return `<img src="${src}" width="${imageWidth}" align="${align}" alt="${fileName}">`;
    }
    else {
        return `<img src="${src}" width="${imageWidth}" align="${align}">`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxRQUFnQjtJQUNoRCxNQUFNLFNBQVMsR0FBMkI7UUFDekMsWUFBWSxFQUFFLEtBQUs7UUFDbkIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsWUFBWSxFQUFFLE1BQU07UUFDcEIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsWUFBWSxFQUFFLE1BQU07S0FDcEIsQ0FBQztJQUVGLE9BQU8sU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQztBQUNyQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQy9CLFFBQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLGFBQXNCLEVBQ3RCLFVBQWtCLEVBQ2xCLFVBQWtCLEVBQ2xCLFVBQW1CLEVBQ25CLEtBQWE7SUFFYixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ25CLGtCQUFrQjtRQUNsQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFL0IsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDckQsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzdCLENBQUM7YUFBTSxDQUFDO1lBQ1AsNkNBQTZDO1lBQzdDLEdBQUcsR0FBRyxHQUFHLElBQUksSUFBSSxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDRixDQUFDO1NBQU0sQ0FBQztRQUNQLG9EQUFvRDtRQUNwRCxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQixPQUFPLGFBQWEsR0FBRyxZQUFZLFVBQVUsWUFBWSxLQUFLLFVBQVUsUUFBUSxJQUFJLENBQUM7SUFDdEYsQ0FBQztTQUFNLENBQUM7UUFDUCxPQUFPLGFBQWEsR0FBRyxZQUFZLFVBQVUsWUFBWSxLQUFLLElBQUksQ0FBQztJQUNwRSxDQUFDO0FBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2V0IGZpbGUgZXh0ZW5zaW9uIGZyb20gTUlNRSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlRXh0ZW5zaW9uKG1pbWVUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBtaW1lVG9FeHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0J2ltYWdlL2pwZWcnOiAnanBnJyxcblx0XHQnaW1hZ2UvcG5nJzogJ3BuZycsXG5cdFx0J2ltYWdlL2dpZic6ICdnaWYnLFxuXHRcdCdpbWFnZS9zdmcreG1sJzogJ3N2ZycsXG5cdFx0J2ltYWdlL3dlYnAnOiAnd2VicCcsXG5cdFx0J2ltYWdlL2JtcCc6ICdibXAnLFxuXHRcdCdpbWFnZS90aWZmJzogJ3RpZmYnXG5cdH07XG5cdFxuXHRyZXR1cm4gbWltZVRvRXh0W21pbWVUeXBlXSB8fCAncG5nJztcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRNTCBpbWFnZSB0YWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWxJbWdUYWcoXG5cdGZpbGVOYW1lOiBzdHJpbmcsIFxuXHRpbWFnZVBhdGg6IHN0cmluZywgXG5cdGltYWdlRGlyOiBzdHJpbmcsIFxuXHR1c2VDdXN0b21QYXRoOiBib29sZWFuLFxuXHRjdXN0b21QYXRoOiBzdHJpbmcsXG5cdGltYWdlV2lkdGg6IHN0cmluZyxcblx0aW5jbHVkZUFsdDogYm9vbGVhbixcblx0YWxpZ246IHN0cmluZyxcbik6IHN0cmluZyB7XG5cdGxldCBzcmMgPSAnJztcblx0XG5cdGlmICh1c2VDdXN0b21QYXRoKSB7XG5cdFx0Ly8gVXNlIGN1c3RvbSBwYXRoXG5cdFx0Y29uc3QgcGF0aCA9IGN1c3RvbVBhdGgudHJpbSgpO1xuXHRcdFxuXHRcdC8vIElmIHJlbGF0aXZlIHBhdGggKHN0YXJ0cyB3aXRoIC4vIG9yIC4uLylcblx0XHRpZiAocGF0aC5zdGFydHNXaXRoKCcuLycpIHx8IHBhdGguc3RhcnRzV2l0aCgnLi4vJykpIHtcblx0XHRcdHNyYyA9IGAke3BhdGh9LyR7ZmlsZU5hbWV9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVXNlIGN1c3RvbSBwYXRoIGRpcmVjdGx5IHdpdGhvdXQgLi8gcHJlZml4XG5cdFx0XHRzcmMgPSBgJHtwYXRofS8ke2ZpbGVOYW1lfWAucmVwbGFjZSgvXFwvXFwvL2csICcvJyk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIFVzZSBkZWZhdWx0IHBhdGggKHNhbWUgZGlyZWN0b3J5IGFzIGN1cnJlbnQgZmlsZSlcblx0XHRzcmMgPSBmaWxlTmFtZTtcblx0fVxuXHRcblx0Ly8gQnVpbGQgSFRNTCB0YWdcblx0aWYgKGluY2x1ZGVBbHQpIHtcblx0XHRyZXR1cm4gYDxpbWcgc3JjPVwiJHtzcmN9XCIgd2lkdGg9XCIke2ltYWdlV2lkdGh9XCIgYWxpZ249XCIke2FsaWdufVwiIGFsdD1cIiR7ZmlsZU5hbWV9XCI+YDtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gYDxpbWcgc3JjPVwiJHtzcmN9XCIgd2lkdGg9XCIke2ltYWdlV2lkdGh9XCIgYWxpZ249XCIke2FsaWdufVwiPmA7XG5cdH1cbn0gIl19