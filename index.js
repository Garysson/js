"use strict";

const myObjeckt = {
    name: 'Vasya',
    age: 24,
    status: 'student'
};

let arr = [1, 2];

function copy(target, origin) {
    let newArr = [];

    for (let prop in origin) {
        newArr[prop] = origin[prop];
    }

    return newArr;
}

console.log(copy(arr, myObjeckt));

function sumAll () {
    let a = 0;

    for (let i = 0; i <= arguments.length - 1; i ++) {
        a += i
    }

    return a
}

console.log(sumAll(1, 2, 3, 4));

function getNumberOfEven(n) {
    let a = n + '';
    let count = 0;

    for (let i = 0; i <= a.length - 1; i++) {
        if (a[i] % 2 === 0) {
            count += 1;
        }
    }

    return count
}

console.log(getNumberOfEven(223344));

Math.min.apply(Math, arr)

function mathMinMax() {
    let arr = [];
    let brr = ['',''];

    for (let prop in arguments) {
        arr[prop] = arguments[prop];
    }

    let a = Math.min(...arr);
    let b = Math.max(...arr);

    brr['0'] = a;
    brr['1'] = b;

    return brr
}

console.log(mathMinMax(3, 4, 8, 555, 7, 2, 3, -100, 2, 3, 5));