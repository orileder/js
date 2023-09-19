const array = ["a", "ab", "abcd", "abc", "abcde"]
const lengthsArray = [];
for (let i = 0; i < array.length; i++) {
    const stringLength = array[i].length;
    lengthsArray.push(stringLength);
  }
  console.log(lengthsArray);