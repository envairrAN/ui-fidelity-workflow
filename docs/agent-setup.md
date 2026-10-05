# AI 接入与执行指南

This is the bootstrap for any AI agent using this repository. Read this file fully, install or load the complete skill, then read SKILL.md and the task-relevant references before implementation. README is an overview, not the execution specification. Do not report installation or compliance without evidence.

## 1. 确定运行方式

- 用户要求安装时，在其指定范围安装；没有指定时使用当前项目，避免自动修改所有客户端或全局配置。
- 支持 skills 的客户端：使用下面的安装命令，保留完整目录结构。
- 不支持 skills、但能读取文件的 AI：下载仓库并显式读取 `skills/ui-fidelity-workflow/SKILL.md` 和它要求的相关文档，按本轮任务指令使用。不宣称已获得客户端自动加载能力。
- 只有对话、不能访问仓库的 AI：请求用户提供完整 skill 文件夹或相关文档；没有读到正文时，不根据名称或摘要假装执行。

## 2. 一条命令安装

需要 Node.js/npm、网络和目标目录写入权限。以下为 Skills CLI 的项目级非交互安装，`--copy` 保留完整副本，`-y` 跳过安装器交互；这不替代宿主对执行或文件写入的授权。

Codex：

```sh
npx --yes skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow --agent codex --copy -y
```

Claude Code：

```sh
npx --yes skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow --agent claude-code --copy -y
```

其他客户端：将 `--agent` 的值替换为 [Skills CLI 当前支持的客户端标识](https://github.com/vercel-labs/skills#supported-agents)。未能确定客户端时使用 README 中的交互安装命令，不猜目录、不默认安装到所有客户端。仅在用户要求全局安装时添加 `-g`。

没有 npm 时，可下载 [仓库 ZIP](https://github.com/envairrAN/ui-fidelity-workflow/archive/refs/heads/main.zip)，将 `skills/ui-fidelity-workflow/` 完整复制到宿主文档指定的 skills 目录；不要只复制 SKILL.md。涉及更新时先检查目标是否有本地修改，不静默覆盖它们。

安装后以安装器返回的实际路径为准，确认 `SKILL.md`、`references/`、`assets/`、`scripts/` 均存在且相对引用可读取。报告安装位置；仅命令退出成功不足以证明宿主已加载。若客户端需要重新加载技能列表，按其机制操作或提示用户。

## 3. 按顺序加载

1. 完整读取安装目录中的 [SKILL.md](../skills/ui-fidelity-workflow/SKILL.md)，不能只读描述、搜索片段或 README。
2. 确定当前任务属于无稿创建、有稿还原还是局部修复。按 SKILL.md 对应路径，在执行各阶段前读取它指定的相关文档；不要一开始加载全部风格与案例库。
3. 将适用规范映射为本次任务的检查项。保留用户已确认的需求；关键缺项主动询问。不得以个人审美、通用模板或追求快速完成为由跳过要求。
4. 新建界面先记录需求与组件参考，再实施；有稿还原以设计证据为准；局部修改只处理受影响范围。
5. 按验收文档实际运行、检查画面和播放交互动画。发现失败先修复并复查；没有工具或证据的项目标为未验证，不得宣布全部通过。

技能是任务执行规范，遵守宿主系统指令、用户授权和工具权限。用户明确的修改或指定设计与默认规范冲突时，记录具体例外及原因；不要用笼统风格词暗中豁免规则。

## 4. 交付约定

根据当前范围提供简明记录，不要求小改动重复全部流程：

| 检查项 | 结果 | 证据或原因 |
|---|---|---|
| 本轮适用的需求、视觉或交互要求 | 通过 / 失败 / 未验证 / 不适用 | 对应页面、状态、截图、过程帧或测量记录；不适用需说明原因 |

验收依据必须对应实际产物，不能用“已遵循 skill”替代证据。交付列出未解决项；失败或未验证的必要项不能计为合格。文件校验只证明包结构，不能证明任意模型都能可靠执行，更不能证明视觉质量。
