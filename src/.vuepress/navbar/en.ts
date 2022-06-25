import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  "/",
  {
    text: "Posts",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "JavaScript",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "Article 1", icon: "edit", link: "article1" },
        ],
      },
      {
        text: "TypeScript",
        icon: "edit",
        prefix: "article/",
        children: [
          {
            text: "Article 2",
            icon: "edit",
            link: "article2",
          },
        ],
      },
      {
        text: "Python",
        icon: "edit",
        prefix: "article/",
        children: [
          {
            text: "FastApi",
            icon: "edit",
            link: "article3",
          },
        ],
      },
    ],
  }
]);
