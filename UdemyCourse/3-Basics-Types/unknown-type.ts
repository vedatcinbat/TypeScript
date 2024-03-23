let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

console.log(userInput);

if(typeof userInput === 'string') {
    userName = userInput;
}