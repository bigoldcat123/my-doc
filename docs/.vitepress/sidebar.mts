import outline from "./outline.mts"

export default {
    ['/' + outline.FRONT_END + '/']: {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.FRONT_END}/` },
            { text: '二', link: `/${outline.FRONT_END}/api-examples` }
        ]
    },
    ['/' + outline.BACK_END + '/']: {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.BACK_END}/` },
            { text: '二1', link: `/${outline.BACK_END}/api-examples` },
            { text: '新特性', link: `/${outline.BACK_END}/newf` }
        ]
    },
    ['/' + outline.MAINTENANCE + '/']: {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.MAINTENANCE}/` },
            { text: '二2', link: `/${outline.MAINTENANCE}/api-examples` }
        ]
    }
}

