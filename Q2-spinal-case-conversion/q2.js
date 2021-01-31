function spinalCase(str) {
console.log(str.split(/\s|_|(?=[A-Z])/))
    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  }
  

//   spinalCase("The_Andy_Griffith_Show");

//   spinalCase('This Is Spinal Tap');

spinalCase("Teletubbies say Eh-oh");

// spinalCase("thisIsSpinalTap");