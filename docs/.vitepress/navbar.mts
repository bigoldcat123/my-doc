
import outline from "./outline.mts"
export default [
    { text: 'Home', link: '/' },
    {
        text: 'Blog', items: [{
            text: '前端', link: `/${outline.FRONT_END}/readme`
        },
        {
            text: '后端', link: `/${outline.BACK_END}/readme`
        },
        {
            text: '运维', link: `/${outline.MAINTENANCE}/readme`
        }
    ]
    }
]