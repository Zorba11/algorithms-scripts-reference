function dropElements(arr, func) {
    
    // let result = arr.filter((elem) => func(elem));
    // console.log(result);
    // return result;

    let newArr = [...arr];

    for (let i of newArr ) {
        // console.log(i)
        if (!func(i)) {
            arr.shift();
        } else {
            break;
        }
    }

    console.log(arr);
  }
  


  dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
  // should return [3, 4].

//   dropElements([0, 1, 0, 1], function(n) {return n === 1;}) 
  // should return [1, 0, 1]