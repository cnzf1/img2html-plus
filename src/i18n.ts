export interface Translations {
    settings: {
        imageWidth: {
            name: string
            desc: string
        }
        useCustomPath: {
            name: string
            desc: string
        }
        imagePath: {
            name: string
            desc: string
        }
        includeAlt: {
            name: string
            desc: string
        }
        showNotice: {
            name: string
            desc: string
        }
        align: {
            name: string
            desc: string
        }
    }
    statusBar: {
        enabled: string
    }
    notice: {
        imagePasted: string
    }
}

const zh: Translations = {
    settings: {
        imageWidth: {
            name: '图片宽度',
            desc: '设置粘贴图片的宽度，可以是像素值（如 500px）或百分比（如 100%）或 auto',
        },
        useCustomPath: {
            name: '使用自定义图片路径',
            desc: '启用后，图片将保存到指定路径而不是当前文件所在目录',
        },
        imagePath: {
            name: '自定义图片路径',
            desc: '设置图片保存的路径，可以是相对路径（如 ./assets）',
        },
        includeAlt: {
            name: '包含 alt 属性',
            desc: '启用后，HTML 图片标签将包含 alt 属性，有助于无障碍性和 SEO，但会使标签更长',
        },
        showNotice: {
            name: '显示通知',
            desc: '粘贴图片时显示通知',
        },
        align: {
            name: '对齐方向',
            desc: '设置图片的对齐方式，可以选择居中对齐、向左对齐、向右对齐，默认居中对齐',
        },
    },
    statusBar: {
        enabled: 'Img2Html: 开启',
    },
    notice: {
        imagePasted: '图片已粘贴为 HTML 格式，保存在',
    },
}

const en: Translations = {
    settings: {
        imageWidth: {
            name: 'Image width',
            desc: 'Set the width of pasted images, can be a pixel value (e.g. 500px), percentage (e.g. 100%) or auto',
        },
        useCustomPath: {
            name: 'Use custom image path',
            desc: 'When enabled, images will be saved to the specified path instead of the current file directory',
        },
        imagePath: {
            name: 'Custom image path',
            desc: 'Set the path to save images, can be a relative path (e.g. ./assets)',
        },
        includeAlt: {
            name: 'Include alt attribute',
            desc: 'When enabled, HTML image tags will include the alt attribute, which helps with accessibility and SEO, but makes the tag longer',
        },
        showNotice: {
            name: 'Show notification',
            desc: 'Show notification when pasting images',
        },
        align: {
            name: 'Image alignment',
            desc: 'Set the alignment of the image, you can choose center alignment, left alignment, right alignment, default is center alignment.',
        },
    },
    statusBar: {
        enabled: 'Img2Html: enabled',
    },
    notice: {
        imagePasted: 'Image pasted as HTML format, saved in',
    },
}

export function getTranslations(): Translations {
    const lang = window.localStorage.getItem('language')
    if (lang === 'zh' || lang === 'zh-TW') {
        return zh
    }

    return en
}
