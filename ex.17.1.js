// Block 1
// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
// return b;
// }
// b = 5;
// return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);


// in this function we have closures- the somefunction func calls otherfunction and the numbers that are input 
// into them does not make a difference. the value of b is determined outside in the global scope to be 1, 
// but when the return otherfunction call is activated it looks for the value of b in its scope and then the 
// scope 1 layer above and so on, so when it finds b=5 it returns it



// Block 2
// var a = 1;
// function b2() {
// a = 10;
// return;
// function a() { }
// }
// b2();
// console.log(a);


// Block 3
// let i;
// for (i = 0; i < 3; i++) {
// const log = () => {
// console.log(i);
// }
// setTimeout(log, 100);
// }