import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repoSlug = process.env.GITHUB_REPOSITORY
const repoName = repoSlug?.split('/')[1]
const isUserOrOrgPages = repoName?.toLowerCase().endsWith('.github.io')
const base =
  process.env.VITEPRESS_BASE ??
  (repoName ? (isUserOrOrgPages ? '/' : `/${repoName}/`) : '/')
const socialLinks = repoSlug
  ? [{ icon: 'github', link: `https://github.com/${repoSlug}` }]
  : []

export default withMermaid(
  defineConfig({
    title: 'LLM Benchmark Field Guide',
    description: 'A practical guide to what each benchmark really measures',

    base,

    head: [
      ['meta', { name: 'theme-color', content: '#5b8dff' }],
    ],

    locales: {
      zh: {
        label: '中文',
        lang: 'zh-CN',
        link: '/zh/',
        title: '大模型 Benchmark Field Guide',
        description: '一套解释 benchmark 在测什么、怎么测、可不可信的解读卡',
        themeConfig: {
          nav: [
            { text: '首页', link: '/zh/' },
            { text: '开始阅读', link: '/zh/cards/guide/how-to-read' },
          ],
          sidebar: {
            '/zh/cards/': [
              {
                text: '📖 阅读指南',
                collapsed: false,
                items: [
                  { text: '怎么读一张卡片', link: '/zh/cards/guide/how-to-read' },
                  { text: '这些卡片怎么取材', link: '/zh/cards/guide/how-we-source' },
                ],
              },
              {
                text: '🗺️ 跨卡片对比',
                collapsed: false,
                items: [
                  { text: '对比纵览', link: '/zh/cards/comparison' },
                ],
              },
              {
                text: '🔍 Knowledge · 知识',
                collapsed: false,
                items: [
                  { text: 'MMLU-Pro', link: '/zh/cards/knowledge/mmlu-pro' },
                ],
              },
              {
                text: '📋 Instruction Following · 指令遵循',
                collapsed: false,
                items: [
                  { text: 'IFEval', link: '/zh/cards/instruction-following/ifeval' },
                ],
              },
              {
                text: '📚 Long Context · 长上下文',
                collapsed: false,
                items: [
                  { text: 'LongBench v2', link: '/zh/cards/long-context/longbench-v2' },
                ],
              },
              {
                text: '🔬 STEM · 科学',
                collapsed: false,
                items: [
                  { text: 'GPQA', link: '/zh/cards/stem/gpqa' },
                ],
              },
              {
                text: '➗ Math · 数学',
                collapsed: false,
                items: [
                  { text: 'AIME (MathArena)', link: '/zh/cards/math/aime' },
                ],
              },
              {
                text: '🧩 Hard Reasoning · 硬推理',
                collapsed: false,
                items: [
                  { text: 'HLE', link: '/zh/cards/hard-reasoning/hle' },
                ],
              },
              {
                text: '🧠 Reasoning · 推理',
                collapsed: false,
                items: [
                  { text: 'LiveCodeBench', link: '/zh/cards/reasoning/livecodebench' },
                ],
              },
              {
                text: '🌐 Search Agent · 搜索代理',
                collapsed: false,
                items: [
                  { text: 'BrowseComp', link: '/zh/cards/search-agent/browsecomp' },
                  { text: 'WideSearch', link: '/zh/cards/search-agent/widesearch' },
                ],
              },
              {
                text: '🛠️ General Agent · 通用代理',
                collapsed: false,
                items: [
                  { text: 'BFCL V4', link: '/zh/cards/general-agent/bfcl-v4' },
                  { text: 'TAU2-Bench', link: '/zh/cards/general-agent/tau2-bench' },
                  { text: 'MCPMark', link: '/zh/cards/general-agent/mcpmark' },
                ],
              },
              {
                text: '💻 Coding Agent · 代码代理',
                collapsed: false,
                items: [
                  { text: 'SWE-bench', link: '/zh/cards/coding-agent/swebench' },
                  { text: 'Terminal-Bench 2', link: '/zh/cards/coding-agent/terminal-bench-2' },
                ],
              },
              {
                text: '🈯 Translation · 翻译',
                collapsed: false,
                items: [
                  { text: 'WMT24++', link: '/zh/cards/translation/wmt24' },
                ],
              },
              {
                text: '🌍 Multilingualism · 多语言',
                collapsed: false,
                items: [
                  { text: 'MMMLU', link: '/zh/cards/multilingualism/mmmlu' },
                ],
              },
            ],
          },
          outline: {
            label: '目录',
            level: [2, 3],
          },
          lastUpdated: { text: '最后更新' },
          docFooter: { prev: '上一篇', next: '下一篇' },
        },
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        title: 'LLM Benchmark Field Guide',
        description: 'A practical guide to what each benchmark really measures',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Cards', link: '/en/cards/search-agent/browsecomp' },
            { text: 'Compare', link: '/en/comparison' },
            { text: 'Guide', link: '/en/guide/how-to-read' },
          ],
          sidebar: {
            '/en/cards/': [
              {
                text: 'Search Agent',
                collapsed: false,
                items: [
                  { text: 'BrowseComp', link: '/en/cards/search-agent/browsecomp' },
                ],
              },
              {
                text: 'Coding Agent',
                collapsed: false,
                items: [
                  { text: 'SWE-bench', link: '/en/cards/coding-agent/swebench' },
                ],
              },
            ],
            '/en/guide/': [
              {
                text: 'Guide',
                items: [
                  { text: 'How to Read a Card', link: '/en/guide/how-to-read' },
                ],
              },
            ],
            '/en/comparison': [
              {
                text: 'Compare',
                items: [
                  { text: 'BrowseComp vs SWE-bench', link: '/en/comparison' },
                ],
              },
            ],
          },
          outline: {
            label: 'On this page',
            level: [2, 3],
          },
        },
      },
    },

    lastUpdated: true,

    themeConfig: {
      socialLinks,
      search: {
        provider: 'local',
      },
    },

    mermaid: {},
    mermaidPlugin: {
      class: 'mermaid',
    },
  })
)
