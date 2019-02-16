var Time = function(name) {
         this.name = name;
         var t1;
         this.start = function (){
                   t1 = performance.now();
                  return t1;
         };
         this.stop = function (){
              var t2 = performance.now();
                  var sum;
                  return  sum = t2 - t1;    
         };
};


var result = new Time ('эта функция');
console.log(result.stop());

