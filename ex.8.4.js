const array = ["Hello", "Good day", "Your Welcome", "hotdog", "hamburgers"];
const box = {};

for (let i = 0; i < array.length; i++) {
  const str = array[i];

  for (let j = 0; j < str.length; j++) {
    const char = str[j].toLowerCase(); 

    if (/^[a-z]$/.test(char)) {
      if (box[char]) {
        box[char]++;
      } else {
        box[char] = 1;
      }
    }
  }
}

console.log(box);
