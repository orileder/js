function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum
    }
   const result = getSum([1,2,3],[5,66,23]);
    console.log(result);

    // i added a result line defining the result as 1 variable, and added a return call at the end.
    // i also changed the const to a let on the sum because we redefine it, and separated the two
    // arrs on the getsym activation with a comma 