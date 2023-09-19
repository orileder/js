

const array = [3, 4, 4, 3, 6, 3];
const nodup = [];

for (let i = 0; i < array.length; i++) {
  if (nodup.indexOf(array[i]) === -1) {
    nodup.push(array[i]);
  }
}

console.log(nodup);