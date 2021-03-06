function steamrollArray(arr) {
  let a = '1';
    console.log(parseInt(a))

    //array to string and then get back a flattened array
    let strArr = arr.toString().split(',');

    // convert each item to a number 

    let final = strArr.map((item) => parseInt(item));

    console.log(final)
    
    return final

    
  }

  // steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].

  steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].