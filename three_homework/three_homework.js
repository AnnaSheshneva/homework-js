let inp = document.querySelector('.text')
let btn = document.querySelector('.check')
let div = document.querySelector(".out")
btn.onclick = function(){
    let e = inp.value
    if(e < 100){
        div.innerHTML += `${e} `
        inp.value = '';
        alert(e)
    }else{
        console.log(e)
       }
   
    }

    /* или 2 вариант решения 

    let a = +prompt();
if(a < 100){
   alert(a);
}else {
   console.log(a);
}*/

   
   
   
