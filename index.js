"use strict";

function areaCircle (a) {
    let b = Math.pow(a, 2) * Math.PI;

    return b;
}

function areaPerimeter (a) {
    return (a) * (2 * Math.PI);
}

function avarage (x, y) {
    return (x + y) / 2;
}

function getResult(a, b, c) {

    if (c === '+') {
        return a + b;
    } if (c === '-') {
        return a - b;
    } if (c === '/') {
        return a / b;
    } if (c === '*') {
        return a * b;
    }
}

console.log('Площадь круга состaвляет ' + areaCircle(3) + ' м2');
console.log('Длина окружности состaвляет ' + areaPerimeter(10) + ' м.');
console.log('Среднее арифметическое двух чисел составляет ' + avarage(4, 10));
console.log('Сумма чисел равна ' + getResult(2, 2, '+'));
console.log('Вычетание чисел равно ' + getResult(2, 2, '-'));
console.log('Деление чисел равно ' + getResult(2, 2, '/'));
console.log('Умножение чисел равно ' + getResult(2, 2, '*'));
