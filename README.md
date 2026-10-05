# UI Fidelity Workflow

**从用户需求到组件，从真实参考到可运行的界面。**

UI Fidelity Workflow 是面向 AI 编程助手的 UI 设计与实现 skill，连接需求澄清、组件研究、视觉设计、交互动效与交付验收。既支持没有原型时的界面创作，也支持基于 Figma 或截图的设计还原。

A portable agent skill for needs-driven UI, reference-led composition and faithful design implementation.

## 核心方法

### 需求决定组件

先理解产品为谁服务、用户需要完成什么任务，再确定页面结构、核心动作和组件状态。遇到会影响设计的模糊需求，主动提问确认。结合 Google PAIR 的相关方法，将产品意图转化为可实现、可检查的界面要求。

### 参考驱动设计

实际查看 Mobbin 或可访问的公开产品与设计参考，分析组件如何组织信息、引导操作和表达状态，再结合当前需求完成组合与视觉统一。

参考不局限于同类产品。例如，运动产品中的计时器，也可以从专注工具或时间管理产品中寻找交互与视觉思路。按组件功能跨品类搜索，让产品方向与视觉风格有更多组合空间，并保留可追溯的来源记录。

### 建立清晰的视觉表达

强调信息层级、鲜明的视觉识别，以及有节制的材质与层次。避免默认套用低饱和、弱对比的文艺风格，根据产品定位、用户选择和既有品牌确定设计方向，统一界面的排版、颜色、组件与状态语言。

### 交互与动效共同交付

将页面过渡、操作反馈和状态变化落实为可运行的体验。动效服务于理解与操作，兼顾连续交互、可中断性和减少动态效果的使用偏好。

### 实际运行，主动自检

在目标视口中检查视觉层级、元素对齐、可读性和组件一致性；实际播放动效，检查过渡过程与连续操作，主动定位并修复异常。通过画面与交互证据验收，而不止于代码实现完成。

## 两条工作路径

| 场景 | 工作流程 |
|---|---|
| **没有原型，创建界面** | 澄清需求与设计方向 → 拆解页面和组件 → 查看并记录参考 → 组合与统一视觉 → 实现交互动效 → 运行自检 |
| **已有 Figma 或截图，还原设计** | 确认设计范围与状态 → 读取布局、样式和资源 → 实现界面 → 同条件对照 → 诊断差异并修正 |

已有设计以确认后的设计稿为依据；局部修改保持既定范围。具体组件规范、实现细则与验收清单按任务在 skill 内部文档中展开。

## 安装与使用

使用 [Skills CLI](https://github.com/vercel-labs/skills) 一条命令安装（需要 Node.js/npm）：

```sh
npx skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow
```

也可以下载仓库，将完整的 `skills/ui-fidelity-workflow/` 放入客户端支持的 skills 目录。工具能力与权限以实际运行环境为准。

### 交给 AI 安装并执行

将下面这段直接发给具备联网与文件操作能力的 AI：

> 请安装并使用 https://github.com/envairrAN/ui-fidelity-workflow 。先完整读取仓库的 docs/agent-setup.md，按当前客户端完成安装并验证文件；然后完整读取已安装的 SKILL.md，按任务加载相关文档，将适用要求作为实现与验收条件执行。不要仅凭 README 开始生成。关键需求缺失先追问，完成后提供逐项验收证据；无法完成的步骤明确说明。

支持 skills 的客户端可自动发现技能；其他 AI 可按同一入口显式加载文档。具体的非交互安装命令、读取顺序与执行约定见 [AI 接入指南](docs/agent-setup.md)。安装负责让规则可用，执行与验收负责检查规则是否落实。

**创建界面**

> 使用 ui-fidelity-workflow，为音乐社区设计发现、创作与发布三个页面，同时支持桌面 Web 和移动端。先确认需求与视觉方向，查看相关组件参考，再实现可交互、带动效的页面并完成自检。

**还原设计**

> 使用 ui-fidelity-workflow，还原这个 Figma 的指定页面。先确认设计版本、视口与交互状态，保留现有业务逻辑，实现后进行同条件对照并修正差异。

需求不必一次写完整。可以先描述产品想法，由 skill 引导补齐影响设计的关键信息。

## 深入阅读

| 主题 | 文档 |
|---|---|
| 执行指南 | [SKILL.md](skills/ui-fidelity-workflow/SKILL.md) |
| AI 安装与加载 | [接入指南](docs/agent-setup.md) |
| 需求与沟通 | [需求到组件](skills/ui-fidelity-workflow/references/user-needs-and-components.md) · [主动澄清](skills/ui-fidelity-workflow/references/taste-and-clarification.md) · [使用示例](docs/prompts.zh-CN.md) |
| 参考与组合 | [参考驱动设计](skills/ui-fidelity-workflow/references/reference-led-composition.md) · [跨品类组件](skills/ui-fidelity-workflow/references/cross-domain-components.md) · [风格库](skills/ui-fidelity-workflow/references/visual-style-library.md) · [参考记录](skills/ui-fidelity-workflow/references/reference-atlas.md) |
| 视觉与交互 | [视觉规范](skills/ui-fidelity-workflow/references/modern-product-ui.md) · [材质与对比](skills/ui-fidelity-workflow/references/materials-and-contrast.md) · [动效方案](skills/ui-fidelity-workflow/references/motion-recipes.md) |
| 还原与验收 | [Figma / 截图还原](skills/ui-fidelity-workflow/references/figma-and-fidelity.md) · [差异诊断](skills/ui-fidelity-workflow/references/fidelity-diagnostics.md) · [验收清单](skills/ui-fidelity-workflow/references/verification.md) |
| 方法与原则 | [方法来源与采用范围](skills/ui-fidelity-workflow/references/adopted-methods.md) · [协作原则](docs/principles.zh-CN.md) |

## 开发与维护

```sh
python scripts/validate.py
python scripts/package.py
```

验证脚本检查元数据、文档引用与分发文件；打包脚本生成可安装的 skill 包。脚本均无第三方依赖。实际视觉与交互质量仍需在浏览器和具体任务中验证。

这是可复用的工作方法，实际效果取决于需求、参考和执行环境。交付时应说明验证依据及尚未验证的部分，效果对比以真实记录为准。

Maintained by **envairrAN** · [MIT License](LICENSE)
