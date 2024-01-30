let a = 'Вы нажали на кнопку';

function clic() {
     document.querySelector('.end').textContent = a;
 }
document.querySelector('.button').onclick = clic;


      

let inp_1 = document.querySelector('.num1')
let inp_2 = document.querySelector('.num2')
document.querySelector('.result')
function calc() {
    let e = Number(inp_1.value )
let j = Number(inp_2.value) 
let sum = (e + j);
console.log(sum);
document.querySelector('.result').innerHTML = sum;
}
document.querySelector('#plas').onclick = calc;
  

function calc_minus() {
    let e = Number(inp_1.value )
    let j = Number(inp_2.value) 
    let sum = e - j;
    console.log(sum);
    document.querySelector('.result').innerHTML = sum;
}
document.querySelector('#minus').onclick = calc_minus;

function calc_multiply() {
    let e = Number(inp_1.value )
    let j = Number(inp_2.value) 
    let sum = e * j;
    console.log(sum);
    document.querySelector('.result').innerHTML = sum;
}
document.querySelector('#multiply').onclick = calc_multiply;

function calc_share() {
    let e = Number(inp_1.value )
    let j = Number(inp_2.value) 
    let sum = e / j;
    console.log(sum);
    document.querySelector('.result').innerHTML = sum;
}
document.querySelector('#share').onclick = calc_share;