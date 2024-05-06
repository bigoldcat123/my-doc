// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'
import { Theme } from 'vitepress/dist/client/index.js'
export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: Layout,
  enhanceApp({app}) {
    
  },
}satisfies Theme