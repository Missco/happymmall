/*
* @Author: Ye
* @Date:   2017-09-17 14:55:41
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-17 16:12:56
*/

require('./index.css');
var _mm  = require('util/mm.js');

// 通用页面头部
var header = {
    init : function(){
        this.bindEvent();
    },
    onload : function(){
        var keyword = _mm.getUrlParam('keyword');
        //keyword存在，则回填输入框
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent : function(){
        var _this = this;
        //点击搜索按钮之后，做搜索提交
        $('#search-btn').click(function(){
            _this.searchSubmit();
        }) 
        //输入回车，做搜索提交
        $('#search-btn').keyup(function(e){
            //13是回车键的keyCode
            if(e.keyCode === 13){
                _this.searchSubmit();
            }
        })
    },
    //搜索的提交
    searchSubmit : function(){
        var keyword =  $.trim($('#search-input').val());
        //如果提交的时候有keyword，正常跳转到list页
        if(keyword){

            window.location.href = './list.html?keyword=' + keyword;
        }
        //如果keyword为空，直接跳转回首页
        else{
            _mm.goHome();
        }
    }
};

header.init();