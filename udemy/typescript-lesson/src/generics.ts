// ジェネリクスを使って、型を引数として受け取る
// typeのT(なんでもいいよ)
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    console.log(value[key]);
    return value;
}
// console.log(copy({ name: 'Ron' }, 'name'));
copy({ name: 'Ron' }, 'name');

// extendsを使って型パラメータに制約をつける

// keyof演算子
// オブジェクトの中の、キー一覧（ユニオン型）
type K = keyof { name: string; age: number; }

// Classに対してジェネリクスを使用する
class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }

}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('apple');
stringLightDatabase.add('banana');
stringLightDatabase.add('grape');
stringLightDatabase.remove('banana');
console.log(stringLightDatabase.get());

// interfaceに対してジェネリクスを使用する
interface TmpDatabase<T> {
    id: number;
    data: T[];
}
const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [2, 34]
}

// utility型　内蔵されているジェネリック型
interface Todo {
    title: string;
    text: string;
}
// 型のためのライブラリ。全部optionalになる
type Todoable = Partial<Todo>;
type ReadTodo = Readonly<Todo>;
const fetchData = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})
const vegetables: Array<string> = ['spinach', 'potato', 'eggplant'];

// デフォルトの型パラメータ
interface ResponceData<T extends { message: string } = any> {
    data: T;
    status: number;
}
let tmp: ResponceData;

// Mapped Types(型のFor文)
type MappedTypes = {
    [P in 'tomato' | 'pumpkin']: P
}
interface Vegetables {
    readonly tomato: string;
    pumpkin?: string;
}
type MappedTypes2 = {
    -readonly [P in keyof Vegetables]: P;
}

// conditional types(型のif文)
type conditionalTypes = 'tomato' extends string ? number : boolean;
type conditionalTypesInfer = { tomato: 'tomato' } extends { tomato: infer R } ? R : boolean;
type DistributedConditionalTypes<T> = T extends 'tomato' ? number : boolean;
let tmp2: DistributedConditionalTypes<'tomato' | 'pumpkin'> = 2;