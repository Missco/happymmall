/*
* @Author: Ye
* @Date:   2017-09-06 11:09:23
* @Last Modified by:   Ye
* @Last Modified time: 2017-09-12 18:09:20
*/

'use strict';//js进入严格模式，可自动检查语法错误
// console.log('hello index');
var _mm = require('util/mm.js');
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

console.log(_mm.getUrlParam('test'));
