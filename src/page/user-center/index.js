/*
* @Author: Ye
* @Date:   2017-09-28 10:35:37
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-28 12:48:18
*/
'use strict';//js进入严格模式，可自动检查语法错误
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _user             = require('service/user-service.js');
var templateIndex   = require('./index.string');
// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad : function(){
        //初始化左侧菜单
        navSide.init({
            name : 'user-center'
        });
        //加载用户信息
        this.loaderUserInfo();
    },
    //加载用户信息
    loaderUserInfo : function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _mm.renderHtml(templateIndex, res);
            $('.panel-body').html(userHtml);
        },function(errMsg){
            _mm.errorTips(errMsg);
        });
    }
};
$(function(){
    page.init();
});