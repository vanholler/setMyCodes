function binary(list, item) {
    var low = 0;
    var high = list.lenght-1;
    var guess;
    var mid;
    console.log(1);
    while (low <= high) {
    
  
       mid = Math.ceil(low + high)/2;
    guess = list[mid] ;
    
     if (guess == item) {

    high = mid - 1;
    console.log(3);
    }else {
    low = mid + 1;
    console.log(4);
    }
    console.log(5);
    };
    console.log(6);
    return list[mid];
    
    };
    
    var my_list = [1,3,5,7,5,4,8,9,10,10,,2,3,3,54,5,5,34,555,52342,3423,423,3456,34,234,23542,3534,634,6345,234,234234,234234,23423,4234234,546,546,346];
    
    binary(my_list, 555);