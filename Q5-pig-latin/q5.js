function translatePigLatin(str) {
  let firstLetter = str[0];
  if (/^[aeiou]$/i.test(firstLetter)) {
    return str + "way";
  }

  let strArray = str.split("");
  //    console.log(strArray);
  let counter = 0;
  for (let singleStr of strArray) {
    // console.log(singleStr);

    if (/^[aeiou]$/i.test(singleStr)) {
      counter++;
    }
    if (counter === 1) {
      // console.log('solu-',strArray.splice(str.indexOf(singleStr)).join(''));
      let firstHalf = strArray.splice(str.indexOf(singleStr)).join("");
      let secondHalf = strArray.splice(0, str.indexOf(singleStr)).join("");

      return firstHalf + secondHalf + "ay";
    }

    // console.log('indexof', str.indexOf('o'))
  }

  if (counter === 0) return str + "ay";
}

//   console.log(translatePigLatin("glove")) //should return "oveglay"
console.log(translatePigLatin("rhythm")); // should return "rhythmay"
