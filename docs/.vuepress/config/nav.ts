// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "计算机基础",
    items: [
      {
        text: "计算机网络",
        link: "/start/",
      },
      {
        text: "操作系统",
        link: "/deploy/",
      },
      {
        text: "Mysql45讲",
        link: "/mysql45/",
      },
    ],
  },
  {
    text: "Java基础",
    items: [
      {
        text: "Java容器",
        link: "/start/",
      },
      {
        text: "JUC并发",
        link: "/deploy/",
      },
      {
        text: "JVM",
        link: "/more/",
      },
    ],
  },
  {
    text: "微服务",
    items: [
      {
        text: "从0开始一个SpringCloud项目",
        link: "/start/",
      },
      {
        text: "从0开始一个gin项目",
        link: "/deploy/",
      },
      {
        text: "微服务架构",
        link: "/more/",
      },
    ],
  },
  {
    text: "配置",
    items: [
      {
        text: "项目配置",
        link: "/start/",
      },
      {
        text: "部署",
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
