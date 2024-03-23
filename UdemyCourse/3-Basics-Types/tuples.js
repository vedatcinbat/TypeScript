var person = {
    name: 'Vedat',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push("admin");
//person.role[1] = 10;
person.role = [0, 'admin'];
//person.role = [0, 'admin', 'user']; --> Error !!!
console.log(person);
