let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

console.log(userInput);

if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    //while(true) {}
}


generateError('An error occurred!', 500);






