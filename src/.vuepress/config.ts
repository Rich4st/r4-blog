import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: '/<REPO>/',

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
