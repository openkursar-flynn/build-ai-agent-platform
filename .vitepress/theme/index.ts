import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { useRoute, useRouter, useData } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { initReadingProgress } from './reading-progress'
import './custom.css'

/** 注入 JSON-LD 结构化数据 (Book + BreadcrumbList) */
function injectJsonLd(path: string, title: string, description: string) {
  // 移除旧的 JSON-LD
  document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove())

  const baseUrl = 'https://book.imwangfu.com'
  const url = `${baseUrl}${path}`

  // Book schema (全站级)
  const bookSchema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: '如何从零构建 7×24 小时 AI Agent',
    author: { '@type': 'Person', name: 'Flynn' },
    url: baseUrl,
    inLanguage: 'zh-CN',
    bookFormat: 'https://schema.org/EBook',
    numberOfPages: 15,
    description:
      '一本讲 AI Agent 系统设计思想的技术书。从问题出发,教设计原则,用 30 万行真实代码做案例。',
    publisher: { '@type': 'Person', name: 'Flynn' },
    license: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
  }

  // BreadcrumbList
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: title, item: url },
    ],
  }

  const injectScript = (data: object) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  injectScript(bookSchema)
  if (path !== '/') injectScript(breadcrumb)
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const { frontmatter, title, description } = useData()

    onMounted(() => {
      initReadingProgress()
      injectJsonLd(route.path, title.value, description.value)
    })

    // 路由切换后,滚动重置 + 进度条重置 + JSON-LD 更新
    watch(
      () => route.path,
      () => {
        nextTick(() => {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
          document.documentElement.style.setProperty('--reading-progress', '0%')
          injectJsonLd(route.path, title.value, description.value)
        })
      }
    )
  },
} satisfies Theme
