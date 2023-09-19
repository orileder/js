const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.pop();
people.unshift('matt')
people.push('Ori')
const slicedarr = people.slice(2)
const foundmary = people.indexOf("Mary")
const foundfoo = people.indexOf("Foo")
console.log(people);
console.log(slicedarr);
console.log(foundmary);
console.log(foundfoo);
//the value returning of -1 derives from the fack that the array does not include an item named Foo so its index is -1//
people.shift();
people.pop();
people.unshift('Greg');
people.push('James');
people.splice (2,1,'Elizabeth','artie');
console.log(people);
const withBob = people.concat('Bob');
console.log(withBob);