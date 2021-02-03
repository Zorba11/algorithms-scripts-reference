function fearNotLetter(str) {
    let strArr = str.toLowerCase().split('');
    let ascii = [];
    let correctedStrArr = [];

    // console.log(strArr)
    strArr.forEach(element => {
        ascii.push(element.charCodeAt(0));
    });

    // correctedAscii = [...ascii];
    console.log(ascii)

   for (let i = 0; i < str.length; i++) {
       let diff =  ascii[i+1] - ascii[i];
    //    console.log(diff)
        if(diff === 2 && (ascii[i] !== ascii[str.length - 1])) {
            console.log(String.fromCharCode(ascii[i]+1));
         return String.fromCharCode(ascii[i]+1)
        }
        // delete diff;
   }


    return;
  }
  
  fearNotLetter("abce");