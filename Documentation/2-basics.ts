function Greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

Greet('Brendan', new Date("2021-07-01"));