function countdown(n) {
    if (n <= 0) {
      return [];
    } else {
      const countArray = countdown(n-1);
      
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countdown(5)); // shoul return [5, 4, 3, 2, 1]