import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...existing code...
  themeConfig: {
    // ...existing theme config...
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    }
  }
})
