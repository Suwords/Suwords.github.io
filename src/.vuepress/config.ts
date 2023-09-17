import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "代码之道",
  description: "文艺青年的代码分享平台",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
