# UI Fidelity Workflow

从用户需求确定组件，从真实产品参考组合界面，再用明确规则验收。有 Figma 或截图时，忠实还原已确认设计。

A portable agent skill for needs-driven UI, reference-led composition and faithful design implementation.

## 两个板块

1. **需求到组件**：确认产品任务、视觉风格、主题颜色与目标端；缺少关键含义时主动追问，将需求映射为页面、动作、状态和验收条件。借鉴 Google PAIR 的相关方法，不把设计推断伪装成用户研究。
2. **参考到可运行界面**：实际查看 Mobbin 或可访问的公开产品参考；没有匹配整屏时，跨产品搜索单个组件。记录来源和借用关系，组合后统一视觉，完成交互、动效与检查。

## 当前无原型规则

| 项目 | 要求 |
|---|---|
| 颜色与字体 | 中性白/灰/黑底，避免米黄；主题色由用户确认；PingFang；按实际背景检查文字与图标对比 |
| 按钮与图标 | 普通按钮为完整胶囊，普通按钮纯色；使用有来源与许可的开源 SVG，实际描边 2px |
| 导航与材质 | 移动端为液态玻璃悬浮胶囊；每个有内容的页面恰好一张突出材质主卡，两者分别承担导航与内容层级 |
| 状态 | 未选中 Tab 不加悬停填色或按压缩放；选中底色与文字成对定义，保留键盘焦点 |
| 对齐 | 检查数字/文字/图标相对容器的中心、基线、边距及重复组件一致性；几何与光学都要核对 |
| 动效 | 页面切换、普通按钮反馈、内容进入；真实数值变化与完成状态按需加入数字/路径动画；支持中断和减少动态效果 |
| 自检 | 同视口检查实际画面与中间帧；切页不能因临时滚动条使 Tab bar 弹动；失败先修，不以功能分数代替视觉验收 |

这些规则写在 skill 中，不依赖作者账号的聊天记忆。指定还原稿、既有品牌或用户明确修改优先；风格形容词本身不自动取消规则。局部修改保持范围，不顺带重设计。

## 安装与调用

使用 [Skills CLI](https://github.com/vercel-labs/skills)：

```sh
npx skills add envairrAN/ui-fidelity-workflow --skill ui-fidelity-workflow
```

或下载仓库，将完整的 `skills/ui-fidelity-workflow/` 放入客户端支持的 skills 目录。客户端和工具权限以实际环境为准；仅发送仓库链接不代表全部文档已被读取。

无稿示例：

> 使用 ui-fidelity-workflow，做一个音乐社区，包含发现、AI 描述生成与版本编辑、发布三个页面。黑白强对比＋荧光酸绿，桌面 Web 与 iPhone 浏览器。没有 Figma。关键需求不明确时先追问；先查看组件参考，再实现与逐项验收。

有稿示例：

> 使用 ui-fidelity-workflow，还原这个 Figma 的指定节点与状态。保留业务逻辑，先确认视口和设计版本，再实现并同条件对照；没有验证的部分明确说明。

## 内容导航

| 内容 | 文件 |
|---|---|
| 执行入口与强制合同 | [SKILL.md](skills/ui-fidelity-workflow/SKILL.md) |
| Figma / 截图还原 | [还原流程](skills/ui-fidelity-workflow/references/figma-and-fidelity.md) · [差异诊断](skills/ui-fidelity-workflow/references/fidelity-diagnostics.md) |
| 沟通与模糊需求 | [主动澄清](skills/ui-fidelity-workflow/references/taste-and-clarification.md) · [14 类提示词](docs/prompts.zh-CN.md) |
| 需求、参考、跨品类搜索 | [需求](skills/ui-fidelity-workflow/references/user-needs-and-components.md) · [组合](skills/ui-fidelity-workflow/references/reference-led-composition.md) · [组件迁移](skills/ui-fidelity-workflow/references/cross-domain-components.md) |
| 开放视觉方向与证据 | [风格库](skills/ui-fidelity-workflow/references/visual-style-library.md) · [证据册](skills/ui-fidelity-workflow/references/reference-atlas.md) |
| 视觉、材质、动效与验收 | [视觉](skills/ui-fidelity-workflow/references/modern-product-ui.md) · [材质](skills/ui-fidelity-workflow/references/materials-and-contrast.md) · [动效](skills/ui-fidelity-workflow/references/motion-recipes.md) · [验收](skills/ui-fidelity-workflow/references/verification.md) |
| 方法来源与许可证 | [采用范围](skills/ui-fidelity-workflow/references/adopted-methods.md) · [协作原则](docs/principles.zh-CN.md) |

## 维护与验证

```sh
python scripts/validate.py
python scripts/package.py
```

验证脚本无第三方依赖，仅检查本仓库使用的简单元数据、相对引用、必要资源和分发边界，不代替浏览器与真实任务验证。打包脚本只包含 skill 与 LICENSE，输出到被 Git 忽略的 `local/`。

公开仓库只维护技能文档、可选动效代码、诊断脚本和必要许可；本机演示、字体、截图、旧实验与发布素材放在 `local/`，不上传。没有自动执行钩子或遥测，也不要求安装额外动画依赖。

## 效果边界

它是工作流，不训练模型权重，不承诺像素级还原或稳定胜过无 skill。首稿、人工迭代稿和独立对照必须分开记录；没有原型时不使用“像素还原率”，不虚构用户验证、审美提升百分比或新账号实验。来源不可达时明确说明，不将搜索摘要冒充已观察的组件。

Maintained by **envairrAN** · [MIT License](LICENSE)
