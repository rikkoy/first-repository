
// class Person {
//     name: string;
//     gender: string;
//     birthday: string;
//     height: number;
//     weight: number;
//     country: string;
//     language: string;
// }
// const tom = new Person;
// tom.birthday = '1996/02/18'
// let hello: string = 'hello';
// console.log(hello);
// console.log(JSON.stringify(tom, null, 4));

let hasValue: boolean = true;
// vscodeにはtypescriptコンパイラが内蔵されているのだ！
// console.log(hasValue)
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'こんちわ';
// 型推論、型注釈・・・型推論を基本的に用いる。型推論ができないとき、型注釈する。
// 初期化しないときは、型注釈したほうがいい。なんでも入っちゃうから。(any)

// 'object'型を定義できるけど、使わない。全般を表しているだけ
const person = {
    name: {
        firstname: 'Jack',
        lastname: 'Smith'
    },
    age: 21
}

// console.log(person.age);

// 配列に型をつけるArray
const fruits: (string | number)[] = ['Apple', 'Banana', 'Grape', 1];
fruits.push('Orange');

// Tuple型
// 必ず決まりに沿った値が入るようにしたい時、配列よりも厳しく制限できる
const book: [string, number, boolean] = ['business', 1500, false];
book.push(21); // 初期値は厳しく、あとは緩いため、pushできちゃう
// console.log(book[]); // でも、参照はできない。安全なコードになるよ。

// Enum型　列挙型　特定のまとまったグループ
enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENTI
}
// 明示的に書かなかったら、それぞれ列挙された数字になる

const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
}

// any型　なんでも入る。でもその代わり、typescriptはなにもしません。javascriptの世界に戻る。

// Union型

// Literal型
const apple = 'apple'; // これしか入れれん
let lemon = 'lemon';

let clothSize: 'small' | 'medium' | 'large';
// enumとの違い。enumはオブジェクト。
const cloth: {
    color: string;
    size: ClothSize;
} = {
    color: 'white',
    size: "large"
}

// 型のエイリアス　type。複雑な方を変数のように扱う
type ClothSize = 'small' | 'medium' | 'large';

// 関数に型をつける
function add(num1: number, num2: number): number {
    // 戻り値は型推論が効く。→型つけておいたほうがよい。
    // 引数は推論をあきらめる。anyになっちゃう。
    return num1 + num2;
}
// なにも返さないときはvoidで。return文があればundefinedが使えるけど、基本使わない。
function sayHello(): void {
    // console.log('Hello!');
}

// console.log(sayHello());

// 関数型を使って、特定の関数のみを代入できる変数を作る
const anotherAdd: (n1: number, n2: number) => number = add;

const doubleNum: (num: number) => number = num => num * 2;
// console.log(doubleNum(2));

// callback関数の型
// 第二引数は、「こういう形の関数」
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    // console.log(doubleNum);
}
doubleAndHandle(23, doubleNum => {
    return doubleNum;
});

// unknown型は柔軟でanyよりは厳しい
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 567;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// never型。決して何もかえさない。
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'));