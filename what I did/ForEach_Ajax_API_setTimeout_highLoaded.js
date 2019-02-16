var metaName =  $('[name="ajs-latest-page-id"]').attr('content');
var page_id = +metaName;  // айдишник этой страницы
    var array_href_another_file = [];  // по названию если не понятно, дальше не лезть.  
    var id_file_attach = [];
    var doc_onPage  =   $('[data-linked-resource-id]');   //обратились ко всем ссылкам на странице 
    var href_onPage ;   //  файлы на целевой 
    var arr_obj = [];  // для href вложений

var styles_for_title = {   
    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZfLTxNRFMZZ65/DghjerViw0BZ0oYmEHSIYgxolAivkJTERseU1JGITUaAvUImlLfJooRgWEoMGS+JKE0NZ+Bcc7ym3OIMnnQ502kmcL/kt6D33O+fj3pumebp06VJHvqXwHd9SZN0bCtvn57fO8I8Vy+/3n/WFwo6EV3C9lX+cHXmXIkbWGP4S7uJLiuUNRbrFXnOhiIEvqS/2H7wnbs6Y50uKxbzeSLyYN1/KnC76LCVmj23U7LUuVHtsgSQPFwZj4uYji9P74nUl4F6xF3qL17E3Y4RRzMdSJmbSU+21AUXHu76jxsiQ30nWpcPQe6fEC72pugQem7IrzDZUkUaIxwatzk5J8wG3AFWzNXR9CqpmLDDgEiRe6I09qHqEnYyJjykvdp1eUyaIcdIELUKbpPnA7DgU2cvI+lQU2ksTe8Ve6G2crCTrERZkio8pL1a8RpkgpWMGaBy7LWneO+2AgseFZH0qcE/v9LDEC71LRo1kPYKz8THllSqI0VkJhr5KcAVXjprX25ug2FFO1qcC9zQ4mo58XIFlKO81wXnWg6pHMhYEOfekCC7018CtiXa4PHgN8nsKwOyykLWpwD353QUJD/SqeFSd8KZqk2Q0CD5Gw3NT4l2UCRVgdlvpujTAveiBXuiZ6qEjioJceXt1hzLRAjgbH1Ne1wONvykTLYCz8THl1RXp/HH3QytoEZyNjymvWDy6tncQBS2Cs/Ex5aUHyQJ6EK2h2SDjn55C/2YXxA42yPXjaDIIhkh+P6QbRnNBxCGSvNwZI2vFaCqIsP1viI61Ntjdj5D1YrISJBaXvxrC9tCJQyCqB5n6IsDNUAt8/rVCriOnDYGoGuTVVwEsvtrEYM3BG2QYOsR9RSEQ1YJs/VyE2rlLkgGbA9IwE9vPJOvISUIgqp6Ie/cFWOfqJIMehlnOaAhE1SDIYRjpydQvNEj+RtpXlb2J46geBKHCiDltCCQrQRD3rpMMk4kQSNaCIJ5v0pN5sHryN3GcrAZBkmEyGQLJehAk+N2d0RBIToKogR5EaygLchB1USbaYGOGjymvvfhGHW2Se2L7URsfMz2x3xajlFEuYddqmI+nTHvxzVq8Zuy39EdmtJULDntvzLKTsPKxdOnS9f8qL+8PxyDHgTO12UcAAAAASUVORK5CYII=') left top no-repeat",
    backgroundSize: "22px 22px",
    paddingLeft: "24px",
    backgroundPositionX: "1px",
    marginLeft: "-24px"


};
var styles__for_file = {   
    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANdSURBVGhD7ZfLTxNRFMZZ65/DghjerViw0BZ0oYmEHSIYgxolAivkJTERseU1JGITUaAvUImlLfJooRgWEoMGS+JKE0NZ+Bcc7ym3OIMnnQ502kmcL/kt6D33O+fj3pumebp06VJHvqXwHd9SZN0bCtvn57fO8I8Vy+/3n/WFwo6EV3C9lX+cHXmXIkbWGP4S7uJLiuUNRbrFXnOhiIEvqS/2H7wnbs6Y50uKxbzeSLyYN1/KnC76LCVmj23U7LUuVHtsgSQPFwZj4uYji9P74nUl4F6xF3qL17E3Y4RRzMdSJmbSU+21AUXHu76jxsiQ30nWpcPQe6fEC72pugQem7IrzDZUkUaIxwatzk5J8wG3AFWzNXR9CqpmLDDgEiRe6I09qHqEnYyJjykvdp1eUyaIcdIELUKbpPnA7DgU2cvI+lQU2ksTe8Ve6G2crCTrERZkio8pL1a8RpkgpWMGaBy7LWneO+2AgseFZH0qcE/v9LDEC71LRo1kPYKz8THllSqI0VkJhr5KcAVXjprX25ug2FFO1qcC9zQ4mo58XIFlKO81wXnWg6pHMhYEOfekCC7018CtiXa4PHgN8nsKwOyykLWpwD353QUJD/SqeFSd8KZqk2Q0CD5Gw3NT4l2UCRVgdlvpujTAveiBXuiZ6qEjioJceXt1hzLRAjgbH1Ne1wONvykTLYCz8THl1RXp/HH3QytoEZyNjymvWDy6tncQBS2Cs/Ex5aUHyQJ6EK2h2SDjn55C/2YXxA42yPXjaDIIhkh+P6QbRnNBxCGSvNwZI2vFaCqIsP1viI61Ntjdj5D1YrISJBaXvxrC9tCJQyCqB5n6IsDNUAt8/rVCriOnDYGoGuTVVwEsvtrEYM3BG2QYOsR9RSEQ1YJs/VyE2rlLkgGbA9IwE9vPJOvISUIgqp6Ie/cFWOfqJIMehlnOaAhE1SDIYRjpydQvNEj+RtpXlb2J46geBKHCiDltCCQrQRD3rpMMk4kQSNaCIJ5v0pN5sHryN3GcrAZBkmEyGQLJehAk+N2d0RBIToKogR5EaygLchB1USbaYGOGjymvvfhGHW2Se2L7URsfMz2x3xajlFEuYddqmI+nTHvxzVq8Zuy39EdmtJULDntvzLKTsPKxdOnS9f8qL+8PxyDHgTO12UcAAAAASUVORK5CYII=') left top no-repeat",
    backgroundSize: "22px 22px",
    paddingLeft: "24px",
    backgroundPositionX: "0px",
     marginLeft: "-24px"
};
var text_hover = `${TodayTime }`;

