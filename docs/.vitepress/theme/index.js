import DefaultTheme from 'vitepress/theme'

import logo from './components/logo.vue'

import './index.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // Call the original enhanceApp first to preserve all default components
    DefaultTheme.enhanceApp?.(ctx)
    
    // Then register your custom components
    ctx.app.component('logo', logo)
  }
}