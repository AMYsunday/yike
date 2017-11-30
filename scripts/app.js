"use strict";
//创建应用模块
var app =angular.module("yike",["ctrls"]);

//在模块创建好后直接执行
//在全局都会依赖 所有页面都有切换效果  所以将该方法绑定在根作用域上
app.run(["$rootScope",function($rootScope){

	//在根目录绑定collapsed属性 初始值为false 表示navs header body 没有弹出
		$rootScope.collapsed=false;
		//$rootScope.color=$rootScope.color==0?1:0;
	//绑定toggle方法 点击菜单 页面来回切换
	$rootScope.toggle=function(){
		//alert(11);
		$rootScope.collapsed=!$rootScope.collapsed;
		//将导航栏的小标题添加隐藏和显示效果
		//获取所有的dd
		var dds =document.querySelectorAll("dd");
		//循环遍历每一个dd 修改dd的样式 达到显示隐藏的效果
		if($rootScope.collapsed){
			//如果值为true 表示显示
			//遍历每一个dd 显示
			for (var i = 0; i < dds.length; i++) {
				//位置移动
				dds[i].style.transform = 'translate(0)';
				//时间差
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
			}
		}else{
			//如果值为false 表示隐藏
			//遍历每一个dd 显示
			for (var i=dds.length - 1; i>=0; i--) {
				//位置移动
				dds[i].style.transform = 'translate(-100%)';
				//时间差
				dds[i].style.transitionDuration = (dds.length-i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
			};
		}
		
	}

}]);






