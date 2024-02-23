
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
      todoAdd (text);
     
}
document.querySelector('.plus').onclick = todo;
function todoAdd (text){
      let  listItem = document.createElement('span');
      listItem.style.color = 'black';
      listItem.textContent = text.value;
      tasks_content.appendChild(listItem);  

      let  listItem_button = document.createElement('button');
      listItem_button.classList.add('tasks_button');
      listItem.appendChild(listItem_button);  
      
      listItem.onclick = function() {
            listItem.classList.toggle('list');
            tasks++;
            tasks_completed_2.innerHTML = tasks;
          }
         
}

