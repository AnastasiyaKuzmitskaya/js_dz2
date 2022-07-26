"use strict";



// Task 1

let a='true';
let b= false;
let c= 17;
let d= undefined;
let f=null;


console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof f);



//Task 2

let height = 15;
let width = 20;

if ( height > width) {
    console.log(height)
    } else {
    console.log(width)
    }


   //Task 3

   for( let i = 0; i < 20; i++){
    if (i % 3===0){
        console.log(i);
    }
   
}


//Task 4


let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange); 
console.log(shouldGoToWork);


//task 5
let sumUser = prompt('Enter any number:');

    if ((sumUser % 3===0) && (sumUser % 5===0)){
    console.log('FizBuz');

    }
    else if (sumUser % 5===0){
        console.log('Fiz');
    }  
    else if (sumUser % 3===0){
        console.log('Buz');
    }  

    


//task 6

let ageUser = prompt('Enter your age:');
if (ageUser >=18){
    alert('Попей пивка');
}  else if ( ageUser < 18 && ageUser >= 16 ){
    alert('Можешь выкурить сигаретку, только маме не говори');
}
else {
    alert('Пей колу')
} 





//task 7


let userName = prompt('В какую сторону света ВЫ бы хотели отправиться:');
switch (userName) {
    case 'юг':
    alert( 'на юг пойдешь счастье найдешь' );
    break;
    case 'север':
    alert( 'на север пойдешь много денег найдешь' );
    break;
    case 'запад':
    alert( 'на запад пойдешь верного друга найдешь' );
    break;
    case 'восток':
    alert( 'на восток пойдешь разработчиком станешь' );
    break;
    default:
    alert( "Попробуйте снова, без предлога" );
   }

