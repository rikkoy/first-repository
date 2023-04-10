import axios from 'axios';
axios.get('')
// JavaScriptのライブラリをtypeScriptで使う
// ①@types/*をさがす
// ②型定義ファイルを書く。
import _ from 'lodash'
console.log(_.shuffle([1, 2, 3, 4]));
// 名前空間
namespace myApp {
    const hello = 'hello';
    export const name = 'Quill';
    export interface Nameble {
        name: string;
    }

}
const hello = myApp.name;
let Nameble: myApp.Nameble;

// 値と型とnamespaceは同じ名前で共存できる。
// 値同士、型同士はNo
// 例外もあるよ
