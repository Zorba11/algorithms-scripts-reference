function myReplace(str, before, after) {
    let strArray = str.split(' ');

    // console.log('strArr', strArray);

    let indexOfBefore = strArray.indexOf(before);

    for (let singleStr of strArray) {
        if (singleStr === before) {
            console.log(singleStr)

            const isUpperCase = /^[A-Z]*$/.test(singleStr[0]);
            
            // console.log(strArray.indexOf(before))
            console.log('isUpper',isUpperCase);
            if (isUpperCase) {
                after = after.split('');
                after[0] = after[0].toUpperCase();
                after = after.join('');
            } else {
                after = after.toLowerCase();
            }

           strArray.splice(indexOfBefore, 1, after);

            // console.log('new',strArray.join(''));
            return strArray.join(' ');
        }
    }

    return str;
  }


//   console.log(myReplace("Let us go to the store", "store", "mall")) 
  //should return "Let us go to the mall".

//   console.log(myReplace("I think we should look up there", "up", "Down")) //should return "I think we should look down there"

console.log(myReplace("His name is Tom", "Tom", "john")) // should return "His name is John"