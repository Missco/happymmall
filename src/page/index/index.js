/*
* @Author: Ye
* @Date:   2017-09-06 11:09:23
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-19 09:39:27
*/

'use strict';//js进入严格模式，可自动检查语法错误
// console.log('hello index');
// require('page/common/nav/index.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

navSide.init({
    name : 'pass-update'
});
// alert('123');
// _mm.request({
//     url : '/product/list.do?keyword=1',
//     success : function(res){
//         console.log(res);
//     },
//     error : function(errMsg){
//         console.log(errMsg);
//     }

// });

//console.log(_mm.getUrlParam('test'));
