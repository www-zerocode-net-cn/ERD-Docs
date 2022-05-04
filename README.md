# erd-docs

#### 介绍

erd门户和文档

#### 软件说明
使用的技术栈

	--react

	--js

	--md

软件包说明


![](../static/img/guide/5.png)

主要配置和文件：


	--sidebars.js:菜单展示
	
	--docs: 文档文件md文件
	
	--blog：博客md文件
	
	--src： 源码一般不需要调整
	
	--static： 静态图片，博客和文档文件展示图片统一存放处
	
	--packjson.json/package-lock.json 依赖库清单


	ps:每次调整调整这些文档即可


#### 安装教程

1.  安装依赖包

	npm install

	![](../static/img/guide/1.png)



2.  启动

	npm run satrt

	![](../static/img/guide/2.png)

3.  打包
	打包放入服务器目录，配置nginx即可访问

	npm run build

	![](../static/img/guide/3.png)


	![](../static/img/guide/4.png)

#### 使用说明

服务器安装

	nodejs

	ps:最好是nodejs 12+以上

	具体操作参考上面

	安装教程


