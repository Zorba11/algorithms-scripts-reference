function spinalCase(str) {

    return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  }
  

//   spinalCase("The_Andy_Griffith_Show");

//   spinalCase('This Is Spinal Tap');

spinalCase("Teletubbies say Eh-oh");

// spinalCase("thisIsSpinalTap");