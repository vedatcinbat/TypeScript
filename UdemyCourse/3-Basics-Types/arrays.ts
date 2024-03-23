const person = {
    name: 'Vedat',
    age: 21,
    hobbies: ['Sports', 'Cooking'] // hobbies: string[]
}

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! Error !!!
}
