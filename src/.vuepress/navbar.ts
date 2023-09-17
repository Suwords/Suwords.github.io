import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "计算机基础",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "操作系统",
        icon: "lightbulb",
        prefix: "bar/",
        children: [],
      },
      {
        text: "组成原理",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
      {
        text: "计算机网络",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
      {
        text: "编译原理",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
      {
        text: "算法与数据结构",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
    ],
  },
  {
    text: "后端开发",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "常用技术",
        icon: "lightbulb",
        prefix: "bar/",
        children: [
          {
            text: "Java",
            icon: "lightbulb",
            prefix: "bar/",
            children: [],
          },
          {
            text: "Spring",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "SpringMVC",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "MyBatis",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "SpringBoot",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "Dubbo",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
        ],
      },
      {
        text: "软件开发基础",
        icon: "lightbulb",
        prefix: "/zh/guide/",
        children: [
          {
            text: "Maven",
            icon: "lightbulb",
            prefix: "bar/",
            children: [],
          },
          {
            text: "Gradle、Groovy",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "Git",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "Nginx",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "Docker",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
          {
            text: "Jenkins",
            icon: "lightbulb",
            prefix: "foo/",
            children: [],
          },
        ],
      },
      {
        text: "微服务",
        icon: "lightbulb",
        prefix: "/zh/guide/",
        children: [
          {
            text: "SpringCloud",
            icon: "lightbulb",
            prefix: "bar/",
            children: [],
          },
        ],
      },
    ],
  },
  {
    text: "数据库",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "MySQL",
        icon: "lightbulb",
        prefix: "bar/",
        children: [],
      },
      {
        text: "Redis",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
      {
        text: "MongoDB",
        icon: "lightbulb",
        prefix: "foo/",
        children: [],
      },
    ],
  },
  {
    text: "大数据",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Hadoop",
        icon: "lightbulb",
        prefix: "bar/",
        children: [],
      },
    ],
  },
  {
    text: "AI",
    icon: "lightbulb",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Hadoop",
        icon: "lightbulb",
        prefix: "bar/",
        children: [],
      },
    ],
  },
]);
