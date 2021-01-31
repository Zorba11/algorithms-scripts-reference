function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

    collection.forEach((item) => {
        // console.log(item);
        let counter = 0;
        let lengthOfSource = Object.keys(source).length;
        // console.log('length', lengthOfSource);
        for (sourceProp in source) {
            if (item.hasOwnProperty(sourceProp) && item[sourceProp] == source[sourceProp]) {
                counter ++;
            }
        
        if (counter == lengthOfSource) {
            return arr.push(item)
        }
        }
    });
   console.log('final-array', arr);
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]