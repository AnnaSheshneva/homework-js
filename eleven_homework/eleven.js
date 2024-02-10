
document.querySelector('.btn').onclick = function() { document.querySelector('.out').innerHTML = checkElement(a)};

let a = new Set() ;
a.add('e');
a.add('r');
a.add('i');
a.add('k');
a.add('t');
a.add('h');
a.add('e');
a.add('b');
a.add('e');
a.add('s');
a.add('t');

let inp = document.querySelector('.inp');
a.add(inp);
 
function checkElement(a) {
    let b = inp.value
    for (let i of a){
        if(i == b) {
            return true
        }  
    }
    return false
}

function myArray (){
let array = [1,2,3,4,5,6,7,8];
let array_2 = [];
for(let i of array){
    if(i > 5){
        array_2.push(i)
    }
}
return array_2;
}
document.querySelector('.arr').innerHTML= ` <h1>Остаток от массива: ${myArray ()}</h1>`;

