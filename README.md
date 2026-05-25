# 如何从零构建 7×24 小时 AI Agent

一本讲 AI Agent 系统设计思想的技术书。从问题出发,教设计原则,用 30 万行真实代码做案例。

🌐 **在线阅读**:<https://book.imwangfu.com> · 💬 **反馈与讨论**:[Issues](../../issues) · [Discussions](../../discussions)

---

## 这本书讲什么

不是 AI 入门,不造概念,不是源码导读。

本书像《设计模式》一样,用一个真实项目(30 万行 TypeScript,开源 AI Agent 平台)作为贯穿全书的案例,讲 AI Agent 系统从引擎到调度到浏览器自动化的设计思想。每一节从一个具体问题开始——"你的应用要跑三个平台怎么办""两个人同时改数据库版本号撞了怎么办"——引出设计原则,再用真实代码验证。

你读完能拿走的不是"代码怎么写的",而是"我的项目遇到类似问题时该怎么想"。

Halo 不是完美的参考实现——书里既展示做得好的设计决策,也展示务实的妥协和它们的代价。后者往往比前者更有教学价值。

## 覆盖范围

13 章 + 前言 + 附录,从工程地基到 AI 引擎到浏览器自动化:

- **设计基础**:运行时 Adapter、声明式能力边界、分层与依赖方向、性能预算、命名空间迁移
- **AI 引擎**:Agent Loop、上下文压缩策略、多供应商协议归一化、Cache Breakpoints
- **数字员工平台**:App Spec、持久化调度、Escalation 机制、事件路由
- **AI 浏览器**:Accessibility Tree、反检测、模块化工具体系
- **工程实践**:流式渲染、远程访问、稳定性保障、AI 编程方法论

## 适合谁

**想理解 AI Agent 系统设计的开发者。** 你有 1-3 年经验,能写业务代码,但没机会接触大型系统的架构决策——不是因为学不会,是因为工作环境没有这个机会。

**正在构建 AI 工具但卡在"从能用到好用"的独立开发者。** 启动越来越慢、模块依赖混乱、多平台维护成本高——这些工程问题的设计思路,本书每一章都在讲。

**好奇"一个人加 AI 能做到什么程度"的人。** 第十三章:方法论,不是鸡汤。

不适合:想了解"AI 是什么"的入门者、想看 LLM 原理的人。

## 完整目录

| # | 章节标题 | 状态 |
|---|---|---|
| 序言 | 为什么写这本书 | ✅ |
| 第一章 | 全景 — AI 数字员工是什么 | ✅ |
| 第二章 | 地基 — 三端统一的应用架构 | ✅ |
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
