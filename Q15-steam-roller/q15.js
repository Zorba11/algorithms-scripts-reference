function steamrollArray(arr) {

  //solution - 1
  //initialize an empty array - final
  // iterate through each element of the outer array
  // check if it is an array or not empty, if true push the element to final
  // else go to the next depth and repeat the last step
  
  let final = [];

  for(let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[1][0])
    console.log(Array.isArray(arr[i]))

    let j = 0;

    if(!Array.isArray(arr[i]) && arr[i]) {
      final.push(arr[i]);
    } else if(!Array.isArray(arr[i][j]) && arr[i][j]){
      final.push(arr[i][j])
    } else if(!Array.isArray(arr[i][j][j]) && arr[i][j][j]) {
      final.push(a[i][j][j])
    }
      
      

  }

  console.log('final', final)

    
  }

  // steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].

  steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].