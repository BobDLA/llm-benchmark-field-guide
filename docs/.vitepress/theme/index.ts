import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () =>
        h(
          'div',
          {
            class: 'vp-doc',
            style:
              'max-width: 1152px; margin: 0 auto; padding: 48px 24px 0 24px;',
          },
          [
            h('h2', '模型能力与测试集'),
          ]
        ),
    })
  },
}
