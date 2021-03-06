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
          {
            text: "Vue开发移动端",
            icon: "edit",
            link: "postcss-pxtoviewport",
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
