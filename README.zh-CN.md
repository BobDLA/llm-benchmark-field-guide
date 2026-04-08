# LLM Benchmark Field Guide

一个把重要 LLM benchmark 整理成标准化解读卡片的参考站点，重点说明它们在测什么、怎么测，以及分数什么时候值得信。

[English README](./README.md)

## 静态站点

本仓库通过 GitHub Pages 部署为静态站点。

- 主页入口：https://bobdla.github.io/llm-benchmark-field-guide/
- 中文首页：https://bobdla.github.io/llm-benchmark-field-guide/zh/
- 英文首页：https://bobdla.github.io/llm-benchmark-field-guide/en/
- 中文对比页：https://bobdla.github.io/llm-benchmark-field-guide/zh/cards/comparison
- 英文对比页：https://bobdla.github.io/llm-benchmark-field-guide/en/comparison

说明：

- 根页面会根据浏览器语言自动跳转到 `/zh/` 或 `/en/`
- 如果 GitHub 用户名或仓库名变了，这里的链接也需要一起更新

## 当前覆盖

站点目前包含 12 个能力类目、16 张 benchmark 卡片：

- Knowledge
- Instruction Following
- Long Context
- STEM
- Math
- Hard Reasoning
- Reasoning
- Search Agent
- General Agent
- Coding Agent
- Translation
- Multilingualism

## 目录结构

```text
.
|-- docs/
|   |-- index.md                # 语言跳转入口
|   |-- zh/                     # 中文站点内容
|   |-- en/                     # 英文站点内容
|   `-- .vitepress/             # VitePress 配置、主题、构建产物
|-- .github/workflows/deploy.yml
|-- package.json
|-- README.md
`-- README.zh-CN.md
```

关键路径：

- `docs/zh/cards/`：中文 benchmark 卡片
- `docs/en/cards/`：英文 benchmark 卡片
- `docs/zh/index.md`：中文首页
- `docs/en/index.md`：英文首页
- `docs/.vitepress/config.ts`：站点配置、语言、导航、侧边栏
- `docs/.vitepress/theme/`：自定义主题入口与样式

## 本地开发

环境要求：

- Node.js 20+
- npm

安装依赖：

```bash
npm ci
```

启动本地开发服务器：

```bash
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

本地预览构建结果：

```bash
npm run docs:preview
```

构建输出目录：

```text
docs/.vitepress/dist
```

## 部署

部署由 GitHub Actions 负责：

- 工作流文件：`.github/workflows/deploy.yml`
- 触发条件：push 到 `main`，或手动触发
- 托管目标：GitHub Pages
- 发布产物：`docs/.vitepress/dist`

如果仓库是私有仓库，当前工作流会跳过 Pages 部署。

## 卡片结构

站内 benchmark 卡片统一采用 6 节结构：

1. 一句话定义
2. 快速参考
3. 卡片导航
4. 它怎么运作
5. 它可靠吗
6. 我该用它吗

另外还包含这些说明页：

- 怎么读一张卡片
- 这些卡片怎么取材
- 跨卡片对比

## License

当前仓库还没有附带许可证文件。如果希望明确复用范围，需要额外补充 `LICENSE`。
