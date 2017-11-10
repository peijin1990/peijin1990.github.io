## 基于bootstrap3的web单页

> 从去年开始在[慕课网](http://www.imooc.com)自学前端，这个网站是github提供的在线免费空间搭建的静态网站

### 介绍

- index页面是由bootstrap3提供的examples中的carousel.html改建而来
- bootstrap对移动端友好，但是还是在css中使用了@media进一步优化移动端显示。

### 不足

- 网页的加载资源使用了cdnjs在线资源库，国内使用百度公共资源库可能更快，但是使用时存在跨域问题，本地没有好的解决方案，使用cdnjs不存在这个问题，而且它的资源库版本更新，内容更全
- 对图片基本做了处理，优先使用在线的图片压缩网站[https://tinypng.com/](https://tinypng.com/)处理，如果还不满意再使用ps降低质量
- css/js/image还需要gulp压缩，进一步提升第一次打开的速度

### 更新

- 2017/11/10
  1.修复bootstrap2综合网站首页，carousel图片跳转边缘太长问题，在<code>#carousel_box</code>上添加```{overflow:hidden;}```
  2.修复bootstrap2某些页面没有链接跳转
  3.将bootstrap2中的本地地址转换为cdnjs地址


