"use strict";

let el = document.getElementById('wrapper');
el.addEventListener('click', function(i){
    let el = i.target;
    let color = el.style.backgroundColor;

    if (color === null) {
        color = 'blue';
    } else if (color === 'blue') {
        color = 'green';
    } else if (color === 'green') {
        color = 'yellow';
    } else {
        color = 'blue';
    };

    el.setAttribute('style', `background-color:${color}; border: 3px solid ${color};`);

    let a = el.outerHTML;
    el.remove();
    let b = document.getElementById('wrapper').innerHTML;
    let str = a + b;

    document.getElementById('wrapper').innerHTML = str;
});

function toggleClass(tagname, newclassname) {
    document.querySelectorAll(`${tagname}`)
        .forEach(function(item) {
            item.addEventListener('click', function(event){

                let e = event.target.className.split(' ');

                if (e.includes(`${newclassname}`)) {
                    let i = e.indexOf(`${newclassname}`);
                    e.splice(i, 1);
                    event.target.className = e.join(' ');
                } else {
                    e.splice(e.length, 1, `${newclassname}`);
                    e.join(' ');
                    event.target.className = e.join(' ')
                }
            })
        });
}

toggleClass('div', 'border');
