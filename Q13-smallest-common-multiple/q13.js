function smallestCommons(arr) {
 let sortedArr = arr.sort((a,b) => (a-b));
 let range = [];
 console.log(sortedArr);

for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    range.push(i);
}

// console.log(range)

let dontBreakWhile = true;

let lcm = 0;

while (dontBreakWhile) {
    lcm++;

    for(let j = range[0]; j <= range[range.length - 1]; j++) {
        
        if(lcm % j !== 0) {
            console.log(lcm)
            break;
        } else if (j === range[range.length - 1]) {
            dontBreakWhile = false;
        }
    }
}

console.log(lcm);
 
    

    return lcm;
  }
  
  
  smallestCommons([5,1]); //should return 60
//   smallestCommons([2, 10]) //should return 2520.