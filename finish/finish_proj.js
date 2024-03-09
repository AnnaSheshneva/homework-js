
let cont = document.querySelector('.body');

document.querySelector('#toggle-box-checkbox').onclick = function(){
      cont.classList.toggle('black');
      console.log(cont);
      //document.querySelector('.conteiner').innerHTML = black;
}

let tasks_completed_2 = document.querySelector('.tasks-completed_2');
let text = document.querySelector('.text');
let tasks_count = document.querySelector('.tasks-count_1');
let tasks_content = document.querySelector('.tasks-content')
let arr = [];
let tasks= 0;
 function todo(){
     
      let text_mes = text.value.trim();
      if (text_mes == ""){
            alert("Поле пустое, введите текст");
            return;
      }
     console.log(text_mes);
      arr.push(text_mes);
      let b = 'Ваши задачи:';
      document.querySelector('.no-tasks-message').innerHTML = b;
      document.querySelector('.tasks-count_1').innerHTML = arr.length;
      todoAdd ();
     
}
document.querySelector('.plus').onclick = todo;

function todoAdd (){
      let  listItem = document.createElement('span');
      listItem.style.color = 'black';
      listItem.textContent = text.value;
      tasks_content.appendChild(listItem); 

      localStorage.setItem('case', JSON.stringify(arr));
      users = JSON.parse(localStorage.getItem('case'));
      

      let  listItem_button = document.createElement('button');
      listItem_button.classList.add('tasks_button');
            let del = 'удалить';
      listItem_button.innerHTML = del
      listItem_button.style.color= 'white';
      listItem_button.setAttribute('data-index', arr.length - 1);
      
      listItem_button.onclick = function(){
            let index = parseInt(this.getAttribute('data-index'));
            tasks_content.removeChild(listItem);
            arr.splice(index, 1);
            tasks_count.innerHTML = arr.length;
            buttIndex ();
            localStorage.setItem('case', JSON.stringify(arr));
        };
         listItem.appendChild(listItem_button); 

         
      listItem.onclick = function() {
            let lastClick = listItem.classList.toggle('list');
            if (lastClick){
            tasks++;
      }     else {
            tasks--;
      }
         tasks_completed_2.innerHTML = tasks;
      
      }
} 

function buttIndex (){
      let buttons = document.querySelectorAll('.tasks_button');
      buttons.forEach((button, index) => {
            button.setAttribute('data-index', index) ;
           
      });
}
