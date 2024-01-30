let elem = document.querySelector('.element');
function btn (){
    elem.style.width = '150px';
    elem.style.height = '150px';
    elem.style.marginTop ='20px';
    innerHTML = elem;

    btn_2();
    btn_3();
}

 document.querySelector('.button_one').onclick = btn;

function btn_2(){
    elem.classList.add('one');
    elem.classList.add('two');
    elem.classList.add('three');
}

function btn_3(){
    elem.classList.remove('two');
}
