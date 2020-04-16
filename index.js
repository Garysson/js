"use strict";

$('.wrap').on('click', '.square', function(event) {
    if (event.target.nodeName != 'BUTTON') {
        $(this).find('span').text(function(i, el) {
            el = +el + 1;
            return el;
        });
    }
});

$('.wrap').on('click', '.wrap-button', function(event) {
    if (event.target.className === 'plus') {
        $(this).prev().text(function(i, el) {
            el = +el + 1;
            return el;
        });
    } else {
        $(this).prev().text(function(i, el) {
            if (el === '0') {
                return;
            }
            el = +el - 1;
            return el;
        });
    }
});

$('.wrapper').on('click', '.second-square', function(event) {
    let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

    let randomColorBorder = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

    $(this).css({'background-color' : `${randomColor}`, 'border-color' : `${randomColorBorder}`});

    $(".wrapper").prepend($(this).remove()['0'].outerHTML);
});