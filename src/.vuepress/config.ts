import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "代码之道",
  description: "文艺青年的代码分享平台",

  theme: hopeTheme({
    logo: "/logo.png",
  }),
  // Enable it with pwa
  // shouldPrefetch: false,
});
