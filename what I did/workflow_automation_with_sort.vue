<div id="vueapp">  
<div :class="{gray_back: background}" @click="hideModal"></div>

    <div v-if="modalVisibleFlag"  class="modal_okno">
        <img class="img_modal" :src="$root.obj.photo">
        <div class="modal_info"> 
            <div>{{ $root.obj.fio}}</div>
            <div><p class="bold_text">{{ $root.obj.position}}</p></div>
            <div>{{ $root.obj.phone_dob}}</div>
            <div>{{ $root.obj.phone}}</div>
            <div><p class="bold_text">День рождения:</p>{{ $root.obj.birthdate}}</div>
            <div><p class="bold_text">Дата приема в компанию:</p>{{ $root.obj.dateofreceipt}}</div>
            <div><p class="bold_text">Опыт:</p>{{ $root.obj.experience}}</div>
            <div><p class="bold_text">Функции:</p>{{ $root.obj.actions[0]}}</div>
            <div><p class="bold_text">Качества:</p>{{ $root.obj.quality}}</div>
            <div><p class="bold_text">О себе:</p>{{ $root.obj.about}}</div>
            
        </div>
        <div class="closeBtn" @click="hideModal">X</div>
    </div>



    <div class = "user_block" 
         @click="popup_modal(index)"   
         v-for="(item,index) in $root.need_users_ar"> 
            <img :src="item.photo"> 
            </div>
            <div>
                <h3>{{item.fio}}</h3>
                 <p>{{item.position}}</p>  
    <span class ="dr_text">День рождения: 
                 {{item.birthdate.split(" ").splice(0,2).join('.')}} </span>

            </div>
    </div>
</div>




   <script type="text/javascript">

var need_users = [];
var  mounth  = '10';
var text_mounth = 'Ноября';
function rec(user_obj) {
    
    let need_js_mounth;
 
    if (user_obj.birthdate !== undefined) {
        need_js_mounth = user_obj.birthdate.split(' ')[1]  ;
        // console.log(need_js_mounth); // тут результаты сплита на итерациях
    }

 if (mounth == need_js_mounth) {    // фильтр на др в тек. месяце
     // условаие даты , добавляем в нвоымй массив 
     need_users.push(user_obj);

 }
if (user_obj.subs !== undefined) {
        user_obj.subs.forEach(another => {
            rec(another);
        });
 }
}; 












 </script>

<script>
var vm = new Vue({
 el: '#vueapp',
  data: {
    //  need_users: [],
     need_users_ar:[],
     modalVisibleFlag: false,
     obj:{},
 background: false
 },


 created: function(){
   
     $.ajax({
    type: "GET",
    url:'https://domen.ru/download/attachments/2234234234/userTree.json?api=v2',
     
    success: ( response ) =>{
        var obj = JSON.parse(response)
        rec(obj);

function quicksort(array) {    // алгоритм быстрой сортировки
if (array.length < 1) {
return array; // базовый случай
} else { 
let pivotIndex = Math.floor(array.length / 2); // берем элемент в середине
let pivot = array[pivotIndex];
let less = [];
let greater = [];
for ( i =0; i < array.length; i++) {
if ( i == pivotIndex) continue;
if (array[i].birthdate.split(" ")[0] <= pivot.birthdate.split(" ")[0]) {       // по какому условию сравнивать
less.push(array[i]);
} else {
greater.push(array[i]);
}
}
let result = [];

return  need_users = result.concat(quicksort(less), pivot,quicksort(greater) ); //   он сортировал но в обратном порядке.  поменял местами и все ок . 
}
};
quicksort(need_users);

 console.log('need_users ', need_users);
       
        this.$root.need_users_ar = need_users;
       
         var div = document.createElement("div");  


     
      }
    })
 },
 methods:{
     popup_modal(index){
         this.$root.modalVisibleFlag = true;
         this.$root.obj = this.$root.need_users_ar[index];
          this.$root.background = true;
     },
     hideModal(){
         this.$root.modalVisibleFlag = false;
          this.$root.background = false;
     }
   
 }

})
</script>


<style>
.user_block{
    display:flex;
    padding: 10px;
    width:100%;
    box-sizing: border-box; 
    margin: 0 0 20px;
    border-radius: 10px;
    background-color: rgba(192,192,192,0.3);
    cursor:pointer;
}
.user_block img {
    float: left;
margin: 0px 10px 0px 0px;
width: 70px;
 }

 .modal_okno {
    width: 1000px;
    display: flex;
    border: 1px solid #000;
    position: fixed;
    background: #fff;
    left: 20%;
 }


  .dr_text {
  padding-top: 20px;
 font-weight: bold ;
color: #F60;
    }
.closeBtn {
    cursor: pointer;
    padding: 5px;
}

.img_modal {
    width: 300px;
padding: 10px;
 }


.modal_info {
    padding: 10px;
}
.bold_text {
    font-weight: bold !important;
}

.gray_back{
 background-color: rgb(119, 119, 119); opacity: 0.7;
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
}

.mobile_ico:before {
    


}
 </style>

