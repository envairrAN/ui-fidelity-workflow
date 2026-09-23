# UI Fidelity Workflow

让 AI 少一点“看起来差不多”，多一点有证据的还原。

A portable agent skill for faithful UI implementation, precise visual feedback, and evidence-based debugging—without layers of CSS patches.

## 它解决什么

- 将“生硬、不通透、收起方向不对”等视觉感受翻译成可验证约束。
- 从 Figma 或截图读取布局、排版、组件、资源与状态，而非只模仿颜色。
- 排查反复修不好的裁切、返回闪帧、动画路径和 CSS 覆盖问题。
- 优先优化现有代码，尊重“只检查”“其他不变”等范围与授权。
- 用同视口对照和过程帧验证，而不是把构建成功当作视觉成功。

不是 UI 模板，不限定玻璃、渐变或极简风；不训练模型权重，也不承诺自动达到像素级还原。

## 一条命令安装

需要 Node.js/npm 和支持的 AI 编程客户端。使用 [Vercel Skills CLI](https://github.com/vercel-labs/skills)：

```sh
npx skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow
```

按提示选择客户端与安装位置。它会下载此仓库里的 skill，不需要本仓库的 GitHub 登录凭据。

例如，仅安装到当前项目的 Codex 或 Claude Code：

```sh
npx skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow --agent codex
npx skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow --agent claude-code
```

安装前只查看可发现的 skill：

```sh
npx skills add envairrAN/ui-fidelity-workflow --list
```

这不是适用于所有 AI 的统一安装协议；能否自动加载，取决于客户端和安装器支持。执行外部安装器前，请查看它的来源、权限及将写入的位置。

## 无需安装器

从仓库 **Code → Download ZIP** 下载，保留 `skills/ui-fidelity-workflow/` 的完整目录，复制到客户端支持的 skills 目录。具体目录以该客户端文档为准。

不支持 skills 的聊天工具也可使用 [提示词合集](docs/prompts.zh-CN.md)，或将 `SKILL.md` 和相关参考文档作为任务附件。仅发送仓库链接不代表 AI 已读取全部内容。

## 如何使用

安装后可对支持技能调用的 AI 说：

> 使用 ui-fidelity-workflow，按照这份 Figma 还原指定页面。先确认目标节点、状态与视口，保留现有业务逻辑，用相同条件截图对照；没有验证的地方明确说明。

或者：

> 使用 ui-fidelity-workflow，检查这个返回闪屏问题。本轮只检查不动手。确认运行版本、实际生效样式与动画交接，给出证据和最小修复方案，不再叠加遮挡层。

适用工具以当前环境为准。Figma 访问、浏览器控制、部署或文件删除需要宿主工具和用户授权；这个 skill 不会提供凭据或自动取得权限。

## 内容导航

| 内容 | 入口 |
|---|---|
| AI 的执行指南 | [SKILL.md](skills/ui-fidelity-workflow/SKILL.md) |
| 人可以直接说给 AI 的 14 类提示词 | [提示词](docs/prompts.zh-CN.md) |
| 从协作经验提炼的原则 | [UI 协作经验](docs/principles.zh-CN.md) |
| Figma / 截图还原 | [设计证据](skills/ui-fidelity-workflow/references/figma-and-fidelity.md) |
| 动画、裁切、滚动和返回 | [布局与动画](skills/ui-fidelity-workflow/references/motion-and-layout.md) |
| 反复失败与安全清理 | [排查流程](skills/ui-fidelity-workflow/references/debugging-and-cleanup.md) |
| 品味与模糊需求追问 | [审美与追问](skills/ui-fidelity-workflow/references/taste-and-clarification.md) |
| 验收与限制 | [验证](skills/ui-fidelity-workflow/references/verification.md) |
| 情境评估用例 | [案例](skills/ui-fidelity-workflow/references/cases-and-evaluation.md) |

## English summary

Install with the command above, then ask your agent to use `ui-fidelity-workflow`. The instructions are primarily in Chinese, with English discovery metadata. The skill covers visual constraints, Figma/screenshot evidence, scoped implementation, motion continuity, CSS ownership, and proportional verification. It is framework-independent guidance, not an executable UI generator. Client support and tool permissions still apply.

## 安全与来源

本仓库只包含经过整理的通用方法、提示词与技能说明，不包含原产品代码、聊天正文、服务器配置、私有设计标识或 Git 历史。没有安装脚本、执行钩子、联网服务或遥测。安装器是独立第三方工具，不属于本 skill。

案例是经验提炼，不是对某个线上产品当前根因的断言；评估用例不代表已执行测试。欢迎用具体反例完善方法，不添加只针对一次现象的普遍禁令。

Maintained by **envairrAN**. Licensed under [MIT](LICENSE).
