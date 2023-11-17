// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "计算机基础",
    items: [
      {
        text: "计算机网络",
        link: "/network/",
      },
      {
        text: "操作系统",
        link: "/os/",
      },
      {
        text: "算法题解",
        link: "/datastructure/",
      },
      {
        text: "go语言基础",
        link: "/Go/",
      }
    ],
  },
  {
    text: "Spring",
    items: [
      {
        text: "Spring",
        link: "/spring/",
      },
    ],
  },
  {
    text: "数据库",
    items: [
      {
        text: "Mysql45讲",
        link: "/mysql45/",
      },
      {
        text: "Redis数据结构与实现",
        link: "/redis/",
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
        link: "/juc/",
      },
      {
        text: "JVM",
        link: "/jvm/",
      },
      {
        text: "Netty",
        link: "/netty/",
      },
      {
        text: "Java基础",
        link: "/javabasic/"
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
  {
    text: "分布式",
    items: [
      {
        text: "RPC",
        link: "/RPC/",
      },
      {
        text: "分布式中间件",
        link: "/distribution/",
      },
    ],
  },
  { text: "环境部署", link: "/configs/" },

];
