import outline from "./outline.mts"

export default {
    '/frontend/': {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.FRONT_END}/` },
            { text: '二', link: `/${outline.FRONT_END}/api-examples` }
        ]
    },
    '/backend/': {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.BACK_END}/` },
            { text: '二1', link: `/${outline.BACK_END}/api-examples` }
        ]
    },
    '/maintenance/': {
        text: outline.FRONT_END,
        items: [
            { text: '首', link: `/${outline.MAINTENANCE}/` },
            { text: '二2', link: `/${outline.MAINTENANCE}/api-examples` }
        ]
    }
}
