function pairElement(str) {
    let arr = [];
    for(single of str) {
        switch (single) {
            case 'A':
                arr.push(['A', 'T'])
                break;
            case 'T':
                arr.push(['T', 'A'])
                break;
            case 'G':
                arr.push(['G', 'C'])
                break;
            case 'C':
                arr.push(['C', 'G'])
                break;
            default:
                break;
        }
    }
    console.log(arr);
    return arr;
  }
  
  pairElement("GCG");