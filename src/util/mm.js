/*
* @Author: Ye
* @Date:   2017-09-11 15:17:17
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-12 17:40:03
*/
'use strict';
var conf = {
    //此时接口地址与静态文件地址相同，可以直接设置为空
    serverHost : ''
};
//定义一个工具类mm为一个对象
var _mm = {
    //请求后端数据
    request : function(param){
        var _this=this;//在request中无法获取_mm对象，增加this
        $.ajax({
            type        : param.method  || 'get' ,
            url         : param.url     || '',
            dataType    : param.type    || 'json',
            data        : param.data    || '',
            success     : function(res){
                //请求成功
                if(0 === res.status){
                    typeof param.success === 'function' && param.success(res.data,res.msg);
                }
                //没有登录状态，需要强制登录
                else if(10 === res.status){
                    _this.doLogin();
                }
                //请求数据错误
                else if(1 === res.status){
                   typeof param.error === 'function' && param.error(res.msg);
                }
            },
            error       : function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }
        })
    },
    //获取服务器地址
    getServerUrl : function(path){
        return conf.serverHost + path;
    },
    //获取url参数
    getUrlParam : function(name){
        //happymmall.com/product/list?keyword=xxx&page=1
        //设置正则表达式规则，提取keyword部分
        var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        //？之后的参数匹配reg，匹配成功为数组，否则为none
        var result  = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //统一登录处理
    doLogin : function(){
        //登录跳转回原来的页面，页面url可能包含特殊字符，导致url截断，因此需要encodeURIComponent转码
        window.location.href = './login.html?redirect=' + encodeURIComponent(window.locaton.href);

    }
};

module.exports= _mm;//模块化输出