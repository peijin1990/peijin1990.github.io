### 1.0
Date 2017/9/30

- 总体修改
  1.修改footer底部的网页说明，删除授权声明
  2.对于源代码中的冗余代码，进行处理简化
  3.添加导航条搜索框icon-search图标，同时修改input的padding-right值，确保搜索输入内容不把搜索图标覆盖,icon图标用opacity降低颜色值

- 一、首页
  1.修改首页的导航栏，删除无内容的导航栏项目，添加阅读（read.html），登录（login.html），注册（register.html）页面
  2.调整carousel图片的位置，居中处理，美化手动切换左右提示箭头的css呈现
  3.美化carousel图片中的文字说明，对开始学习button，添加hover特效
  4.为footer部分的导航h4标题，添加鼠标滑过的动态效果，添加.before-bg类

- 二、单词
 1.添加至首页的导航
 2.对按钮格式进行美化，添加hover时的css3动画效果
  transition-origin:50%;
  同时注意运动transform:translateZ(0)，改变层叠顺序，使:before状态下的背景颜色能够覆盖，但是层叠顺序低于内容。
 3.修复页面拖动时，affix部分不能覆盖最下面部分内容的bug，.logo属性已经为fixed状态，当调用affix时，再在style.css中添加如下语句
  .logo{
  z-index:1000;
}

- 三、新闻
 1.导航条图标链接到首页
 2.对右侧“扇贝新闻客户端”标题下的图片和说明进行修饰，调整span1的比例为35%，span3的比例为45%，对span1中的图片添加18px的border-radius。
 3.对右侧“文章来源”下的内容，进行分类修饰

- 六、打卡日记
 1.导航条图标链接到首页
 2.修改右侧offset的top位置，使过度更加自然

