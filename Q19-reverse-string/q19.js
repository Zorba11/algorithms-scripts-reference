//split the string into an array
//then reverse iterate through that array
//push each element of the reverse iteration into a new array
//return the new array

function reverseStr(str) {
    if(!str || str.length < 2 || typeof str !=='string') {
        return 'bad input!'
    }

    let strArray = str.split('');
    console.log(strArray);

    let finalArray = [];
    for(let i = strArray.length - 1; i >= 0; i--) {
        // finalArray.push(strArray[i]);
        // we don't have to split injavascript because a string in JS is essentially an array
        finalArray.push(str[i]);
    }

    console.log(finalArray.join(''));

    return finalArray.join('')
}

let str = 'alen';

console.log(reverseStr(str));