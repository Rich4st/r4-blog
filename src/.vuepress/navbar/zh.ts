import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
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
        text: "Vue",
        icon: "edit",
        prefix: "article/",
        children: [
          {
            text: "LogicFlow",
            icon: "edit",
            link: "article2",
          },
          {
            text: "VuePress2",
            icon: "edit",
            link: "vuepress2",
          },
          {
            text: "OpenLayers",
            icon: "edit",
            link: "OpenLayers",
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
  },
]);
