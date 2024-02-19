
document.querySelector('.clic_1').onclick =function (){
    document.querySelector('.clic_1').style.width =  '115px';
    document.querySelector('.clic_1').style.height =  '65px';
}
 
document.querySelector('.double_clic').ondblclick = function (){
    let a = "Второй блок";
    console.log(a);
    document.querySelector('.double_clic').innerHTML = a;
}


function changeImg() {
    let image = document.querySelector('.cat');
    if (image.src.match("img/1-depositphotos-11856682-l-2015.jpg")) {
        image.src = "img/maxresdefault-60.jpg";
    } else{
        image.src = "img/1-depositphotos-11856682-l-2015.jpg";
    }
    
}
document.querySelector(".cat").onclick = changeImg;

document.querySelector(".key").onkeypress = function(e){
    console.log(e.key);
    console.log(e.keyCode);
    document.querySelector('.div_key').innerHTML = e.key;
    document.querySelector('.div_keyCode').innerHTML = e.keyCode;
}



let inp = document.querySelector('.inp_string')
function inpFanc() {
    let inpp = inp.value;
    if(!isNaN(inpp)) {
        alert('false');
    } else {
        alert('true');
    }
}
document.querySelector('.inp_but').onclick = inpFanc;