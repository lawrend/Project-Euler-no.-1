var numbersArray = [];
var totalSum = 0;
var AllThreesAndFives = [];

//create an array of the numbers 1-999.
for(var x = 1; x < 1000; x++) numbersArray.push(x); 

//pushed numbers divisible by 3, by 5, and by both into 1 array.
for(var y = 0; y < numbersArray.length; y++) if (numbersArray[y] % 3 === 0 && numbersArray[y] % 5 !== 0) {AllThreesAndFives.push(numbersArray[y]);} 

    else if (numbersArray[y] % 5 ===  0 && numbersArray[y] % 3 !== 0) {AllThreesAndFives.push(numbersArray[y]);}

    else if (numbersArray[y] % 3 === 0 && numbersArray[y] % 5 === 0)     {AllThreesAndFives.push(numbersArray[y]);}

//homemade summing of array 
for(var s = 0; s < AllThreesAndFives.length; s++) {totalSum = totalSum + AllThreesAndFives[s];}

console.log(totalSum);

