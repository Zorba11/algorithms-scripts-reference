function sumPrimes(num) {

    let sumOfPrimes = 0;

    for (let i = 2; i <= num; i++) {
        let counter = 0;
       for (let j = 1; j <= i; j++) {
        //    console.log('i', i);
        //    console.log('j', j);

        if (i % j === 0) counter++

           if (counter === 2 && i === j) {
               console.log('prime',i);
               sumOfPrimes += i;
           }
       }
    }

    console.log(sumOfPrimes)

    return sumOfPrimes;
  }
  
  sumPrimes(10);