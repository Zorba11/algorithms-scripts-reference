function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    // collection.forEach((items) => {
    //     let collectionKeys = Object.keys(items);

    //     console.log('collection-keys',collectionKeys);
    // })

     let collectionValues = Object.values(collection);
     let sourceKeys = Object.keys(source);

    collection.forEach((collectionValue) => {
        console.log('collection-single', collectionValue);
        // console.log('single--', Object.keys(source));
      
        // for (const singleCollectionKey of Object.keys(collectionValue)) {
        //     console.log('collection-value', singleCollectionKey);
        //     let counter = 0;
        //     for (const singleSourceKey of Object.keys(source)) {
        //         console.log('source-value', singleSourceKey);
        //         if (singleCollectionKey === singleSourceKey) {
        //             console.log('---',collection[singleCollectionKey]);
        //             if (source[singleSourceKey] === collectionValue[singleCollectionKey]) {
        //                 arr.push(collectionValue);
        //             }  
        //         }
        //     }
        // }
        console.log('collection-single-length', Object.keys(collectionValue).length);
        for (const singleSourceKey of Object.keys(source)) {
            if (collectionValue.hasOwnProperty(singleSourceKey) ) {
                for (const singleCollectionKeys of Object.keys(collectionValue) && ) {
                    // if (source[singleSourceKey] === )
                    console.log('--3-', singleCollectionKeys);
                }
                console.log(true);
                
            } else {
                console.log(false);
            }
        }
       
    })

     console.log('collection-values',collectionValues);
     console.log('source-keys',sourceKeys);

     console.log('array--', arr);
  
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })