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


class Person {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }
}

interface IPerson {
    getName(): string;
    getId(): number;
}

let person: IPerson = new Person("Vedat", 2);

console.log(person.getName());
console.log(person.getId());





