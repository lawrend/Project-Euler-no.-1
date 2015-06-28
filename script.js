var numbersArray = [];
var Threes = [];
var Fives = [];
var threeFives = [];

for(var x = 1; x < 1000; x++) numbersArray.push(x); 

for(var y = 0; y < numbersArray.length; y++) if (numbersArray[y] % 3 === 0 && numbersArray[y] % 5 !== 0) {Threes.push(numbersArray[y]);} 

    else if (numbersArray[y] % 5 ===  0 && numbersArray[y] % 3 !== 0) {Fives.push(numbersArray[y]);}

    else if (numbersArray[y] % 3 === 0 && numbersArray[y] % 5 === 0)     {threeFives.push(numbersArray[y]);}

//console.log(Threes);
//console.log(Fives);
//console.log(threeFives);

var AllThreesAndFives = Threes.concat(Fives, threeFives);

//console.log(AllThreesAndFives);

var totalSum = 0;

for(var s = 0; s < AllThreesAndFives.length; s++) {totalSum = totalSum + AllThreesAndFives[s];}

console.log(totalSum);

