/*
* @Author: Ye
* @Date:   2017-09-19 09:44:13
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-19 10:48:15
*/
'use strict;'
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default';
    $element = $('.' + type + '-success');
    //显示对应的提示元素
    $element.show();
})