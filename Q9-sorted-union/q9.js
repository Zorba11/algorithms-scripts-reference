function uniteUnique(arr) {
    let sortedUnionArr = [];

    // console.log('arr', arguments);

    let unionArr = [];
    let counter = 0;

   for(let group of arguments) {
    group.forEach(item => {
        console.log('item',item);
        unionArr.push(item);
    });
   }

   console.log('union', unionArr)

   unionArr.forEach((item) =>{

    if (!sortedUnionArr.includes(item))
    sortedUnionArr.push(item);
   })

   console.log('sorted', sortedUnionArr);

    return sortedUnionArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return  should return [1, 3, 2, 5, 4]