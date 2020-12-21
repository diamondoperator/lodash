
const _ = {

    clamp(number, lowerBound, upperBound){
  
      //find the biggest number between the number
      //and the lowerBound or minimal number
      //will return the biggest of the two
      const lowerClampedValue = Math.max(number,lowerBound);
  
      /* using math.min takes the value of lowerclampledvalue passes it as well as upperBound into
      and returns the lowest of the two*/
  
      const clampedValue = Math.min(lowerClampedValue, upperBound);
  
  
    //returns a number between the upper bound and upper bound
      return clampedValue;
  
    },
  
  inRange(number, start, end){
  
    if(end === undefined){
      end = start;
      start = 0;
    }
  
    if(start > end){
      const temp = end;
  
      end = start;
  
      start = temp;
    }
  
    const isInRange = start <= number && number < end;
  
    return isInRange;
    
  },
    // inRange(number,startValue,endValue){
  
    //   let temp = 0;
  
    //   if(!endValue){
    //     endValue = startValue;
    //     startValue = 0;
    //   }
  
    //   if(startValue > endValue){
      
  
        //swap values
        // startValue = temp;
  
        // temp = endValue;
  
        // startValue = endValue;
  
        // temp = endValue;
        // endValue = startValue;
        // startValue = temp;
  
    //   }
  
    //   if(number < startValue){
    //     return false;
    //   }else if(number >= endValue){
    //     return false;
    //   }else if(number > endValue && number <= startValue){
    //     return true;
    //   }
    // }
    //   // if(number < lowerBound){
    //   //   return lowerBound;
    //   // }else if(number > upperBound){
    //   //   return upperBound;
    //   // }else if(number < upperBound && number > lowerBound){
    //   //   return number;
    //   // }
  
    //   let lowerClampedValue = Math.max(number,lowerBound);
  
    //   let clampedValue = Math.min(lowerClampedValue, upperBound);
  
  
    //   return clampedValue;
  
    //   // //using math
    //   // if(number < lowerBound){
    //   //  return Math.max(number,lowerBound);
    //   // }else if(number > upperBound){
    //   //   return Math.min(number,upperBound);
    //   // }else if(number < upperBound && number > lowerBound){
    //   //   return number;
    //   // }
    // }
  
  
    //first implementation of words function
  words(string){
  
    let newarray = [];
  
    newarray = string.split(' ');
  
    return newarray;
  },
  
  //first implementation of pad
  //adding padding to a string
  // pad(string,pad){
  
  //   const stringLength = string.length();
  //   const padLength = pad.length();
  
  //   if(stringLength > padLength){
  //     return true;
  //   }else{
  //     return string;
  //   }
  
  //   const amountOfPadding = (padLength - stringLength)/2;
  
  //   const roundedDown = amountOfPadding.toFixed(2);
  
  //   const paddingToEnd = stringLength - padLength;
  
  //   //do step 5 here
  
  //   //return the string here
  
  // }
  
  
  // //Second implementation of words
  // words(string){
  //   const words = string.split(' ');
  
  //   return words;
  // }
  
  // pad(string, length){
  // const lengthLeng = length.length;
  // const stringLeng = string.length;
  
  //   // if(lengthLeng > stringLeng)
  //   // {
  //   //   return string
  //   // }
  
  //   if(string.length >= length){
  //     return string;
  //   }
  
  //   const startPaddingLength = Math.floor((lengthLeng - stringLeng)/2);
  
  //   // const endPaddingLength = (lengthLeng - stringLeng)-startPaddingLength;
  //   const endPaddingLength = (length- stringLeng)-startPaddingLength;
  //   const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  
  //   return paddedString;
  
  // }
  
  pad(string, length){
    if(string.length >= length){
      return string;
    };
  
    const startPaddingLength = Math.floor((length - string.length) / 2);
  
  //important here to use parenthesis
  //ex: ( x - y) - z. not equal to x - y - z
    const endPaddingLength = (length - string.length) - startPaddingLength;
  
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  
    return paddedString;
  },

  //second implementation
invert(object){
    let invertedObject = {};
  
    for(let key in object){
      const originalValue = object[key];
  
      //line below give an error
      // invertedObject = {originalValue: key};
  
      //this line works and passes the tests
      //assigns new item to object with the key 
      //from the for in loop
      invertedObject[originalValue] = key;
    }
  
    return invertedObject;
  },
  
  // first implementation
  // invert(object){
  
  //   const invertedObject = {};
  
  //   for(const key in invertedObject){
  //     const originalValue = invertetedObject.${key};
  //     invertedObject = originalValue;
  //   }
  
  //   return invertedObject;
  
  
  // }
  //first implementation
//confused by "predicate"
// findkey(object){

//   object.entries(object);


// }

//first implementation of drop method
// drop(array,drop){
// if(!drop){
//   drop = 1;
// }

// let newArray = array.slice(drop);

// return newArray;
// }

//second implementation of drop method
drop(array,n){
    //tried !=  and also !n but === works
    if(n === undefined){
      n = 1;
    }
  
    let droppedArray = array.slice(n);
  
    return droppedArray;
  },
  
  //first implementation of dropWhile
  // dropWhile(){
  //   array.findIndex();
  //   this.drop(array,n);
  
  //   return newArray;
  // }
  
  //second implementation of dropwhile
  //don't forget that using const usually helps
  //the methods pass the test
  dropWhile(array,predicate){
    const callBack = (element, index) => {
      return !predicate(element, index, array);
    }
    const dropNumber = array.findIndex(callBack);
  
    const droppedArray = this.drop(array,dropNumber);
  
    return droppedArray;
  
  
  },
  // //first implementation of chunk
// chunk(array, size){
//   if(size === undefined){
//     size = 1;
//   }

//   const arrayChunks = [];

//   for(let i = size; i<array.length; ++size){
//     const arrayChunk = array.slice(i+size);

//     arrayChunks.push(arrayChunk);
//   }

//   return arrayChunks;
// }

//second implementation of chunk
chunk(array, size){
    if(size === undefined){
      size = 1;
    }
  
    let arrayChunks = [];
  
    for(let i = 0; i<array.length; i=i+size){
      const arrayChunk = array.slice(i, i+size);
  
      arrayChunks.push(arrayChunk);
    }
  
    return arrayChunks;
  }
  
  
  
  
  
  };
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;