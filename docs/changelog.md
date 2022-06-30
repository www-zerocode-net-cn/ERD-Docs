---
title: 变更日志
---

## 4.0.2
:::tip
增加关系图功能
:::
- refactor(erd): 增加关系图功能
- refactor(erd): 调整关系图引用
- refactor(erd): 增加关系图入口
- refactor(erd): 重构默认字段、表设计页面，统一调用方法 
- fix(erd): 防止保存空表结构
- fix(erd): 去掉对象页"设计表"功能
- feat(erd): 增加主键变化生成DDL
- fix(erd): 修复版本比对版本数据readonly的bug
- refactor(erd): 重构设计页面布局
- fix(erd): 重构版本比较代码 
- fix(erd): 重构版本比较代码，修复无法生成新版本bug
- fix(erd): 修复生成差量文件bug

## 4.0.1
:::tip
增加Oracle、Sqlserver、Postgresql、DB2驱动
:::
- 数据源管理
    - Oracle
    - Sqlserver
    - Postgresql
    - DB2

## 4.0.0-beta
:::tip
4.0.0-beta完成以下功能，并且优化页面样式，以及元数据结构维护便捷性
:::
- 数据源管理
    - Mysql
- 版本管理
    - 初始化版本
    - 重建版本
    - 新增版本
    - 删除版本
    - 同步
    - 标记同步
- 导入
    - 数据库逆向解析
    - pdman解析
    - ERD解析
- 导出
    - word
    - pdf
    - html
    - markdown
    - 全量数据结构
