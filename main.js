"use strict";

import CodeMirror from './src/codemirror.js'


document.body.addEventListener('keydown',
    event => {
        if (event.key === 'v') {
           alert("Ctrl+Vが押されました")
        }
    });


let _e = document.createEvent("KeyboardEvent");
_e.initKeyEvent("keydown", true, true, null, false, false, false, false, 65, 0);
document.getElementById("dummy").dispatchEvent(_e);

const myCodeMirror = CodeMirror(document.getElementById('cm'), {
 value: "1loO0\nぴよよよ 😂\nさて、コードをどのように書くのか？🤔",
 lineNumbers: true,
 }
);
