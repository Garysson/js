"use strict";

// Task 1

const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];

let sumArr = arr.reduce(function(sum, el) {
    return sum + el;
});

console.log(sumArr);

let arrNegativeValue = Object.create(arr.filter(function(el) {
        if (el < 0) {
            return el;
        }
    })
);

console.log(arrNegativeValue);

let arrSortIncrease = arr.sort(function(a, b){
    return a - b;
});

console.log(arrSortIncrease);

let arrSortDecrease = arr.sort(function(a, b){
    return b - a;
});

console.log(arrSortDecrease);

let arrDivision = arr.map(function(el) {
    return el / 2;
});

console.log(arrDivision);

// Task 2

const str = "12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964";

let brrFromString = str.split(', ');

let brrEven = brrFromString.filter(function(el, i) {
    if (el % 2 === 0) {
        return el;
    }
});

console.log(brrFromString, brrEven);

// Task 3

const scheme = [
    ['name', 'Vasya'],
    ['age', 25],
    ['score', 95]
];

function makeObjectFromArr(arr) {
    let obj = {};

    for (let j = 0; j < arr.length; j++) {
        obj[arr[j][0]] = arr[j][1];
    }

    return obj;
}

console.log(makeObjectFromArr(scheme));

const objArr = makeObjectFromArr(scheme);

function makeArrFromObject(obj) {
    let a = [];

    for (let key in obj) {
        a.push([key, obj[key]]);
    }

    return a;
}

console.log(makeArrFromObject(objArr));
