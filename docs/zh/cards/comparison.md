# 跨卡片对比

当前站点已上线 16 张核心卡片：

- `MMLU-Pro`：Knowledge / Robust Multi-Subject QA
- `IFEval`：Instruction Following / Verifiable Constraint Satisfaction
- `LongBench v2`：Long Context / Deep Long-Context Reasoning
- `GPQA`：STEM / Graduate Science QA
- `AIME (MathArena)`：Math / Competition Math
- `HLE`：Hard Reasoning / Frontier Expert QA
- `LiveCodeBench`：Reasoning / Code Reasoning
- `BrowseComp`：Search Agent / Persistent Browsing
- `WideSearch`：Search Agent / Broad Info Seeking
- `BFCL V4`：General Agent / Tool Use
- `TAU2-Bench`：General Agent / Dual-Control Conversation
- `MCPMark`：General Agent / MCP Tool Use
- `SWE-bench`：Coding Agent / Autonomous Bug Fix
- `Terminal-Bench 2`：Coding Agent / Terminal Operation
- `WMT24++`：Translation / Multilingual MT
- `MMMLU`：Multilingualism / Multilingual QA

这页不替代单卡阅读，而是帮你先判断“要优先看哪一类 benchmark”。

## 一眼看懂：这 16 张卡分别在测什么

| Benchmark | 类目 | 主要测什么 | 主要评分 | 使用时最该警惕什么 |
| ---- | ---- | ---- | ---- | ---- |
| MMLU-Pro | Knowledge | 多学科知识 + 多选推理 | accuracy | 多选题饱和与污染 |
| IFEval | Instruction Following | 显式约束有没有全部做到 | rule-based | 内容质量盲区 |
| LongBench v2 | Long Context | 长材料深理解与推理 | accuracy | 长度与推理混杂 |
| GPQA | STEM | 研究生难度自然科学问答 | accuracy | 子集混用 |
| AIME (MathArena) | Math | 竞赛数学 final-answer 推理 | exact match | 年份 / 采样 / 工具口径混用 |
| HLE | Hard Reasoning | 前沿专家级 closed-ended 硬题 | auto grading | 答案噪声与修订 |
| LiveCodeBench | Reasoning | 新鲜代码题与多场景代码能力 | pass@k | release / lite / full 口径混用 |
| BrowseComp | Search Agent | 开放互联网中的持续搜索与证据拼接 | LLM judge | web drift 与 judge 主观性 |
| WideSearch | Search Agent | 广搜、补字段、结构化整理 | task completion | 完整性边界与 web drift |
| BFCL V4 | General Agent | 函数调用、多轮工具与 agentic tool use | 加权总分 | overall 掩盖分项短板 |
| TAU2-Bench | General Agent | dual-control 对话式任务完成 | pass^k | user simulator 依赖 |
| MCPMark | General Agent | MCP server 上的真实多轮工具工作流 | pass@k | 环境与 server 配置差异 |
| SWE-bench | Coding Agent | 真实仓库 bug 修复 | 测试执行 | scaffold 与训练污染 |
| Terminal-Bench 2 | Coding Agent | 真实终端中的端到端执行 | 测试脚本 | beta 迭代与 harness 依赖 |
| WMT24++ | Translation | 多语言真实翻译质量 | automatic MT metrics | 自动指标偏差 |
| MMMLU | Multilingualism | 语言切换后的知识保持 | accuracy | 翻译题不等于原生多语能力 |

## 如果你现在只想解决一个问题，先看哪张卡

### 我想知道模型会不会“照要求做”

- 先看 `IFEval`
- 如果关心多语版显式约束，再把 `MaXIFE` 当成 IFEval 的扩展说明一起看

### 我想知道模型有没有知识、科学和数学底盘

- 通用知识先看 `MMLU-Pro`
- 高难自然科学加看 `GPQA`
- 高难数学加看 `AIME (MathArena)`
- 如果你要看最顶层 closed-ended 硬题，再看 `HLE`

### 我想知道模型是不是真的会处理长材料和新鲜推理题

- 长材料理解先看 `LongBench v2`
- 新鲜代码题与代码推理加看 `LiveCodeBench`

### 我想知道模型会不会搜、会不会做 research assistant

- 难找唯一答案先看 `BrowseComp`
- 广搜、补字段、整理表格先看 `WideSearch`

### 我想知道模型会不会调工具、跑对话式 agent 或 MCP

- 通用 tool use / function calling / multi-turn 先看 `BFCL V4`
- 对话式 customer-service agent 先看 `TAU2-Bench`
- MCP 工作流能力先看 `MCPMark`

### 我想知道模型会不会把工程任务真的跑完

- 仓库修复先看 `SWE-bench`
- 终端环境执行先看 `Terminal-Bench 2`

### 我想知道模型多语能力到底强在哪

- 真实翻译质量先看 `WMT24++`
- 语言切换后的知识保持先看 `MMMLU`

## 最容易被误读的几组 benchmark

### `AIME (MathArena)` vs `HLE`

- `AIME` 更窄，专门看竞赛数学 final-answer 推理
- `HLE` 更广，混合很多专家难题与部分多模态题
- 一个主要看“高难数学压测”，一个主要看“前沿 closed-ended 总压测”

### `BrowseComp` vs `WideSearch`

- `BrowseComp` 更偏追踪一个难找的唯一答案
- `WideSearch` 更偏搜全一组结果并整理成表
- 一个测 persistence，一个测 coverage

### `BFCL V4` vs `TAU2-Bench` vs `MCPMark`

- `BFCL V4` 更偏通用 tool use 与 function calling
- `TAU2-Bench` 更偏对话式任务完成与 dual-control 状态变化
- `MCPMark` 更偏 MCP server 上的真实工作流

### `MMMLU` vs `WMT24++`

- `MMMLU` 更偏语言切换后知识保持
- `WMT24++` 更偏真实翻译质量
- 一个是“会不会答题”，一个是“会不会翻译”

### `SWE-bench` vs `Terminal-Bench 2`

- `SWE-bench` 更偏真实 repo issue 修复
- `Terminal-Bench 2` 更偏终端里的端到端任务执行
- 两者都和 coding agent 相关，但不是一回事

## 当前建议阅读顺序

1. 先看[来源方法](/zh/cards/guide/how-we-source)，知道每张卡为什么这么写。
2. 再按你的问题选能力簇：
   `Knowledge / STEM / Math / Hard Reasoning` → `Long Context / Reasoning` → `Search / General Agent / Coding Agent` → `Translation / Multilingualism`
3. 最后回到单卡的 `§5 它可靠吗`，不要直接拿榜单数字当结论。

## 当前结论

> 现在这 16 张卡已经能覆盖一条更完整的判断路径：  
> 先看知识、科学、数学与硬推理底盘，再看长上下文与新鲜推理，再看搜索、工具调用、对话代理与代码执行，最后补上翻译与多语能力。  
> 主要风险在于拿一张卡替代整个能力簇。
