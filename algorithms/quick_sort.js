function quicksort(array) {


    if (array.length < 1) {
        return array;    // базовый случай
    } else { 
         let pivotIndex = Math.floor(array.length / 2); // так понятнее
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
      for ( i =0; i < array.length; i++) {
        if ( i ==  pivotIndex) continue;
        if (array[i] <= pivot) {
          less.push(array[i]);
        } else {
          greater.push(array[i]);
        }
     
      }
         let result = [];

    return result.concat(quicksort(less), pivot, quicksort(greater));
    }
    };
    
    console.log(quicksort([10,5,2,3,19,4,4,2,3,6,7,78]));