let array = [1, 2, 3, 4, 5];
let array2 = [1, 2, "h", "open", 8, "closed", 5];

function doubleValues(array) {
  return array.map((num) => num * 2);
}
const arrDbl = doubleValues(array);
console.log(arrDbl);

function onlyEven(array) {
  let evenValList = [];
  array.forEach((num) => {
    if (num % 2 === 0) evenValList.push(num);
  });
  return evenValList;
}
const arrEven = onlyEven(array);
console.log(arrEven);

function firstLast(arr) {
  const stringElements = [];
  arr.forEach((element) => {
    if (typeof element === "string") {
      stringElements.push(element);
    }
  });
  return [stringElements[0], stringElements[stringElements.length - 1]];
}
const attempt = firstLast(array2);
console.log(attempt);



let string = 'hello'




function vowelCount(string) {
    let counter = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };
  
    string.toLowerCase().split('').forEach((letter) => {
      if ('aeiou'.includes(letter)) {
        counter[letter]++;
      }
    });
  
    return counter;
  }
  
  
  let countedString = vowelCount(string);
  console.log(countedString);
  




  function capitalize (string) {
    const capitalized = string.split('').map((letter) => {
     return letter.toUpperCase()
    })
    return capitalized.join('')
  }
  const capitalizedString = capitalize(string)
  console.log(capitalizedString);

  
function shiftLetters (string){
        let controlString = ('abcdefghijklmnopqrstuvwxyz')
        let shiftedstring = []
        let controlArray = controlString.split('')
        let newString = string.split('')
       const mappedString = newString.map(letter=>{
           return controlArray.indexOf(letter)
        })
        const newIndexes = mappedString.map(idx=> idx + 1)
        shiftedstring = newIndexes.map(idx =>{
          return  controlArray[idx]
        })
        
        return shiftedstring.join('')

}

console.log(shiftLetters('ace'))