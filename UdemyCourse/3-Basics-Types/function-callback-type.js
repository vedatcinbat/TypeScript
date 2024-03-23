function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// let combinedValues: Function;
var combinedValues;
combinedValues = add;
//combinedValues = printResult;
//combinedValues = 5;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
