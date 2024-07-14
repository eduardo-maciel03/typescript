"use strict";
// string, boolean, number, etc...
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// inferencia x annotation
// declarar o tipo da variável explicitamente é uma annotation
// criar uma let (var) sem declarar o tipo é uma inferencia
let x = 10; // annotation
x = 16; // inferencia
console.log(x);
let nome = "Eduardo";
console.log(typeof nome);
nome = nome + "Maciel";
console.log(nome);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(nome.toUpperCase());
myNumbers.push(5); // adicionando mais um índice a minha array
console.log(myNumbers);
// Tuplas 
// São uma estrutura de dados do tipo de referência que podem armazenar valores de diferentes tipos. 
// A principal vantagem de uma tupla é permitir o armazenamento de múltiplos tipos, 
// Como por exemplo uma string e um int ao mesmo tempo.
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// Object Literals -> {prop: value} (chave-valor)
const user = {
    name: "Eduardo",
    age: 20
};
console.log(user);
// Any -> retira a forte tipagem da variável
let a = 0;
a = "teste";
a = true;
a = [];
// Union Type -> possibilita criar uma variável que aceite mais de um tipo
let id = "10";
id = 2;
const userId = 10;
const productId = "10101";
const shirId = 1;
// Enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola v",
    size: Size.M
};
console.log(camisa);
// Literal Types -> é um valor literal para um tipo, sem precisar especificar um tipo
let test;
test = "autenticado";
test = null;
// Funções
function sum(soma1, soma2) {
    return soma1 + soma2;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Eduardo"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Eduardo", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 4, n2: 4 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
// Narrowing -> checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O n° é ${info}`);
        return;
    }
    console.log("Não foi passado um n°");
}
doSomething(1);
doSomething(true);
// Generics
function showArraysItems(array) {
    array.forEach(item => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
// Classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = name;
    }
    showUserName() {
        console.log(`Nome de usuário: ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Role do usuário: ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zéca", "ADMIN", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("Volkswagen", 4);
fusca.showBrand();
// Herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// Decorators
// constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
