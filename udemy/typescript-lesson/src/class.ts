// 抽象クラスはインスタンスを作成できない。
// 継承のためにしか使えない。
abstract class Person {
    // name: string;
    // private age: number; // クラスの中でしかつかえない
    // インスタンス化しなくても、クラスを使う方法＝static
    static species = 'Homo sapience';
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }

    // 初期化が完了しています！
    constructor(public readonly name: string, protected age: number) {
        // this.name = initName;
        // this.age = initAge;
        // this.name = 'Harry' // readonlyでも、コンストラクタ関数内では編集できちゃう！
    }
    incrementAge() {
        this.age += 1;
    }
    greeting(this: Person) {
        console.log(`Hello, I'm ${this.name}. I'm ${this.age} years old.`)
        this.explainJob();
    }
    abstract explainJob(): void;
}
class Teacher extends Person {
    private static instance: Teacher;
    explainJob(): void {
        console.log(`I am a teacher and I teach ${this.subject}.`);
        const teacher = new Teacher('Snape', 55, 'Math');
    }
    get subject(): string {
        // 値を取得すると同時に、何かを実行したいときゲッターをつかう
        if (!this._subject) {
            throw new Error('There is no subject.')
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.')
        }
        this._subject = value;

    }
    // コンストラクタを内部で使用する。＝newできない。
    // シングルトンパターンを用いるとき利用する。
    // シングルトンパターン：インスタンス１個しか作れない。外部からnewできない
    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
    static getInstance() {
        if (Teacher.instance) return Teacher.instance
        Teacher.instance = new Teacher('Snape', 55, 'Math');
        return Teacher.instance;
    }
    // greeting() {
    //     console.log(`Hello, I'm ${this.name}. I'm ${this.age} years old.I teach ${this.subject}.`)
    // }
}
// 
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
// console.log(Person.species);
// console.log(Person.isAdult(11));