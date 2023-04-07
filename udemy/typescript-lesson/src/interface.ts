// interfaceはオブジェクトのみのエイリアス。そこがわかりやすさ＝メリット
// typeは全部にエイリアスつけられる。
// type Human = {
//     name: string;
//     age: number;
// }
// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
    // メソッド名を書かない。関数の型を定義できる。
    // オブジェクトと混同するので、typeでよいと思う。知識。
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

// interfaceも継承できる（複数可）
interface Human extends Nameable {
    // readonly も可能
    // readonly name: string;
    // 同じ名前のプロパティも可（代入可なら、上書きされる）
    name?: string;
    age: number;
    greeting(message: string): void;
}
interface Nameable {
    name?: string;
    nickName?: string;
}

const nameable: Nameable = {
    name: '',
    nickName: 'nick'

}
// const human = {
//     name: 'Potter',
//     age: 38,
//     greeting(message: string): void {
//         console.log(message);
//     }
// }
// let tmpFunc: (message: string) => void;

// Humanインターフェースを必ず使用しなければならないクラス。
class Developer implements Human {
    name?: string;
    constructor(public age: number, public experience: number) { };
    
    // デフォルト引数
    greeting(message: string = 'Guten Tag'): void {
        console.log(message);
    }
}

const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log(message);
    }
}
const user: Human = tmpDeveloper;
user.greeting('こんちは');
