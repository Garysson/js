"use strict";

let a = prompt('Radius of circle','');
let b = prompt('Enter first number','');
let q = prompt('Enter second number', '');
let c = prompt('Please neter one of mathematic operator + - * /', '');
let sumNumber = sum();
let minusNumber = minus();
let divisionNumber = division();
let multiplicationNumber = multiplication();
const PI = 3.1415;

function isItNumberFirst () {
    let c = +a;
    let b = c + 'a';

    if ( b === 'NaNa') {
        return console.log('Please enter radius of ciercle value as a number');
    }
}

function areaCircle (a, b) {
    return (a*b)*(a*b);
}

function areaPerimeter (a, b) {
    return (a)*(2*b);
}

function getUsersRadius (dataUserRadius) {
    let x = a;
    let y = PI;

    return dataUserRadius(x, y);
}

function isItNumberSecond () {
    let c = +b;
    let d = c + 'a';

    let w = +q;
    let e = w + 'a';

    if ( d === 'NaNa') {
        return console.log('Please enter first number value as a number');
    } else if ( e === 'NaNa') {
        return console.log('Please enter second value as a number');
    }
}



function sum (x, y) {
    const c = +b;
    const e = +q;

    return c + e;
}

function avarage () {
    const c = 2;
    let b = sum();

    return b / c;
}

function minus (x, y) {
    const c = +b;
    const e = +q;

    return c - e;
}


function division (x, y) {
    const c = +b;
    const e = +q;

    return c / e;
}

function multiplication (x, y) {
    const c = +b;
    const e = +q;

    return c * e;
}

function getResult() {
    let z = c;

    if (c === '+') {
        return console.log('Сумма чисел равна ' + sumNumber);
    } else if (c === '-') {
        return console.log('Вычетание чисел равно ' + minusNumber);
    } else if (c === '/') {
        return console.log('Деление чисел равно ' + divisionNumber);
    } else if (c === '*') {
        return console.log('Умножение чисел равно ' + multiplicationNumber);
    } else {
        return console.log('Please neter one of mathematic operator + - * /')
    }
}

isItNumberFirst();

isItNumberSecond();

console.log('Площадь круга состaвляет ' + getUsersRadius(areaCircle) + ' метров квадратных');

console.log('Длина окружности состaвляет ' + getUsersRadius(areaPerimeter) + ' метров');

console.log('Среднее арифметическое двух чисел составляет ' + avarage(sum));

getResult();
