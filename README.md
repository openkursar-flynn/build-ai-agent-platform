# 如何从零构建 7×24 小时 AI Agent

一本拆解 30 万行真实 AI Agent 平台代码的技术书。

🌐 **在线阅读**:<https://book.imwangfu.com>
💬 **反馈与讨论**:[Issues](../../issues) · [Discussions](../../discussions)

---

## 本书的独特之处

**30 万行代码,0 行手敲。** Halo 的代码 100% 由 AI 生成,但每一处架构决策、每一个复杂模块的拆分都经过密集的人工指导和审查——**如何让 AI 生成的 30 万行代码不腐化、不堆积,是第十三章的主题**。

**Electron 桌面应用的性能压力,远超 Web 项目。** Halo 把作者过去在大型在线文档系统和 VSCode 工程实践中积累的经验全部用上:首屏极致性能优化、模块分层懒加载、渲染层共享、文件句柄独立 worker、流式 Markdown 解析与渲染——这些桌面工程的硬骨头,在中后章节有专门讨论。

**所以这本书不是"AI Agent 入门",而是:**
- 看一个真实跑在生产环境的 7×24 AI 平台,**每一层是怎么搭起来的**
- 看一个开发者 + AI,**如何独立完成一个 30 万行项目而不失控**
- 看 Electron 性能调优的具体路径,**有桌面工程经验的人也能学到东西**

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

## 完整目录

| # | 章节标题 | 状态 |
|---|---|---|
| 序言 | 为什么写这本书 | ✅ |
| 第一章 | 全景 — AI 数字员工是什么 | ✅ |
| 第二章 | 地基 — 三端统一的应用架构 | ⏳ |
| 第三章 | 大脑 — AI 引擎的工程化 | ⏳ |
| 第四章 | 兼容层 — 让大脑听懂所有语言 | ⏳ |
| 第五章 | 灵魂 — 数字员工的定义与管理 | ⏳ |
| 第六章 | 心脏 — 自主执行引擎 | ⏳ |
| 第七章 | 记忆 — 让数字员工越来越聪明 | ⏳ |
| 第八章 | 双手 — AI 浏览器的构建 | ⏳ |
| 第九章 | 嘴巴 — 通信与通知体系 | ⏳ |
| 第十章 | 面孔 — 前端交互工程 | ⏳ |
| 第十一章 | 盔甲 — 生产环境的稳定性保障 | ⏳ |
| 第十二章 | 市场 — App Store 与生态 | ⏳ |
| 第十三章 | 造物 — 一个人 + AI 如何构建 30 万行代码 | ⏳ |
| 附录 | 关键术语 / 源码导览 | ⏳ |

> ✅ 已发布 · ⏳ 待发布。**Star + Watch 本仓库可订阅更新。**

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
