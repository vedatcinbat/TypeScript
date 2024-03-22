function Greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
Greet('Brendan', new Date("2021-07-01"));
