# 如何从零构建 7×24 小时 AI Agent

一本拆解 30 万行真实 AI Agent 平台代码的技术书。

🌐 **在线阅读**:<https://openkursar-flynn.github.io/build-ai-agent-platform/>
💬 **反馈与讨论**:[Issues](../../issues) · [Discussions](../../discussions)

---

## 本书讲什么

不是入门教程,不造概念。每一章对应一个跑在生产环境的真实模块,每个设计决策都有源码行、失败过的备选方案和明确的取舍理由。

13 章 + 前言 + 附录,完整覆盖:

- **架构基础**:三端统一 API、IPC 三文件同步、两阶段启动
- **AI 引擎层**:Agent Loop、Compact 策略、多供应商适配、Persistent REPL
- **AI Agent 平台**:App Spec、调度器、Escalation as Run Boundary、DHP 协议
- **AI 浏览器**:Accessibility Tree、13 层反检测、模块化工具
- **前端工程**:StreamingBubble 防闪烁、Canvas AI Awareness
- **基础设施**:SQLite 迁移、四层 Health、Remote Access
- **AI 编程方法论**:需求三步螺旋、AI 律法、交叉审查

## 适合谁读

- **想造 Agent 平台的开发者**:2-5 年经验、能读 TypeScript
- **正在构建 AI 工具的独立开发者**:卡在"从能用到好用"阶段
- **好奇"一个人加 AI 能做到什么程度"的人**:第十三章专门回答

不适合:想了解"AI 是什么"的入门者、想看通用 LLM 原理的人。

---

## 提交反馈

| 类型 | 入口 |
|------|------|
| 📝 错别字 / 技术错误 | [提交勘误](../../issues/new?template=erratum.yml) |
| 💡 章节建议 / 内容补充 | [提交建议](../../issues/new?template=suggestion.yml) |
| 🤔 对内容有疑问 | [提出问题](../../issues/new?template=question.yml) |
| 💬 自由讨论 | [Discussions](../../discussions) |

---

## 本仓库结构

```
build-ai-agent-platform/
├── book/                  ← 已发布章节的 Markdown 源
│   ├── index.md
│   ├── 00-preface.md
│   ├── about.md
│   └── public/
├── .vitepress/            ← VitePress 配置 + 自定义主题
│   ├── config.ts
│   └── theme/
├── .github/
│   └── ISSUE_TEMPLATE/    ← 反馈模板
├── package.json
├── vercel.json
└── LICENSE
```

## 本地预览

```bash
npm install
npm run dev          # 本地预览,默认 http://localhost:5173
npm run build        # 构建静态站
npm run preview      # 预览构建产物
```

## 部署

已配置 GitHub Pages + Actions 自动部署。

每次推送 `main` 分支,会自动触发 `.github/workflows/deploy.yml`,构建并发布到 GitHub Pages,通常 1-2 分钟内上线。

无需任何手动配置。

> 若未来需要迁移到 Vercel,仓库根目录保留了 `vercel.json` 作为预设配置。

---

## 协议

- **书稿内容**(`book/` 下的所有 Markdown):[CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh)
  - ✅ 共享、署名
  - ❌ 商业使用、禁止演绎
- **代码部分**(`.vitepress/` 配置、主题、构建脚本):MIT

完整许可见 [LICENSE](LICENSE)。
