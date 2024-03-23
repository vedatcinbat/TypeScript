enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = "AUTHOR"
}

const person = {
    name: 'Vedat',
    age: 21,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

let favoriteActivities: any[];
favoriteActivities = ['Sports', 2, true];

console.log(person);

if(person.role == Role.AUTHOR) {
    console.log('is AUTHOR');
}

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}