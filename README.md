# 中山大学软件工程期末大项目

---

## Introduction
> 方便项目被搜索引擎获取到的项目基础介绍指南

## TODO
> 最近的任务和目标

### XZY
1. ~~数据：全国省份旅游景点数据~~
2. ~~API: 基于省份名称获取省份景点信息~~
3. ~~数据库：添加地标表~~
4. ~~API: 基于省份名称获取地标景点~~
5. 数据：景区图片爬虫 -> Now: 471 pics
6. ~~API：根据景区名获得图片~~
7. ~~阿里云服务器配置与网站部署~~
8. ~~服务器加载景点图片资源~~
9. ~~API：根据景区名称获得景区信息~~
10. ~~用户登录与注册逻辑~~+用户登录状态维护（待测试）
11. 景区描述信息

### KJX

1. ~~实现基础省份地图~~
2. ~~实现点击后变色和跳转~~
3. ~~实现右上角的缩略介绍框~~
4. ~~实现跳转后按照省份准确缩放~~ + 添加了卫星背景图
5. 美化地图
6. ~~实现跳转后省份出现可点击的景点~~
7. 实现可点击图标的弹跳动画
8. ~~导航栏的实现和基础 HTML 跳转~~
9. ~~双击进入省份，单击marker交互，右击回到大屏幕~~
10. 自定义信息窗体的 X 关闭功能好像有问题
11. ~~信息窗体内的图片 resize~~ ps:实现的很莫名其妙，但是成功了
12. 通用景点展示 html
13. 用户个人界面和系统

## Notes
> 注意事项，或者环境配置和运行指南上的指示

### XZY

+ **2024-6-16: 数据库 schema 修改，增加 landmark 表，需重新导入 sql 文件**
+ **2024-6-17: 关于图片的获取，前端需先获得景区名再由景区名（中文）请求图片**
+ **2024-6-21: 用户登录和注册逻辑的前端逻辑参考 interfaces.md**

### KJX

+ 2024.6.16: 地图页面的操作方式改为，双击点击省份获取信息，单击图标获取详细信息，右键任意地方回到大地图尺度

## Future Plans
> 一些可以去思考和实现的想法

### XZY
1. ~~Google Trends API --> Failed~~
2. 


### KJX

0. 主题可以是 “全国旅游信息公开汇总平台”
1. 主页面是地图，导航栏在上面加功能
2. 导航栏可以包括：地图+搜索、热点新闻、博客分享、旅游路线推荐
3. 天气预报功能 
4. 用户系统，JavaScript 弹窗实现用户登录？

## Contribution
> 划分自己的贡献和已完成的工作内容

### XZY



### KJX

1. 建立了基础的前端网页框架
2. 使用高德地图 js api，配置了基础的 keys 和地图样式
3. 实现了静态的地图主页面，其中功能有上方的导航栏、搜索栏和用户信息，地图本身，地图右上的注释框，地图的省级层级轮廓划分，省级的名称标签显示，点标记的实现，地图上的三个鼠标事件，点标记的信息窗口和对应事件
+ ps:在 static/ignore/datavMap 中，探索实现了将阿里云的 DataV 的 TopoJSON 数据转换为 GeoJSON 数据的方法