---
title: 安装
description: ⚡ 安装部署ERD Online指引.
---

## 准备

### 安装 docker

请参考

	https://www.runoob.com/docker/centos-docker-install.html

### 安装 docker-compose

请参考

	https://www.runoob.com/docker/docker-compose.html

### 配置host
	在ui所在的服务器配置host
		127.0.0.1 erd-online

## 安装运行

### 启动后端服务

后端服务代码：

	https://gitee.com/MARTIN-88/erd-apis

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

- `启动部署` 准备注意点:

| 准备项            | 操作                                       |
|----------------|------------------------------------------|
| **前端配置后端地址**   | `%erd_home%\src\utils\request.js`        |
| **后端**/**数据库** | `application.yml、erd.sql、permission.sql` |


至此，web、Windows、MAC、Linux多端都可以一起用了，开心吧！！
