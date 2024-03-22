var _this = this;
var Person = /** @class */ (function () {
    function Person(person) {
        this.person = person;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.person.fName, " ").concat(this.person.lName);
    };
    return Person;
}());
var person = {
    fName: "vedat",
    lName: "Cinbat",
    age: 21,
    isStudent: true,
    hobbies: null,
    getFullName: function () {
        return "".concat(_this.fName, " ").concat(_this.lName);
    }
};
var person1 = new Person(person);
console.log(person1.getFullName());
