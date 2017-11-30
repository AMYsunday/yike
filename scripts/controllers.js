/*
* @Author: jay
* @Date:   2017-11-30 14:22:33
* @Last Modified by:   jay
* @Last Modified time: 2017-11-30 14:55:17
*/
//该文件用于存放控制器
//创建独立的模块  该模块的作用就是创建不同的控制器 方便其他模块直接使用
angular.module('ctrls', []).controller("navs",["$scope",function($scope){//创建控制器navs 模拟导航栏数据
	$scope.navs=[
		{"href":"#/index","icon":"icon-home","text":"今日一刻"},
		{"href":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"href":"#/author","icon":"icon-pencil","text":"热门作者"},
		{"href":"#/category","icon":"icon-menu","text":"栏目浏览"},
		{"href":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
		{"href":"#/settings","icon":"icon-cog","text":"设置"}
	];
}]);

