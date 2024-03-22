interface IPerson {
    fName: string;
    lName: string;
    age: number;
    isStudent: boolean;
    hobbies: string[] | null;
    getFullName: () => string;
}

class Person implements IPerson {
    age: number;
    fName: string;
    hobbies: string[] | null;
    isStudent: boolean;
    lName: string;
    constructor(private person: IPerson) {}

    getFullName() {
        return `${this.person.fName} ${this.person.lName}`;
    }
}

const person : IPerson = {
    fName : "vedat",
    lName : "Cinbat",
    age: 21,
    isStudent: true,
    hobbies: null,
    getFullName: () : string => {
        return `${this.fName} ${this.lName}`;
    }
}

const person1: Person = new Person(person);

console.log(person1.getFullName());



