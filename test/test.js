"use strict";
exports.__esModule = true;
function temp(num) {
    return "カウントは" + num.toString() + "です。";
}
module.exports = temp; // この行を追加
document.body.textContent = temp(2); // カウントは2です。
