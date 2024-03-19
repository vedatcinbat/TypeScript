/*
let isDone: boolean = false;
let age: number = 42;
let userName: string = 'Vedat Cinbat';

*/
/*
interface IUser {
    id: number;
    name: string;
}

let user: IUser = {
    id: 1,
    name: 'Vedat Cinbat'
}

console.log(user);
*/
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    return Person;
}());
var person = new Person("Vedat", 2);
console.log(person.getName());
console.log(person.getId());
