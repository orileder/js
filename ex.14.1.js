function findMax(arr) {
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
  }
  const numbers = [2, 6, 21, 18, 42, 10];
  const maxValue = findMax(numbers);
  console.log(maxValue);

  function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, current) => (current % 2 === 0 ? sum + current : sum), 0);
  }
  const nums = [34, 46, 17, 781, 281, 11];
  const evenSum = sumOfEvenNumbers(nums);
  console.log(evenSum); 

  function calculateAverage(arr) {
    const sum = arr.reduce((acc, current) => acc + current, 0);
    return sum / arr.length;
  }
  const numbs = [3, 6, 1, 8, 2, 10];
  const avg = calculateAverage(numbs);
  console.log(avg); 
  
  
  