
function clic (){
     let fruits= ['яблоко', 'груша','персик','апельсин','мандарин','банан','лимон','малина', 'ежевика','абрикос','вишня',]
 let a = fruits[5];
 console.log(a);
  document.querySelector('.result').innerHTML = a;
   }
 document.querySelector('.btn').onclick = clic;
    
    
function num(){
    let array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (let i = 0; i < array_num.length; i++){
        let b = array_num[i];
        if (b % 2 == 0){
            console.log(b);
            document.querySelector('.nums').innerHTML += b;
        }
       
    }
    }
    document.querySelector('.button_nums').onclick = num;

    function num_2(){
        let array_num_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        for (let i = 0; i < array_num_2.length; i++){
            let b = array_num_2[i];
            if (b % 2 == 1){
                console.log(b);
                document.querySelector('.nums_2').innerHTML += b;
            }
        }
        }
        document.querySelector('.button_nums_2').onclick = num_2;
    
    