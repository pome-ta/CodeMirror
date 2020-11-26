"use strict";
//console.log('main.js');
import CodeMirror from './src/codemirror.js'


let myCodeMirror = CodeMirror(document.body, {
 value: "1loO0\nぴよよよ 😂\nコードをどのように書くのか？🤔",
 lineNumbers: true,
 }
);
