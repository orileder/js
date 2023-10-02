// Block 1
// function funcA() {
// console.log(a);
// console.log(foo());
// var a = 1;
// function foo() {
// return 2;
// }
// }
// funcA();

//the integer 'a' is existant because of the var call hoist but it wont be defined. for it to be defined 
// the call needs to come before funcA()



// Block 2
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());

// we have 3 scopes here, the first defines fullname as 'john doe' and is a global scope, then we have an object 
// scope that defines the fullname as 'colin ihrig' and the last scope is the inner prop one which defines it 
// as 'aurelio de rosa'. since the getFullName function is located in the same scope as the inner one inside the 
// prop value it takes 'aurelio de rosa' as our var since it is the first one it finds when looking from inside 
// towards outside. the test call comes back as undefined because they used getFullName without the () and 
// they put unneeded () next to the test call inside the last console.log



// Block 3
// function funcB() {
// let a = b = 0;
// a++;
// return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);

// since we give b a value but dont define it with let or const, it goes as a value to the global scope and then it
// becomes readable to the log call. a is defined as a let so it stays defined only inside of the funcB scope 
// therefore it is unreadable by the console.log command. to fix it we should have defines both values separately.



// Block 4
// function funcC() {
// console.log("1");
// }
// funcC();
// function funcC() {
// console.log("2");
// }
// funcC();

// in this code, due to the hoisting, the value of the funcC is defined twice at the start and then it is
// called twice, and so it prints out 2 twice. to prevent this overwriting of the function value we can choose
// to change one of the functions names to prevent it.



// Block 5
// function funcD1() {
// d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
// var e = 1;
// }
// funcD2();
// console.log(e);

// similar to before, the first function gives us a result since the integer d is not defined as a let, const
// or var and so it is defined in the global scope once we run the function. the integer e is only defined inside
// the funcD2 scope, so we cant call it  with global log  calls


// Block 6
// function funcE() {
// console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();


// here, due to the hoisting the integer f is still not defined when the function is defined  so 
// it cant use it even though it is called after it is defined. because the var defining tool is used for 
// f, it is pushed to the top as a global value that exists but has no value BEFORE the function is defined,
// so it shoots back as undefined and not as an error.2