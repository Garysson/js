"use strict";

let a = prompt('Radius of circle','');
let b = prompt('Enter first number','');
let q = prompt('Enter second number', '');
let c = prompt('Please neter one of mathematic operator + - * /', '');
const PI = 3.1415;

function areaCircle () {
    return console.log('Площадь круга состaвляет ' + (a*b)*(a*b));
}

function areaPerimeter () {
    const b = 2 * PI;

    return console.log('Длина окружности состaвляет ' + +a * b);
}

function avarage () {
    const c = 2;
    const y = b + q;

    return console.log('Среднее арифметическое двух чисел составляет ' + b / c);
}

function calc(a, w, e) {
    const v = b;
    const n = q;
    const l = c;

    if (c === '+') {
        return console.log(+b + +q);
    } else if (c === '-') {
        return console.log(+b - +q);
    } else if (c === '*') {
        return console.log(+b * +q);
    } else if (c === '/') {
        return console.log(+b / +q);
    } else {
        return alert('Put one of this meanings + - / *')
    }
}

areaCircle();
avarage();
areaPerimeter();
calc();
