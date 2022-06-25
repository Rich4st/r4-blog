import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Rich4$t",
    url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/Rich4st/r4-blog",

  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      Discord: "https://discord.com/channels/953903655768174602/953903655768174604",
      Email: "https://mail.qq.com/",
      Facebook: "https://www.facebook.com/profile.php?id=100027659560342",
      GitHub: "https://github.com/Rich4st",
      Gmail: "https://gmail.com",
      Instagram: "https://www.instagram.com/rich4st/",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=2357823678&site=qq&menu=yes",
      Twitter: "https://twitter.com/elonmusk",
      Wechat: "http://182.61.149.102/Rich4st.png",
      Youtube: "https://www.youtube.com/channel/UCQmpqrvhdD6UsTmw87hxvlQ",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.en,

      // sidebar
      sidebar: sidebar.en,

      footer: "Rich4$t",

      displayFooter: true,

      blog: {
        description: "A Front-End Developer",
        intro: "/intro.html",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "Rich4$t",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    mdEnhance: {
      enableAll: false,
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },
  },
});
