var person = {
    name: 'Vedat',
    age: 21,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! Error !!!
}
