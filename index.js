"use strict";

Array.from(document.querySelectorAll('.square')).forEach(function(el){
    el.addEventListener('click', function(el){

        let target = el.target;
        if (target.tagName === 'BUTTON') return;

        let b = (this.innerHTML).toString();
        let numb = b.match(/\d/g);
        numb = numb.join('');
        let num = +(numb) + 1;
        let str = `${num}<div class="wrap-button"><button class="plus">+</button><button class="minus">-</button></div>`;
        this.innerHTML = str;
    })
})

let getClosest = function (elem, selector) {

    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                let matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;
};

document.addEventListener('click', function (event) {

    if ( event.target.classList.contains('minus') ) {
        let parent = getClosest(event.target, '.square');
        let b = (parent.innerHTML).toString();
        let numb = b.match(/\d/g);
        numb = numb.join('');

        if (+numb === 0) {
            return
        };

        let num = +(numb) - 1;
        let str = `${num}<div class="wrap-button"><button class="plus">+</button><button class="minus">-</button></div>`;
        parent.innerHTML = str;
    }

}, false);

document.addEventListener('click', function (event) {

    if ( event.target.classList.contains('plus') ) {
        let parent = getClosest(event.target, '.square');
        let b = (parent.innerHTML).toString();
        let numb = b.match(/\d/g);
        numb = numb.join('');
        let num = +(numb) + 1;
        let str = `${num}<div class="wrap-button"><button class="plus">+</button><button class="minus">-</button></div>`;
        parent.innerHTML = str;
    }

}, false);

document.getElementById('link-for-text').addEventListener('click', function(el){
    let link = (((decodeURIComponent((window.location).hash).replace('#?','&')).split('&utm_')).join()).split(',').filter(Boolean);
    let arr = [];

    link.forEach((el) => {
        let a = {};
    a[el.split('=')[0]] = el.split('=')[1];
    arr.push(a);
})

    function createTable(arr) {
        let str = '<table>';

        for (let i = 0; i < arr.length; i++) {
            str += '<tr>';
            for (var prop in arr[i]) {
                str += `<td>${prop}</td><td>${arr[i][prop]}</td>`;
            }
            str += '</tr>';
        }
        str += '</table>';
        return str;
    }

    this.text = 'Click to create Table';

    document.getElementById('myTable').innerHTML = createTable(arr);
})

document.getElementById('reset').onclick = function() {
    location.reload();
}
