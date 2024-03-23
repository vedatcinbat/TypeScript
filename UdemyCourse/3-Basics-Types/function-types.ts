function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12))

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;

combinedValues = add;
//combinedValues = printResult; --> Error: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
//combinedValues = 5; -> Error: Type '5' is not assignable to type '(a: number, b: number) => number'.

console.log(combinedValues(8, 8));

// let someValue: undefined;
