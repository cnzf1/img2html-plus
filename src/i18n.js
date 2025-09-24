const zh = {
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
};
const en = {
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
};
export function getTranslations() {
    const lang = window.localStorage.getItem('language');
    if (lang === 'zh' || lang === 'zh-TW') {
        return zh;
    }
    return en;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImkxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNBLE1BQU0sRUFBRSxHQUFpQjtJQUNyQixRQUFRLEVBQUU7UUFDTixVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSw2Q0FBNkM7U0FDdEQ7UUFDRCxhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsMkJBQTJCO1NBQ3BDO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsK0JBQStCO1NBQ3hDO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLDhDQUE4QztTQUN2RDtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFdBQVc7U0FDcEI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxxQ0FBcUM7U0FDOUM7S0FDSjtJQUNELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSxjQUFjO0tBQzFCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osV0FBVyxFQUFFLG9CQUFvQjtLQUNwQztDQUNKLENBQUE7QUFFRCxNQUFNLEVBQUUsR0FBaUI7SUFDckIsUUFBUSxFQUFFO1FBQ04sVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLGFBQWE7WUFDbkIsSUFBSSxFQUFFLG1HQUFtRztTQUM1RztRQUNELGFBQWEsRUFBRTtZQUNYLElBQUksRUFBRSx1QkFBdUI7WUFDN0IsSUFBSSxFQUFFLGdHQUFnRztTQUN6RztRQUNELFNBQVMsRUFBRTtZQUNQLElBQUksRUFBRSxtQkFBbUI7WUFDekIsSUFBSSxFQUFFLHFFQUFxRTtTQUM5RTtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSx1QkFBdUI7WUFDN0IsSUFBSSxFQUFFLGdJQUFnSTtTQUN6STtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxtQkFBbUI7WUFDekIsSUFBSSxFQUFFLHVDQUF1QztTQUNoRDtRQUNELEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLGdJQUFnSTtTQUN6STtLQUNKO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsT0FBTyxFQUFFLG1CQUFtQjtLQUMvQjtJQUNELE1BQU0sRUFBRTtRQUNKLFdBQVcsRUFBRSx1Q0FBdUM7S0FDdkQ7Q0FDSixDQUFBO0FBRUQsTUFBTSxVQUFVLGVBQWU7SUFDM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDcEQsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQTtJQUNiLENBQUM7SUFFRCxPQUFPLEVBQUUsQ0FBQTtBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9ucyB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGltYWdlV2lkdGg6IHtcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nXHJcbiAgICAgICAgICAgIGRlc2M6IHN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VDdXN0b21QYXRoOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgICAgICAgICBkZXNjOiBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1hZ2VQYXRoOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgICAgICAgICBkZXNjOiBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5jbHVkZUFsdDoge1xyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmdcclxuICAgICAgICAgICAgZGVzYzogc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dOb3RpY2U6IHtcclxuICAgICAgICAgICAgbmFtZTogc3RyaW5nXHJcbiAgICAgICAgICAgIGRlc2M6IHN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGlnbjoge1xyXG4gICAgICAgICAgICBuYW1lOiBzdHJpbmdcclxuICAgICAgICAgICAgZGVzYzogc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdHVzQmFyOiB7XHJcbiAgICAgICAgZW5hYmxlZDogc3RyaW5nXHJcbiAgICB9XHJcbiAgICBub3RpY2U6IHtcclxuICAgICAgICBpbWFnZVBhc3RlZDogc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHpoOiBUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGltYWdlV2lkdGg6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WbvueJh+WuveW6picsXHJcbiAgICAgICAgICAgIGRlc2M6ICforr7nva7nspjotLTlm77niYfnmoTlrr3luqbvvIzlj6/ku6XmmK/lg4/ntKDlgLzvvIjlpoIgNTAwcHjvvInmiJbnmb7liIbmr5TvvIjlpoIgMTAwJe+8ieaIliBhdXRvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVzZUN1c3RvbVBhdGg6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+S9v+eUqOiHquWumuS5ieWbvueJh+i3r+W+hCcsXHJcbiAgICAgICAgICAgIGRlc2M6ICflkK/nlKjlkI7vvIzlm77niYflsIbkv53lrZjliLDmjIflrprot6/lvoTogIzkuI3mmK/lvZPliY3mlofku7bmiYDlnKjnm67lvZUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2VQYXRoOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfoh6rlrprkuYnlm77niYfot6/lvoQnLFxyXG4gICAgICAgICAgICBkZXNjOiAn6K6+572u5Zu+54mH5L+d5a2Y55qE6Lev5b6E77yM5Y+v5Lul5piv55u45a+56Lev5b6E77yI5aaCIC4vYXNzZXRz77yJJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY2x1ZGVBbHQ6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMheWQqyBhbHQg5bGe5oCnJyxcclxuICAgICAgICAgICAgZGVzYzogJ+WQr+eUqOWQju+8jEhUTUwg5Zu+54mH5qCH562+5bCG5YyF5ZCrIGFsdCDlsZ7mgKfvvIzmnInliqnkuo7ml6Dpmpznoo3mgKflkowgU0VP77yM5L2G5Lya5L2/5qCH562+5pu06ZW/JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dOb3RpY2U6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+aYvuekuumAmuefpScsXHJcbiAgICAgICAgICAgIGRlc2M6ICfnspjotLTlm77niYfml7bmmL7npLrpgJrnn6UnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxpZ246IHtcclxuICAgICAgICAgICAgbmFtZTogJ+Wvuem9kOaWueWQkScsXHJcbiAgICAgICAgICAgIGRlc2M6ICforr7nva7lm77niYfnmoTlr7npvZDmlrnlvI/vvIzlj6/ku6XpgInmi6nlsYXkuK3lr7npvZDjgIHlkJHlt6blr7npvZDjgIHlkJHlj7Plr7npvZDvvIzpu5jorqTlsYXkuK3lr7npvZAnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc3RhdHVzQmFyOiB7XHJcbiAgICAgICAgZW5hYmxlZDogJ0ltZzJIdG1sOiDlvIDlkK8nLFxyXG4gICAgfSxcclxuICAgIG5vdGljZToge1xyXG4gICAgICAgIGltYWdlUGFzdGVkOiAn5Zu+54mH5bey57KY6LS05Li6IEhUTUwg5qC85byP77yM5L+d5a2Y5ZyoJyxcclxuICAgIH0sXHJcbn1cclxuXHJcbmNvbnN0IGVuOiBUcmFuc2xhdGlvbnMgPSB7XHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGltYWdlV2lkdGg6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0ltYWdlIHdpZHRoJyxcclxuICAgICAgICAgICAgZGVzYzogJ1NldCB0aGUgd2lkdGggb2YgcGFzdGVkIGltYWdlcywgY2FuIGJlIGEgcGl4ZWwgdmFsdWUgKGUuZy4gNTAwcHgpLCBwZXJjZW50YWdlIChlLmcuIDEwMCUpIG9yIGF1dG8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlQ3VzdG9tUGF0aDoge1xyXG4gICAgICAgICAgICBuYW1lOiAnVXNlIGN1c3RvbSBpbWFnZSBwYXRoJyxcclxuICAgICAgICAgICAgZGVzYzogJ1doZW4gZW5hYmxlZCwgaW1hZ2VzIHdpbGwgYmUgc2F2ZWQgdG8gdGhlIHNwZWNpZmllZCBwYXRoIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgZmlsZSBkaXJlY3RvcnknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2VQYXRoOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDdXN0b20gaW1hZ2UgcGF0aCcsXHJcbiAgICAgICAgICAgIGRlc2M6ICdTZXQgdGhlIHBhdGggdG8gc2F2ZSBpbWFnZXMsIGNhbiBiZSBhIHJlbGF0aXZlIHBhdGggKGUuZy4gLi9hc3NldHMpJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY2x1ZGVBbHQ6IHtcclxuICAgICAgICAgICAgbmFtZTogJ0luY2x1ZGUgYWx0IGF0dHJpYnV0ZScsXHJcbiAgICAgICAgICAgIGRlc2M6ICdXaGVuIGVuYWJsZWQsIEhUTUwgaW1hZ2UgdGFncyB3aWxsIGluY2x1ZGUgdGhlIGFsdCBhdHRyaWJ1dGUsIHdoaWNoIGhlbHBzIHdpdGggYWNjZXNzaWJpbGl0eSBhbmQgU0VPLCBidXQgbWFrZXMgdGhlIHRhZyBsb25nZXInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd05vdGljZToge1xyXG4gICAgICAgICAgICBuYW1lOiAnU2hvdyBub3RpZmljYXRpb24nLFxyXG4gICAgICAgICAgICBkZXNjOiAnU2hvdyBub3RpZmljYXRpb24gd2hlbiBwYXN0aW5nIGltYWdlcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGlnbjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnSW1hZ2UgYWxpZ25tZW50JyxcclxuICAgICAgICAgICAgZGVzYzogJ1NldCB0aGUgYWxpZ25tZW50IG9mIHRoZSBpbWFnZSwgeW91IGNhbiBjaG9vc2UgY2VudGVyIGFsaWdubWVudCwgbGVmdCBhbGlnbm1lbnQsIHJpZ2h0IGFsaWdubWVudCwgZGVmYXVsdCBpcyBjZW50ZXIgYWxpZ25tZW50LicsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzdGF0dXNCYXI6IHtcclxuICAgICAgICBlbmFibGVkOiAnSW1nMkh0bWw6IGVuYWJsZWQnLFxyXG4gICAgfSxcclxuICAgIG5vdGljZToge1xyXG4gICAgICAgIGltYWdlUGFzdGVkOiAnSW1hZ2UgcGFzdGVkIGFzIEhUTUwgZm9ybWF0LCBzYXZlZCBpbicsXHJcbiAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25zKCk6IFRyYW5zbGF0aW9ucyB7XHJcbiAgICBjb25zdCBsYW5nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpXHJcbiAgICBpZiAobGFuZyA9PT0gJ3poJyB8fCBsYW5nID09PSAnemgtVFcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHpoXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuXHJcbn1cclxuIl19