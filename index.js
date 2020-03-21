"use strict";

let students = [
    {
        name : 'Vasya',
        dateBirth : 1987,
        sex : 'male'
    },
    {
        name : 'Petay',
        dateBirth : 1983,
        sex : 'male'
    },
    {
        name : 'Igor',
        dateBirth : 1991,
        sex : 'female'
    },
    {
        name : 'Katya',
        dateBirth : 1995,
        sex : 'female'
    },
    {
        name : 'Irina',
        dateBirth : 2000,
        sex : 'female'
    }
];

function getAverageAge(arr) {
    let a = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        a += 2020 - arr[i].dateBirth;
    }

    return a/arr.length;
}

function checkMostGender(arr) {
    let a = '';
    let b = 0;
    let c = 0;
    const j = 'Мужчин больше чем женщин';
    const y = 'Женщин больше чем мужчин';

    for (let i = 0; i <= arr.length - 1; i++) {
        a += arr[i].sex;

        if (arr[i].sex === 'male') {
            b += 1
        } if (arr[i].sex === 'female') {
            c += 1
        }
    };

    if (b > c) {
        return j
    } else {
        return y
    };
}

console.log('Средний возраст студентов ' + getAverageAge(students) + 'лет');
console.log(checkMostGender(students));

let arr = [1, 2, 'asas', 4, 5, 6];

function clone(arr) {
    let a = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        a[i] = arr[i];
    }

    return a
}

let brr = clone(arr);
brr[0] = 'newValue';

console.log(arr);
console.log(brr);

let arrNumber = [1, 2, 3, 4, 5, 6];

function filter(arr, isEven) {
    let newArr = [];
    let newArrIndex = 0;

    function isEven(x) { return x % 2 === 0; }

    for (let i = 0; i <= arr.length - 1; i++) {
        if (isEven(arr[i])) {
            newArr[newArrIndex] = arr[i];
            newArrIndex++;
        }
    }

    return newArr;
}

console.log(filter(arrNumber));
