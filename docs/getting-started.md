---
title: ERD Online说明
sidebar_position: 1
---

## 官方在线预览地址
ERD Online 旧版：
[**https://www.java2e.com/**](https://www.java2e.com/)

ERD Online 新版：
[**https://www.zerocode.net.cn/**](https://www.zerocode.net.cn/)

`新版本扫码登录的时候，第一次扫码失败的，再扫一次就登进去了。目前还有点小问题，在解决中`

## 新版本介绍及功能规划
[**20220311：ERD ONLINE新版本介绍及功能规划**](https://www.bilibili.com/video/BV113411W7bx/)

[**20220311：20220317：ERD ONLINE功能进度演示、头脑风暴**](https://www.bilibili.com/video/BV1tu411z7bf/)

## 交流群

### 微信群


![](../static/img/weixin.png)

## 走过路过，点个Star再过,爱你哦！

### English Documentation


See the [English Documentation](https://gitee.com/MARTIN-88/erd-online/blob/master/README.md) for document in English...

##版本规划

###v2.0.4

`用户分配角色、角色配置权限`

###v2.0.5

`通过权限控制页面菜单、以及按钮权限`

###v2.0.6

`操作日志审计`

###v3.0.0

`自动保存`

###v3.0.1

`在线多人协作`

###v3.0.2

`通过权限控制sql操作权限，进一步实现sql审批`


## 准备

### 安装 docker
	
	https://www.runoob.com/docker/centos-docker-install.html
	
### 安装 docker-compose
	
	https://www.runoob.com/docker/docker-compose.html

### 配置host

	在ui所在的服务器配置host
	127.0.0.1 erd-online


## 安装运行

### 启动服务端
	配套服务端代码：https://gitee.com/MARTIN-88/erd-apis

	下载项目
		# git clone https://gitee.com/MARTIN-88/erd-online.git erd

		# cd erd

	
	一键启动

		# docker-compose up -d

### 启动前端

	安装依赖
		# yarn install

	运行
		# yarn start
		
	打开 http://localhost:3000

## 打包桌面程序包
### Windows
	# yarn package-win

### MAC
	# yarn package-mac

### Linux
	
	# yarn package-linux


至此，web、Windows、MAC、Linux多端都可以一起用了，开心吧！！

## 代码仓库

	Github : https://github.com/whaty/MARTIN-ERD.git
	Gitee: https://gitee.com/MARTIN-88/erd-online.git

## 软件说明博客

[**ERD Online 免费在线数据库建模工具**](https://blog.csdn.net/qq_30054961/category_10551233.html)



