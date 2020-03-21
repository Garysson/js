"use strict";

let num = prompt('Высота вершины треугольника');

let b = '';

for (let i = 1; i <= num; i++) {
    let a = '';

    for (let j = 1; j <= i; j++) {
        a += '*';
    }

    b += a + '\n';
}

console.log(b);