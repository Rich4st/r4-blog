import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "", // 配置主页
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "JavaScript",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1"],
        },
        {
          text: "TypeScript",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article2"],
        },
        {
          text: "FastApi",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article3"],
        },
      ],
    },
  ],
});
