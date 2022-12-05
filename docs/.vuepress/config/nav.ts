// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "配置",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "计算机基础",
        link: "/start/",
      },
      {
        text: "Java基础",
        link: "/start/",
      },
      {
        text: "Golang基础",
        link: "/deploy/",
      },
      {
        text: "微服务",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
  {
    text: "友情链接",
    items: [
      {
        text: "vuepress",
        link: "https://vuepress.vuejs.org/",
      },
      {
        text: "vuepress-theme-vdoing",
        link: "https://doc.xugaoyi.com/",
      },
      {
        text: "U2SB",
        link: "https://www.u2sb.com/",
      },
      {
        text: "MonoLogueChi",
        link: "https://blog.xxwhite.com/",
      },
    ],
  },
];
