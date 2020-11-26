"use strict";

import CodeMirror from './src/codemirror.js'


const myCodeMirror = CodeMirror(document.getElementById('cm'), {
 value: "1loO0\nぴよよよ 😂\nさて、コードをどのように書くのか？🤔",
 lineNumbers: true,
 }
);
