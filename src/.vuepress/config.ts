import { defineUserConfig } from "vuepress";
import theme from "./theme";
import {docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: '/r4-blog/',

  plugins: [
    docsearchPlugin({
      apiKey: "",
      indexName: "",
      appId: 'YOUR_APP_ID',
      // 配置项
    }),
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Rich4$t's Blog",
      description: "Rich4$t's Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Rich4$t's Blog",
      description: "Rich4$t的博客",
    },
  },

  theme,
});
