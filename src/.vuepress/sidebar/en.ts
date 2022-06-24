import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/": [
    "",
    {
      text: "Articles",
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
      ],
    },
  ],
});
