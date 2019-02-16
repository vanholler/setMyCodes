var Array_all = [4,2]; // наш стек.

var need = []; // сюда вставляем элемент и сравниваем с условиям
var Array_done = []; // массив для проверренных элементов ( это на будущее , если надо будет реализовать алгоритм в полном обьеме)
var what_need = 4; // заданное условаие

function searsh(){

while (Array_all.length !== 0) {    
    var gett = Array_all.pop();         
    need[0] = gett;                       // тут мы выдергием 1 элемент и пишем в переменный массив .
    console.log(gett, need[0]);
      if ( need[0] == what_need)  {
        
            console.log(need + ' найдено');
            
            return true;
            
     } else {
            Array_done.push(need.pop());
            
            }

};

};