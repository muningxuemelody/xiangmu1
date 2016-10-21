/*=--------------------这是banner图的动画效果----------------------*/ 
$.get("js/scrollImg.json",function(data){//获取json数据
				
				$.each(data,function(index,value){
					$("<li><a href='' style='background:url("+value+") no-repeat center center'></a></li>").appendTo($("#scroll_box ul"));//把获取的json数据拼接成字符串放到ul里
					$("<a>").appendTo($(".slider-nav"));//把下划线获取的json数据拼接成字符串也放到ul里
					
				})
				var $ul = $("#scroll_box ul");//var一个变量代表是放json数据的盒子

				$("#scroll_box li:first-child").clone().appendTo($("#scroll_box ul"));//把克隆出来的第一张图片插入到ul里这是ul里就有5张图片了

				var $li = $("#scroll_box li");//var 一个变量表示li
				var len = $li.length;//表示Li的长度
				var perWidth = $li.outerWidth();//表示li的宽度
				$ul.css("width",perWidth*len);//ul的宽度=li*len
				$li.css("width",perWidth);//li的宽度
				$(".slider-nav a").css("width",$(".slider-nav").outerWidth()/(len-1)-1);//a的宽度=a所在的容器slider-nav/(len-1) 这样小按钮就居中了
				$(".slider-nav a").eq(0).addClass("cur");//表示第一个小按钮的演示默认为亮的
				var i = 0;//i是记录图片的下角标 0表示第一张图片 1表示第二张图片 以此类推
				var timer = setInterval(move,3000);//设定一个定时器 没人点击是自动播放
				function move(){//运动函数
					i++;
					
					if(i==-1){//判断点击右键时候的if语句
					i=len-2;
					$ul.css("margin-left",-perWidth*(len-1));
						}
					if(i==len-1){//判断点击小按钮时候的if语句
						$(".slider-nav a").eq(0).addClass("cur").siblings().removeClass();
						
					}
					if(i == len){//判断点击左键时候的if语句
						i = 1;

						$("#scroll_box ul").css("margin-left",0);	
					}
					
					$ul.stop().animate({"margin-left":-perWidth*i});//move的主体部分 即控制ul的动画效果
					$(".slider-nav a").eq(i).addClass("cur").siblings().removeClass();//此语句控制小按钮的移动位置 运动同时清除兄弟元素的样式
				}
				$("#prev").click(function(){//点击左键时候
					clearInterval(timer);//清除定时器 让动画停止
					move();//运动语句打开
					timer = setInterval(move,3000);//再次让定时器启动
				});
				$("#next").click(function(){//点击右键时候
					clearInterval(timer);//清除定时器 让动画停止
					i = i - 2;
					move();//运动语句打开
					timer = setInterval(move,3000);//再次让定时器启动
				})
				$(".slider-nav a").hover(function(){//点击小按钮时候
				clearInterval(timer);//清除定时器 让动画停止
					i = $(this).index()-1;
					move()//运动语句打开
				},function(){
					timer = setInterval(move,3000);
				})
			})
/*--------------------------------------------containerhua动的JS--------------------------------------------*/ 
$.get("js/container.json",function(data){//获取json数据
				var str = "";
				
				$.each(data,function(index,value){
					
					if(index==1||index==4){
						str+="<li class='container_ul_li_M'><a href='' style='background:url("+data[index]+") no-repeat center center'></a></li>";
					}else{
						str+="<li><a href='' style='background:url("+data[index]+") no-repeat center center'></a></li>";
					}
					
					$(".container_ul").html(str)//把获取到的图片插入到container_ul中
					//content滑入动画
					var $li0 = true,
						$li1 = true,
						$li2 = true,
						$li3 = true,
						$li4 = true,
						$li5 = true;
					//li1动画
					$(".container_ul li").eq(0).hover(function(){
						console.log("ok")
						$li0 = true;
						setTimeout(function(){
							if($li0){$(".container_div a").eq(0).animate({left:0});};
						},500);	
					},function(){
							$li0 = false;
						});
						//li2动画
						$(".container_ul li").eq(1).hover(function(){
							$li1 = true;
							setTimeout(function(){
								if($li1){$(".container_div a").eq(1).animate({top:0});};
							},500);	
						},function(){
							$li1 = false;
						});
						//li3动画
						$(".container_ul li").eq(2).hover(function(){
							$li2 = true;
							setTimeout(function(){
								if($li2){$(".container_div a").eq(2).animate({right:0})};
							},500);	
						},function(){
							$li2 = false;
						});
						//li4动画
						$(".container_ul li").eq(3).hover(function(){
							$li3 = true;
							setTimeout(function(){
								if($li3){$(".container_div a").eq(3).animate({left:0})};
							},500);	
						},function(){
							$li3 = false;
						});
						//li5动画
						$(".container_ul li").eq(4).hover(function(){
							$li4 = true;
							setTimeout(function(){
								if($li4){$(".container_div a").eq(4).animate({bottom:0})};
							},500);	
						},function(){
							$li4 = false;
						});
						//li6动画
						$(".container_ul li").eq(5).hover(function(){
							$li5 = true;
							setTimeout(function(){
								if($li5){$(".container_div a").eq(5).animate({right:0})};
							},500);	
						},function(){
							$li5 = false;
						});
					//滑出动画
					$(".container_div .a1").mouseout(function(){
						$(this).animate({left:-650});
						});
					$(".container_div .a2").mouseout(function(){
						$(this).animate({top:-410});
					});
					$(".container_div .a3").mouseout(function(){
						$(this).animate({right:-650});
					});
					$(".container_div .a4").mouseout(function(){
						$(this).animate({bottom:-410});
					});


				})
})
/*-----------------------------这里是购物车的动画--------------------------------*/ 
		// 滑入动画
		// 
		
		$(".xiang").mouseover(function(){
			
				$(".xiang_div_btn").eq(0).stop().animate({top:220});

		})
		$(".xiang2").mouseover(function(){
				$(".xiang_div_btn").eq(1).stop().animate({top:220});
		})
		$(".xiang3").mouseover(function(){
				$(".xiang_div_btn").eq(2).stop().animate({top:220});
		})
		// //滑入动画
		$(".xiang_div_btn").mouseover(function(){
				
				$("a").hover(function(){
					
					   $(this).css("color","red");
					})
				$("a").mouseout(function(){
					
					   $(this).css("color","black");
					})

		})

		//滑出动画
		$(".xiang").mouseout(function(){
			$(".xiang_div_btn").eq(0).stop().animate({top:305});
			});
		$(".xiang2").mouseout(function(){
			$(".xiang_div_btn").eq(1).stop().animate({top:305});
			});
		$(".xiang3").mouseout(function(){
			$(".xiang_div_btn").eq(2).stop().animate({top:305});
			});
		
	