"use strict";

let num = prompt('Высота вершины треугольника');

for (let i = 0; i < num; i++) {
	let res = '*'
		for (let j = 0; j < i; j++) {
			res += '*';
		}
	console.log(res);
}
