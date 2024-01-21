let a = +prompt();
let b = 2;
switch(true){
    case(a === b):
    alert("Да");
    break;
    case(a !== b):
    alert("Нет");
    break;
    default:
        alert("не сработало");
}


let n = +prompt("Введите число 'задание 2':");
switch(true){
   case(n <=3):
   alert("Зима");
   break;
   case(n <= 6):
   alert("Весна");
   break;
   case(n <= 9):
   alert("Лето");
   break;
   case(n <= 12):
   alert("Осень");
   break;
}
 

let one = null;
let two = 'мама';
let three = 3;
alert(one ?? two ?? three);
