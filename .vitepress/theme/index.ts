import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRoute, useRouter } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { initReadingProgress } from './reading-progress'
import './custom.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      initReadingProgress()
    })

    // 路由切换后,滚动重置 + 进度条重置
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
          document.documentElement.style.setProperty('--reading-progress', '0%')
        })
      }
    )
  },
} satisfies Theme
