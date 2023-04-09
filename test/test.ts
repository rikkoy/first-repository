
import {} from "Jest";
function temp(num): string {
    return "カウントは" + num.toString() + "です。";
}
module.exports = temp; // この行を追加
document.body.textContent = temp(2); // カウントは2です。