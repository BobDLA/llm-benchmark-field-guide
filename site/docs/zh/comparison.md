# 跨卡片对比

当前站点已上线 2 张核心卡片：

- `BrowseComp`：Search Agent / Persistent Browsing
- `SWE-bench`：Coding Agent / Autonomous Bug Fix

这页不替代单卡阅读，而是帮你先判断“要看哪一类 benchmark”。

## 一眼看懂：它们根本不是在测同一种能力

| 维度 | BrowseComp | SWE-bench |
| ---- | ---------- | --------- |
| 一级类目 | Search Agent | Coding Agent |
| 典型任务 | 在开放互联网里追到一个难找事实 | 在真实 repo 里修一个真实 issue |
| 输入 | 短问题 + 多约束线索 | repo snapshot + issue 描述 |
| 输出 | 短答案 + explanation + confidence | Git patch |
| 评分方式 | LLM judge 语义等价 | 跑测试套件，算 `% Resolved` |
| 主要难点 | 搜索路径设计、网页可信度判断 | 代码定位、跨文件修改、执行环境 |
| 典型风险 | web drift、judge 主观性 | 训练污染、scaffold 差异、测试薄弱 |
| 最容易误读 | 高分 ≠ 全能 research agent | 高分 ≠ 纯底模编程能力强 |

## 它们各自更像在回答什么问题

### BrowseComp 更适合回答

- 这个模型会不会在开放互联网里持续搜下去？
- 它会不会换搜索策略，而不是在错误方向上硬搜？
- 它是不是只会找显眼答案，还是能追难找线索？

### SWE-bench 更适合回答

- 这个 agent 能不能在真实代码库里把 bug 修掉？
- 它在 repo navigation、patch generation、test execution 上是否成体系？
- 它的工程 loop 是不是足够强，能把 patch 跑通？

## 什么时候优先看哪张卡

### 优先看 BrowseComp

- 你在做 web research agent
- 你关心 persistent browsing / fact finding
- 你要比较“搜索策略能力”，不是“代码修复能力”

### 优先看 SWE-bench

- 你在做 coding agent
- 你关心真实仓库 bug fix
- 你要比较 patch 产出和测试通过率

## 两张卡一起看时，最值得注意的区别

| 主题 | BrowseComp | SWE-bench |
| ---- | ---------- | --------- |
| 数据来源 | 人工构造的开放网络题 | 真实 GitHub issue + PR |
| 环境稳定性 | 低，网页会变 | 高，repo snapshot 冻结 |
| 结果可复现性 | 中，受 web drift 影响 | 中高，但受 scaffold 影响 |
| 对 agent loop 的依赖 | 高 | 很高 |
| 对工具形态的依赖 | 搜索 / 浏览 / 证据拼接 | 终端 / 搜索 / 编辑 / 执行 |

## 推荐阅读顺序

1. 如果你在做 research/search 产品，先读 `BrowseComp`。
2. 如果你在做 coding agent，先读 `SWE-bench`。
3. 如果你在做通用 agent 平台，两张都该看：
   Search benchmark 告诉你“信息定位”强不强。
   Coding benchmark 告诉你“执行修复”强不强。

## 当前结论

> `BrowseComp` 更像“开放互联网里的难题搜索测试”；`SWE-bench` 更像“真实仓库里的补丁修复测试”。它们都重要，但不能互相替代。
