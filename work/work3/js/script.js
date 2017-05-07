window.onload=function(){
	function byId(id){
		return typeof(id)==="string"?document.getElementById(id):id;
	}
    
    var index=0,
        timer=null,
        pics=byId("banner").getElementsByTagName("img"),
        len=pics.length,
        titles=byId("title").getElementsByTagName("a");
     

    //整体效果
    function slideImg(){
    	var main=byId("main");
    	//鼠标在main上时，清除定时器
    	main.onmouseover=function(){
    		if(timer){
    			clearInterval(timer);
    		}
    	}
    	//鼠标离开main上时，开启定时器
    	main.onmouseout=function(){
    		timer=setInterval(function(){
    			index++;
    			if(index==len){
    				index=0;
    			}
    			changeImg();
    		},1000);
    	}
    	//自动滚动
    	main.onmouseout();

    	//鼠标点击导航条时，自动切换到对应图片
    	for(var i=0;i<len;i++){
    		titles[i].id=i;
    		titles[i].onclick=function(){
    			index=this.id;
    			changeImg();
    		}
    	}
    }

    //图片切换效果
    function changeImg(){
    	//遍历banner下的所有img,将其隐藏
    	for(var i=0;i<len;i++){
    		pics[i].style.display="none";
    		titles[i].className="";
    	}
    	pics[index].style.display="block";
    	titles[index].className="active";
    }

    slideImg();
}