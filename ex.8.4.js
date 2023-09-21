const array = ["Hello", "Good day", "Your Welcome", "hotdog", "hamburgers"];
const box = {};

// Iterate through each string in the array
for (let i = 0; i < array.length; i++) {
  const str = array[i];

  // Iterate through each character in the current string
  for (let j = 0; j < str.length; j++) {
    const char = str[j].toLowerCase(); // Convert character to lowercase for case-insensitivity

    // If the character is a letter, update the count in the box object
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
