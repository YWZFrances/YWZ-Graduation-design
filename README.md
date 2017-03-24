
=======

我的毕业设计
====
##走秀网web app的设计与实现##

[github项目地址](https://github.com/YWZFrances/YWZ-Graduation-design)
（下载地址，以后再放）
**岳文喆**
**目录**

[TOC]


###所用技术
###主要代码块
```
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './component/index.js');
var BUILD_PATH = path.resolve(__dirname, './build');
module.exports = {
	entry:  __dirname + "/myshow/app.js",//已多次提及的唯一入口文件
	  output: {
	    path: __dirname + "/build",//打包后的文件存放的地方
	    filename: "bundle.js"//打包后输出文件的文件名
	  },
	module: {
		loaders: [
			{
			test: /\.jsx?$/,
			loaders: ['babel-loader?presets[]=es2015,presets[]=react']
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			]
	}
}
```
```
	<body>
		<div id='root'>
			
		</div>
		
		<script src="./bundle.js"></script>
		
	</body>
```
###完成阶段
- [x]webpack环境的搭建和主要loder的安装使用
- [x]分模块建立项目目录完成测试以及webpack.config.js的配置
- [x]完成项目，本地服务器试运行
- [x]打包安装包，发布流应用和发行各大应用市场(待审核)
- [x]真机运行

###工作日记
**--------2017/03/03.--------**</br>
　　1.熟悉react基本语法用法
　　2.掌握基本的es6新版语法
　　3.了解webpack环境，并尝试搭建
 **--------2017/03/04.--------**
　　1.明天不上班-。-
　　2.搭建webpack环境
　　3.简单的试运行测试成功，没有安装其他的loader
 **--------2017/03/05.--------**
　　webpack环境出现问题
　　我认为是一个是端口号的问题，一个是我基础index.js的问题
　　后来看了一下，关闭服务器再启动依然有问题，排除是端口号占用问题
　　index.js的内容修改为document.write("123")一句简单的输出语句依然不行排除index.js问题
　　烦人，英文本来就不好，也看不懂问题大致意思
 **--------2017/03/06.--------**
　　webpack环境重新启用,问题解决，很蠢的问题、。。。。。。。　　　　　kjsdnfkjahsdksdnfksnkdfnskjdfnkj
**--------2017/03/07.--------**
　　今天测试一次成功啊。嗨皮
　　1.测试react模块化配合webpack loader测试成功
　　2.测试react router 路由控制页面渲染成功
**--------2017/03/08.--------**
　　祝所有妇女妇女节快乐！
　　1.测试项目板块试运行成功
　　2.头部全局组件完成
**--------2017/03/09.--------**
　　1.复习ES6的代码规范
　　2.nav全局组件完成
**--------2017/03/10.--------**
　　1.Footer全局组件完成
　　2.Content组件好难搞
　　3.了解一下IScroll和Swiper框架，以后可能用到
**--------2017/03/11.--------**
　　明天不上班-。-
　　1.Content组件依然好难搞
　　2.继续了解IScroll和Swiper框架，以后可能用到，滚动条的配置和swiper的一些选项，不过没有测试成功
**--------2017/03/12.--------**
　　1.设计没有动，看了下SQL server 和java
**--------2017/03/13.--------**
　　1.写完全局组件，包括头，尾，nav和content
　　2.写完全局样式
**--------2017/03/14.--------**
　　1.写完IScroll的配置文件config.js，(虽然自己还没很弄懂这个IScroll)
　　2.写完H5中的sessionStorage/localStorage的封装方法，以后用得上(我觉得不一定能用上。。这就尴尬了)
　　3.虽然今天写的挺多的，但是我觉得还有很多要优化的地方(包括那天的全局组件，直觉告诉我不一定对)
　　4.今天这代码。。怎么说呢。很皮。
**--------2017/03/15.--------**
　　315打假啦！！！
　　1.写完列表分类组件(有待优化。我的直觉)
**--------2017/03/16.--------**
　　1.写了部分listPage,样式还没写，在纠结写样式还是写功能的过程中一天过去了。。。
　　2.在我即将要关闭服务器push的时候，代码搞事情了，为什么说我没有Component服务了呢？嗨啊好气啊。。
　　3.我还是写样式吧，这个列表组件还缺少很多方法，写个例子明儿写写样式，真是皮皮码。。。
**--------2017/03/17.--------**
　　1.写了写列表内容样式，简单粗暴的样式
　　2.写完列表内容区的组件，写了部分列表页方法
　　 一看已经三月17了啊。。时间不多了，本来还觉得时间肯定够的，尴尬每天写的时间就那么一点，还不包括出错和测试，唉，慢慢来吧
**--------2017/03/18.--------**
　　龙口出差一天
**--------2017/03/19.--------**
　　不上班，打球去
**--------2017/03/20.--------**
　　打篮球打的我身心疲惫差点没能起来上班。。。
　　1.列表页组件基本基本基本完成差一个滚动条配置怎么那么那么那么难搞呢，皮皮皮皮皮~
　　2.详情页组件基本完成，不过swiper配置？样式？怎么永远出问题，难受
今天上班没事干。写了一天这个玩意，感觉时间好紧迫啊。。
**--------2017/03/21.--------**
　　真的不能再拖了，工作干不完，毕设也做不完，怕是要很蓝瘦咯
　　1.详情页大体实现，插件问题，和样式问题(样式我先不管他了，最后做完在修改一下)
**--------2017/03/22.--------**
　　诶克斯尅有死米？怎么突然这么多活了，啥都写不完了造吗
　　1.显示详细信息(？？？怎么会有这么无聊的页面出现，可怕)
　　2.想做购物车功能，但是为了体验还是先做登录注册模块，但是为了顺手就写购物车纠结中，这俩每个都戳了戳，啥都没写完
　　可怕的不是不会写，是已经写好了测测测测测测测试成功了，再打开又出错了，诶，这就很气
　　3.解决部分遗留问题
**--------2017/03/23.--------**
　　出现问题！极端！
　　今天工作简单，迅速干完，然后做设计
　　1.登录页面基本逻辑
　　2.注册页面基本逻辑
　　3.更多页面基本逻辑
　　样式我就先都放一边，等逻辑写对了再搞这个样式，应该不会有影响的(写样式太单一了，影响逻辑思维)
**--------2017/03/24.--------**
　　1.学习markdown语法，用来写reademe(要做就用心做，日志文档也要写好)
　　2.登录注册更多修改完成，样式大致写完，先这样测试用
　　3.markdown真的挺好用的


<p>
	重点问题！不要忘记
	1.打包编译bundle.js为何没东西
	2.上线为何传build文件夹
	3.百度云域名
	4.打包生成app
	5.手机上的滚动条一卡一卡
	6.360手机助手，流应用，无需安装、即点即用的全功能APP(未审核)
	8.发行包体积优化
	9.原生安装包---推送到各大软件市场-下载使用
<p>