"use strict";

/* 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.   */


function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}


/*  2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.  */

function isEven(value){
    if(value){
        (value % 2 == 0);
        return true;
    }else{
        return false;
    }
}


let isEven = function(number){
    return (number % 2 == 0) ? true : false;
}


/* 3. Переписать код из конструкции if в switch

let value = +prompt('value?', '');
if (value == 0) {
  alert( 0 );
}
if (value == 1) {
  alert( 1 );
}
if (value == 2 || value == 3) {
  alert( '2, 3' );
}     */

let value = +prompt('value?', '');
switch(value){
    case 1:
        console.log(0);
        break;
    case 2:
        console.log(1);
        break;
    case 3:
        console.log('2, 3');
        break;
}


/*  4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b
Пример вызовов: 
min(3, 5) // вернет 3
min(5, -1) // вернет -1   */

function min (a, b){
    if(a < b){
        return a;
    }else{
        return b;
    }
}







































