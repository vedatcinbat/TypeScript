interface IPerson {
    firstName: string,
    lastName: string
    age: number
}


const person1: IPerson = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
}


console.log(person1.firstName) // John
console.log(person1.lastName) // Doe
console.log(person1.age) // 25