// блок обьекта дата.
 var currentDate = new Date();
    var day_week = currentDate.getDay();
    var hour = currentDate.getHours();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // тут нужна только цифра , но не 0  
    var year = currentDate.getFullYear();
    if (month < 10) {
    month =  "0" + month;
    } if (day < 10) {
    day =  "0" + day;
    }  // сложности преобразования даты. например  4.10 != 04.10 
    var TodayTime = ( day + "." + month + "." + year);
 console.log('TodayTime' , TodayTime);

     var text_hover = `Обновлено ${TodayTime}`;




function icon_add(data) {

    var result = data;
    arr_obj = [];

 result.forEach(el => {

  var date = el.history.lastUpdated.when;   // путь к rest Api - time attachment

    let dateString = date;
    let dateObj = new Date(dateString);
    let dateFormat = {
        
    day: '2-digit',
    month: 'numeric',
    year: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    weekday: "long"
                    
};
  
    let file_date = dateObj.toLocaleString("ru", dateFormat) || ''; 
    let need_date_file = file_date.split(',')[1].split(' ')[1];  // дд.мм.гггг 
    console.log("need_date_file", need_date_file); 
    let need__date_friday = file_date.split(',')[0];  //  пушим  название дней файлов
    let need__date_afternoon = file_date.split(', ')[2].split(':').join("");  // послеполуденных , получаем строку вида "1200"
    let need_day_yesterday = need_date_file.split('.')[0]; // для проверки вчерашних файлов . day вида 06 

function friday(i) {
    var rezult = day - need_day_yesterday; 
   if ( (day_week == 1 && i == "пятница") && rezult == 3 ) {
       return true
   }   else {
       return false
   }
  };

function afternoon(i) {
     var rezult = day - need_day_yesterday ;
   
      if (+i > 1250 && rezult == 1) {    //  "ччмм" - время заливки файла, rezult - разница дней
        return true
      }  else {
          return false
      } 
  };


    arr_obj.push({ 

        'id': el.id,
        'title': el.title,
        'href': el._links.download,
        'date': need_date_file,
        'friday': friday(need__date_friday),
        'afternoon': afternoon(need__date_afternoon)
    
     }); 

}); //doc_onPage.each

var yesterday = day - 2;
console.log("собранная инфа о документе", arr_obj);

function visual_logic(){

doc_onPage.each(function(i, value){    
    var href_onPage = $(this).attr('href');

    var actual = arr_obj.find( 
    el => {
         if (el.href == href_onPage && el.date === TodayTime) {
                text_hover = `Обновлено ${TodayTime}`
                return true
         } else {
         if (el.href == href_onPage  && el.afternoon === true  ) {
                text_hover = `Обновлено ${el.date}`
                return true
         } else {
         if ( (el.href == href_onPage  && el.friday === true) && day_week == 1  ) {
                text_hover = `Обновлено ${el.date}`
                return true
         }     
         } 
         }
          
        } ) !== undefined 
    ? $(this).parent().parent().prev().addClass('new').attr("title", text_hover )
    && $(this).parent().addClass('new_file').attr("title", text_hover ) 
    : console.log('не актуальных');

    $('.new').css( styles_for_title );
    $('.new_file').css( styles__for_file );

 array_href_another_file.push(href_onPage.split('https://domen.ru')[0]);   
});// для перехода на другие итерации.

}; //visual_logic   el.date === TodayTime


visual_logic();



array_href_another_file.forEach(function(element) {
  
  id_file_attach.push(element.split('/')[3]);
 // оставляем чисто айдишники
});

}; //  вся основная функция icon_add


$.ajax({
    type: "GET",
    url: 'https://domen.ru/rest/api/content/'+page_id+'/child/attachment?expand=history.lastUpdated&limit=500',
  
    success: function (response) {
    var ttt =  response.results ;
    console.log("первоочередный запрос", ttt);
    icon_add(ttt);

    },


    error: function(error){
        console.error(error);
    }
});



setTimeout(() => {

  console.log("переход на setTimeout");


id_file_attach.forEach(function(el) {    

    if ( +el !== page_id ) {

$.ajax({
    type: "GET",
    url: 'https://domen.ru/rest/api/content/'+ el +'/child/attachment?expand=history.lastUpdated&limit=500',//филиал
  
    success: function (response) {

    var ttt =  response.results ;
    console.log(" следующие запросы", ttt);

    icon_add(ttt);

    },

    error: function(error){

        console.error(error);
        
    }

});    //ajax

}  else {   

    console.log('не берем в расчет',el);

} // if else

});   //forEach
 }, 600);
