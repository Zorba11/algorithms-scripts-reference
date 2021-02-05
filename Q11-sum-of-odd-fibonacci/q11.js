function sumFibs(num) {

    let fibonacciArray = [1, 1];

    for (let i = 0; i <= num; i++) {
        

        let nextFibonacci = fibonacciArray[i] + fibonacciArray[i+1];
        if (nextFibonacci > num) break;
        fibonacciArray.push(nextFibonacci);

        console.log(nextFibonacci)
    }


    console.log('fibo',fibonacciArray);

    // let sumOfOddFibo = fibonacciArray.filter(x => x % 2 != 0).reduce((a, b) => a + b);
   
   
    let fiboOdd = fibonacciArray.filter((item) => item % 2 !== 0);

    // let sumOfOddFibo = fiboOdd.reduce((a,b) => a+b);

    let sumOfOddFibo = 0;

    console.log('fiboodd',fiboOdd);
    

    fiboOdd.forEach((item) => {
        if(item <= num) sumOfOddFibo += item
    })

    console.log('sumOf', sumOfOddFibo);

    return sumOfOddFibo;

   }
  
//   sumFibs(10); // should return 5
// sumFibs(1000) // should return 1785.
// sumFibs(75024) //should return 60696.
sumFibs(75025) // should return 135721