type Engineer = {
    name: string;
    role: string;

}
type Blogger = {
    name: string;
    follower: number;
}

// インターセクション型
type EngineerBlogger = Engineer & Blogger;
// interface EngineerBlogger extends Engineer, Blogger{};

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

/* type guard */
// typeof　演算子

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
// in 演算子
type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
// instanceof
class Dog {
    // タグ付きユニオン
    kind: 'dog' = 'dog';
    speak() {
        console.log('wannwann');
    }
}
class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('piyopiyo');
    }
    fly() {
        console.log('patapata');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }

    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird);

// 型アサーション 2通り
// typescriptより、人間のほうが型のことをわかっている場合の教え方。
// const input: HTMLInputElement = <HTMLInputElement>document.getElementById('input');
// const input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;

// non-null assertion operator !
// 絶対にnullじゃないことを教える。

// index signeture
interface Designer {
    name: string;
    // 型さえあっていればなんでも入れられちゃう。
    [index: string]: string;
}

const designer: Designer = {
    name:'P',
    role: 'web'
}
console.log(designer.nanndemo);

// 関数のオーバーロード
const upperHello = toUpperCase('hello');
console.log(upperHello);

// Optional Chaining ? で値があるかないかをチェックする
interface DownloadedData {
    id: number;
    user: {
        name?:{
            first:string;
            last: string;
        }
    }
}
const downloadedData: DownloadedData = {
    id: 1,
    user: {

    }
}
console.log(downloadedData.user?.name?.first);

// nullish coalescing　??
// undefinedとnullのときに、この値にするっていうのが指定できる。
const userData = downloadedData.user ?? 'no-user';

// lookup型
// オブジェクトのメンバーの型を取得する。階層を掘れる。ユニオン型もかける
// type id = DownloadedData["user"]["name"];
type id = DownloadedData["id" | "user"];

// 型の互換性
enum Color {
    RED,
    BLUE
}
let target:string = 'hello';
let source: 'hello' = 'hello';
target = source;