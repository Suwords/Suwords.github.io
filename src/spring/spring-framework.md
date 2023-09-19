---
title: Spring
category: Spring全家桶
icon: codinghub
---

<!-- @include: @small-word.md -->

作为一名Java语言的使用者，也许你没有用过Spring，但我敢肯定你一定听说过。当你点进这篇博文，那肯定是有了探究它的想法，一起来领略下它的风采吧。

# Spring 概述

作为一名程序员，官网是获取信息的最佳方式，先给出Spring的官网地址：https://spring.io/

Spring其实有两种理解，狭义上，Spring指的是Spring Framework，它是Web服务端开发中常用的SSM架构中的一员，是一个容器框架，用于存放Java Bean对象（这里你可能会有点困扰，先有个印象，后面会详说）；在广义上，Spring指的是Spring及构建在Spring之上的其他项目，开发者将其戏称为“Spring全家桶”，目前常用的有：Spring Boot、Spring Cloud等。为了以作区别，下文中的Spring全部指代Spring Framework，其他框架将用其全称表示。

> 写这篇文章时，Spring已经更新到了6.0.12的稳定版，下文的所有内容都基于这个版本。

Spring的核心是：**控制反转（IoC）**和**面向切面编程（AoP）**，请记住这两个词，它们贯穿Spring的整个生命。

## Inversion of Control (IoC)

前面提到了，Spring是一个容器框架，里面存放着Java Bean对象，这个容器，指的就是IoC容器。

