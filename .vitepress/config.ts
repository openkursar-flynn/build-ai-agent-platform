import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

/**
 * 自动扫描 book/ 目录,生成侧边栏。
 *
 * 约定:
 * - 文件按文件名排序(建议 00-、01-、02- 前缀控制顺序)
 * - 标题取每个 .md 文件的第一个 # 一级标题
 * - 没有标题的文件用文件名兜底
 *
 * 你只需要往 book/ 里放 .md,不用改这个配置。
 */
function generateSidebar() {
  const bookDir = resolve(__dirname, '../book')
  if (!existsSync(bookDir)) return []

  const files = readdirSync(bookDir)
    .filter((f) => f.endsWith('.md') && f !== 'index.md')
    .sort()

  return files.map((file) => {
    const filePath = join(bookDir, file)
    const content = readFileSync(filePath, 'utf-8')
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : file.replace(/\.md$/, '')
    return {
      text: title,
      link: '/' + file.replace(/\.md$/, ''),
    }
  })
}

export default defineConfig({
  // 站点信息
  title: '如何从零构建 7×24 小时 AI Agent',
  titleTemplate: ':title | 如何从零构建 7×24 小时 AI Agent',
  description:
    '一本拆解 30 万行真实 AI 数字员工平台的技术书。从 Agent 引擎、上下文工程,到数字人协议、AI 浏览器、生产级调度——打开引擎盖讲清楚。',
  lang: 'zh-CN',

  // 自定义域名 book.imwangfu.com,部署在根路径
  // GitHub Pages 会通过 book/public/CNAME 文件识别自定义域名
  base: '/',

  // 只构建 book/ 目录,manuscript/ 永不暴露
  srcDir: 'book',

  // 构建产物输出到根目录的 .vitepress/dist
  outDir: './.vitepress/dist',

  // 干净的 URL(无 .html 后缀)
  cleanUrls: true,

  // 暗色模式默认跟随系统
  appearance: true,

  // 最后更新时间
  lastUpdated: true,

  // HEAD 标签
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#1a1a1a' }],
    ['meta', { name: 'author', content: 'Flynn' }],
    ['meta', { property: 'og:type', content: 'book' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    [
      'meta',
      {
        property: 'og:title',
        content: '如何从零构建 7×24 小时 AI Agent',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          '拆解 30 万行真实 AI 数字员工平台,打开引擎盖讲架构、Agent 引擎、上下文工程与生产级实践。',
      },
    ],
  ],

  // 主题配置
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '开始阅读', link: '/00-preface' },
      { text: '关于', link: '/about' },
      {
        text: '反馈',
        items: [
          {
            text: '勘误(错别字 / 技术错误)',
            link: 'https://github.com/openkursar-flynn/build-ai-agent-platform/issues/new?template=erratum.yml',
          },
          {
            text: '建议(章节 / 内容)',
            link: 'https://github.com/openkursar-flynn/build-ai-agent-platform/issues/new?template=suggestion.yml',
          },
          {
            text: '提问(对内容有疑问)',
            link: 'https://github.com/openkursar-flynn/build-ai-agent-platform/issues/new?template=question.yml',
          },
          {
            text: '自由讨论(Discussions)',
            link: 'https://github.com/openkursar-flynn/build-ai-agent-platform/discussions',
          },
        ],
      },
    ],

    // 右上角社交链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/openkursar-flynn/build-ai-agent-platform',
        ariaLabel: '反馈仓库',
      },
    ],

    // 自动生成的侧边栏
    sidebar: generateSidebar(),

    // 大纲深度(右侧小节导航)
    outline: {
      level: [2, 3],
      label: '本章小节',
    },

    // 文档页页脚
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },

    // 站点页脚
    footer: {
      message:
        '本作品采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank">CC BY-NC-ND 4.0</a> 协议授权。',
      copyright: `© ${new Date().getFullYear()} Flynn · 如何从零构建 7×24 小时 AI Agent`,
    },

    // 本地搜索(开箱即用,不依赖外部服务)
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索全书',
                buttonAriaLabel: '搜索全书',
              },
              modal: {
                displayDetails: '显示详情',
                resetButtonTitle: '重置',
                backButtonTitle: '返回',
                noResultsText: '没有找到结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上',
                  navigateDownKeyAriaLabel: '下',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    // 中文 UI 文本
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到亮色',
    darkModeSwitchTitle: '切换到暗色',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: false,

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
      },
    },
  },

  // Markdown 配置
  markdown: {
    lineNumbers: false,
    image: {
      lazyLoading: true,
    },
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
  },

  // 构建优化
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
})
