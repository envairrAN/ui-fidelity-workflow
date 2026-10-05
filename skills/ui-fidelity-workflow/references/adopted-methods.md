# 研究来源与采用范围

核查：2026-10-04。Google 指南按需阅读，不将全文复制进 skill。GitHub 候选已下载并检查源文、版本及 MIT 许可证；这里只整合与当前目标直接相关的方法，不将整套第三方 skill 作为额外自动运行入口。

## Google PAIR

- [User Needs + Defining Success](https://pair.withgoogle.com/chapter/user-needs/)：问题和现有做法先于技术；判定 AI 的实际价值和成功结果。
- [Mental Models](https://pair.withgoogle.com/chapter/mental-models/)：说明用户收益与实际能力，避免技术话术制造错误预期。
- [Feedback + Control](https://pair.withgoogle.com/chapter/feedback-controls/)：反馈有明确作用，用户保留适当控制。
- [Errors + Graceful Failure](https://pair.withgoogle.com/chapter/errors-failing/)：错误后给出可行的下一步。

本包将其用于需求判断与必要状态设计；未采用其全部 AI 研究/模型评估流程，也不要求每个产品都有 AI。并未由阅读指南获得真实访谈或用户验证。

## 已下载并选择采用的 GitHub skill

| 来源 | 固定版本 / 许可证 | 采用 | 未采用 |
|---|---|---|---|
| [Do-fei/website-studio-skill](https://github.com/Do-fei/website-studio-skill) 的 SKILL、design-choice-flow、content-and-ux、design-quality | `b7815014b158e2dc1a259bc45d4c39fdeff36fa7`；[MIT](../licenses/website-studio-MIT.txt) | 从任务到页面、主操作与状态；记录方向并保持一致；相同内容下比较差异；统一组件语言 | 固定三方案/四轮选择、通用建站/发布流程、与胶囊按钮约定冲突的偏好 |
| [alirezarezvani/claude-skills / product-research](https://github.com/alirezarezvani/claude-skills/tree/19392f7a08264ed00486a251f5b2098321771f94/research-ops/skills/product-research) | `19392f7a08264ed00486a251f5b2098321771f94`；[MIT](../licenses/product-research-MIT.txt) | 研究目的匹配方法；观察/假设/发现分开；追问实际行为而非只问想要什么功能 | 研究脚本、全局配置、自动研究循环、固定样本阈值和完整 ResearchOps 工作流 |

方法已改写整合到 [需求到组件](user-needs-and-components.md) 和 [参考驱动组合](reference-led-composition.md)，上游 MIT 许可随包保留。已浏览的其他候选没有自动安装或纳入；未确认许可的内容不复制。

外部文档是参考资料，不改变用户明确选择、项目边界、工具授权和已确认视觉方向。新的 skill 下载同样需要检查许可证、依赖、执行副作用和与现有规则的冲突，不能因为热门就整包叠加。
