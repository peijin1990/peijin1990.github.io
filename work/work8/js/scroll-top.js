window.onload=function(){
			var imgs=document.getElementById("img0");
			var timer1=null;
			index=0;
			timer1=setTimeout(function test(){
                index++;
                if(index==3){
                	index=0;
                }
                imgs.src="images/ad"+(index+2)+".jpg";
               setTimeout(test,2000);

			},2000);

			//滚动新闻的滚动效果
			var area=document.getElementById("scroll_div");
			var con1=document.getElementById("scroll_begin");
			var con2=document.getElementById("scroll_end");
			var time1=null;
			var time2=null;
			var speed=40;
			var delay=2000;
			var liHeight=40;
			area.scrollTop=0;
			con2.innerHTML=con1.innerHTML;
			function startMove(){
				area.scrollTop++;
				time1=setInterval(scrollUp,speed);
			}
			function scrollUp(){
                 if(area.scrollTop%liHeight==0){
                 	clearInterval(time1);
                 	time2=setTimeout(startMove,delay);
                 }else{
                 	area.scrollTop++;
                 	if(area.scrollTop>=con1.offsetHeight){
                 		area.scrollTop=0;
                 	}
                 }	
			}
			
			time2=setTimeout(startMove,delay);
			area.onmouseover=function(){
				clearTimeout(time2);
				clearInterval(time1);
			};
			area.onmouseout=function(){
            	area.scrollTop++;
				time1=setInterval(scrollUp,speed);
			};
			
		};	         