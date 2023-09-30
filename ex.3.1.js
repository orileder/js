/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }
const welcome = () => {
    let type = 'Welcome to Appleseeds Bootcamp!';
    return type;
}
console.log(welcome());
    // function power(a) {
    // let myNumber = a;
    // let result = Math.pow(myNumber, 2);
    // return result;
    // }
    const power = a => {k = (Math.pow(a, 2))
    return k
    }
    console.log(power(5));


    // function add(a, b = 5) {
    // let myNumber = a;
    // let sum = myNumber + b;
    // return sum;
    // }
    const add = (a,b) => {k = (a+b)
        return k
        }
        console.log(add(5,12));

    // From function expressions to function declarations
    // const hello = () => "Hello!";
    function hello() {
        return 'Hello!'
    }
    const greeting = hello()
    console.log(greeting);

    // const squareRoot = a => Math.sqrt(a);
    function squareRoot(a) {
        const sqrt = (Math.sqrt(a))
        return sqrt
    }
    console.log(squareRoot (9))

    // const randomNumbers = (a, b) => Math.random() * (a - b) +
    // b;
    function randomNumbers(a,b) {
      const rndm = (Math.random()*(a-b)+b)
      return rndm
    }
    console.log(randomNumbers(1,100));
