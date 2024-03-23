/*
* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
* */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Vedat',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
console.log(person);
if (person.role == Role.AUTHOR) {
    console.log('is AUTHOR');
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
