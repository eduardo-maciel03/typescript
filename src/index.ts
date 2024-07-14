// Typescript é um superset para a linguagem Javascript
// ou seja, adiciona funções ao JS, como a declaração de tipos de variável
// utilizado com frameworks/libs
// precisa ser compilado em JS
// desenvolvido e mantido pela Microsoft

// Por que Typescript?
// adiciona confiabilidade ao programa (tipos)
// provê novas funcionalidades a JS, como Interfaces
// com TS podemos verificar os erros antes da execução do código, durante o desenvolvimento
// deixa JS mais explícito, diminuindo a quantidade de bugs
// por estes e outros motivos, perdemos menos tempo com debug

// npm i -g typescript -> para instalar o TS
// tsc -v -> para verificar a versão
// tsc --init -> para inicializar o projeto TS
// tsc -w -> compilação automática

// string, boolean, number, array, tuple, enum, any, null, undefined



// Inferencia x Annotation
// declarar o tipo da variável explicitamente é uma annotation
// criar uma let (var) sem declarar o tipo é uma inferencia
let x:number = 10; // annotation

x = 16; // inferencia

console.log(x);

let nome = "Eduardo";

console.log(typeof nome);
console.log(nome);

// Object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);

console.log(nome.toUpperCase());

myNumbers.push(5); // adicionando mais um índice a array
console.log(myNumbers);

// Tuplas 
// São uma estrutura de dados do tipo de referência que podem armazenar valores de diferentes tipos. 
// A principal vantagem de uma tupla é permitir o armazenamento de múltiplos tipos, 
// Como por exemplo uma string e um int ao mesmo tempo.
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]]; 

// Object Literals -> {prop: value} (chave-valor)
const user: {name: string, age: number} = {
    name: "Eduardo",
    age: 20
};

console.log(user);

// Any -> a variável permite atribuir diferentes tipos de valores após inicializada
let a:any = 0;

a = "teste";
a = true;
a = [];

// Union Type -> possibilita criar uma variável que aceite mais de um tipo
let id: string | number = "10"

id = 2

// Type Alias -> uma sintaxe do TypeScript para definir um tipo personalizado, 
// com a estrutura que se deseja, para melhor adequar a tipagem à necessidade da aplicação
type myIdType = number | string;

const userId: myIdType = 10
const productId: myIdType = "10101"
const shirId: myIdType = 1

// Enum
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "camisa gola v",
    size: Size.M
} 

console.log(camisa)

// Literal Types -> é um valor literal para um tipo, sem precisar especificar um tipo
let test: "autenticado" | null

test = "autenticado"
test = null

// Funções
function sum(soma1:number, soma2:number) {
    return soma1 + soma2;
}

console.log(sum(1, 2))

function sayHelloTo(name:string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Eduardo"))

function logger(msg: string): void {
    console.log(msg);
}

logger("Teste!")

function greeting(name:string, greet?:string) {
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    }
    else{
        console.log(`Olá ${name}`)
    }
}

greeting("Eduardo", "Sir")

// Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) { 
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 4, n2: 4}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));


// Narrowing -> checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O n° é ${info}`)
        return
    }
    console.log("Não foi passado um n°")
}

doSomething(1);
doSomething(true);

// Generics
function showArraysItems<T>(array: T[]) {
    array.forEach(item => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItems(a1)
showArraysItems(a2)

// Classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = name
    }

    showUserName() {
        console.log(`Nome de usuário: ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`Role do usuário: ${this.role}`)
            return
        }
        console.log("Informação restrita!")
    }
}

const zeca = new User("Zéca", "ADMIN", true);

console.log(zeca)

zeca.showUserName()
zeca.showUserRole(true)

// Interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand:string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("Volkswagen", 4);
fusca.showBrand();

// Herança
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)
a4.showBrand()

// Decorators

// constructor decorator
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")

console.log(sam)