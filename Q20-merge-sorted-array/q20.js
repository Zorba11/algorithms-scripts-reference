
function mergeSortedArray(array1, array2) {
    const mergedArray = [];

    let array1Item = array1[0]; //0
    let array2Item = array2[0]; //4
    let i = 1;
    let j = 1;

    //considering inputs are sorted
    //check for inputs and if one is empty return the other array
    //initialize 2 variables with the 1st value from each array
    // while loop with condtion of undefined or empty check for each array item
    //start comparing items in the array and push the lowest to a final array
    //increment the index of the array which had the lowest value in the previous comparison
    //make sure to add a undefined check condition for the shortest array along with the item comparison. because th shortest array would have an undefined value first in the iteration - this would lead to an infinite loop.
    if(array1.length === 0) {
        return array2;
    }
    if(array2.length === 0) {
        return array2;
    }


    while(array1Item || array2Item) { //31 and undefined
        console.log(array1Item, array2Item)
        if(!array2Item || array1Item < array2Item) { //make sure the shortest array will have the undefined check case
            mergedArray.push(array1Item) //4
            array1Item = array1[i]; //31
            i++;
        } else {
            mergedArray.push(array2Item); //30
            array2Item = array2[j]; // undefined
            j++;
        }
    }

    console.log(mergedArray)

    return mergedArray
}

mergeSortedArray([0,3,4,31], [4,6,30]); //should return [0,3,4,4,6,30,31]