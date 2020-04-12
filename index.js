"use strict";

function createTable (arr) {
    let htmlTable = `<table id="myTable">`;
    let tr = `<tr>`;

    arr.forEach(function (el, ind) {
        if (ind % 3 === 0) {
            tr += `</tr><tr><td>${el}</td>`;
        } else {
            tr += `<td>${el}</td>`;
        }
    })

    tr += `</tr>`;
    htmlTable += tr + `</table>`;
    return htmlTable;
}

document.querySelector(`.myTable`).innerHTML = createTable(Array.from({length: 9}, () => Math.floor(Math.random() * 100)));

$('#myTable').click(function(event){
    if (event.target.tagName === 'TD') {
        $('.output-text').text(event.target.innerText)
    }
})

$('.show-text').click(function(event) {
    if (event.target.tagName === 'H1') {
        $('.text', this).toggle();
    }
})
