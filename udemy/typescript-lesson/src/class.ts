class Person {
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
    }

}
class Teacher extends Person {
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
    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }
    greeting() {
        console.log(`Hello, I'm ${this.name}. I'm ${this.age} years old.I teach ${this.subject}.`)
    }
}
// const teacher = new Teacher('Snape', 55, 'Math');
// console.log(teacher.subject);
// teacher.subject = 'Science';
// teacher.greeting();

console.log(Person.species);
console.log(Person.isAdult(11));