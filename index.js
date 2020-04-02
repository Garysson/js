"use strict";

// Task 2

"use strict";

let link = (((decodeURIComponent((window.location).hash).replace('#?','&')).split('&utm_')).join()).split(',').filter(Boolean);

let arr = [];

link.forEach((el) => {
    let a = {};
        a[el.split('=')[0]] = el.split('=')[1]
    arr.push(a)
})

function createTable(arr) {
    let str = '<table>'

    for (let i = 0; i < arr.length ; i++) {
        str += '<tr>';

        for (var prop in arr[i]) {
            str += `<td>${prop}</td><td>${arr[i][prop]}</td>`
        }

        str += '</tr>';
    }

    str += '</table>'

    return str
}

document.getElementById('reset').onclick = function() {
    location.reload();
}

let div = document.createElement('div');

div.innerHTML = createTable(arr);

document.body.append(div);