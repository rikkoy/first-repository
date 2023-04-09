// デコレータは、classをデコレーションする。メタプログラミング。技術を支える技術
// デコレータファクトリを使用してデコレータに引数を渡せる
function Logging(message: string) {
    console.log('Logging factory');
    return function (constructor: Function) {
        console.log(message);
        console.log(constructor);
    }
}

function Component(template: string, selector: string) {
    console.log('Component factory');
    // このコンストラクタは、newできるんですよと教えてあげる。
    return function <T extends { new(...args: any[]): { name: string } }>(constructor: T) {
        // 無名クラス
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args);
                console.log('Component');
                const mountedElement = document.querySelector(selector);
                const instance = new constructor();
                if (mountedElement) {
                    mountedElement.innerHTML = template;
                    mountedElement.querySelector('h1')!.textContent = instance.name;
                }
            }
        }
    }
}

// プロパティデコレータ
function PropertyLogging(target: any, propertyKey: string) {
    console.log('PropertyLogging');
    console.log(`target=>${target}`);
    console.log(`propertyKey=>${propertyKey}`);
}
// メソッドデコレータ
function MethodLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('MethodLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

// 戻り値を使って、実践的なメソッドデコレータを使う
function enumerable(isEnumerable: boolean) {
    return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
        return {
            enumerable: isEnumerable
        }
    }
}
// アクセサデコレータ
function AccessorLogging(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('AccessorLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
// パラメータデコレータ
function ParameterLogging(target: any, propertyKey: string, paramIndex: number) {
    console.log('ParameterLogging');
    console.log(target);
    console.log(propertyKey);
    console.log(paramIndex);
}

// decoratorの順番も大事。「下から上」
@Component('<h1>{{ name }}</h1>', '#app')
@Logging('Logging User')
class User {
    @PropertyLogging
    name = 'Quill';
    // age = 12;
    constructor(private _age: number) {
        console.log('User was created!');
    }
    @AccessorLogging
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    @enumerable(false)
    @MethodLogging
    greeting(@ParameterLogging message: string) {
        console.log('Hello.');
    }
}
// デコレータは、インスタンス生成時ではなく、クラスの定義時に実行されている。
const user1 = new User(13);




