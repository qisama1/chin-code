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
      {
        text: "Netty",
        link: "/netty/",
      }
    ],
  },
  {
    text: "微服务",
    items: [
      {
        text: "从0开始一个SpringCloud项目",
        link: "/projects/#game-world/",
      },
      {
        text: "从0开始手写一个gin项目",
        link: "/projects/#go-oj/",
      },
      {
        text: "从0开始手写一个go语言服务器",
        link: "/projects/#go-webserver/",
      },
    ],
  },
  { text: "环境部署", link: "/configs/" },
];
