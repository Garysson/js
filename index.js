"use strict";

document.forms.currencyexchange.addEventListener('submit', function(event){
    event.preventDefault();
    let operation = document.forms.currencyexchange.elements.operation.value;
    let currency_from = document.forms.currencyexchange.currency_from.options.selectedIndex;
    let currency_to = document.forms.currencyexchange.currency_to.options.selectedIndex;
    let amount = +document.forms.currencyexchange.amount.value;
    let coff = 0;
    let e = document.getElementById("currency_to");
    let strCur = e.options[e.selectedIndex].value;

    function exch(a, b) {
        return a * b;
    }

    if (currency_from === 0 && currency_to === 0) {
        coff = 1;
    } else if (currency_from === 0 && currency_to === 1){
        coff = 27.66;
    } else if (currency_from === 0 && currency_to === 2){
        coff = 0.95;
    } else if (currency_from === 1 && currency_to === 0){
        coff = 0.04;
    } else if (currency_from === 1 && currency_to === 1){
        coff = 1;
    } else if (currency_from === 1 && currency_to === 2){
        coff = 0.03;
    } else if (currency_from === 2 && currency_to === 0){
        coff = 1.1;
    } else if (currency_from === 2 && currency_to === 1){
        coff = 29.92;
    } else if (currency_from === 2 && currency_to === 2){
        coff = 1;
    }

    let l = exch(coff, amount).toString();

    document.forms.currencyexchange.querySelector('.result').innerHTML = `${l} ${strCur}`;
})


document.querySelectorAll('.letter')
    .forEach(function(el){
        el.addEventListener('click', function(){

            let a = this.textContent;

            let b = document.querySelector('.text-wrap').textContent;

            let c = b + a;

            document.querySelector('.text-wrap').innerHTML = `${c}`;
        });
    })

document.querySelector('.delete')
    .addEventListener('click', function(){
        document.querySelector('.text-wrap').innerHTML = ` `;
    })

document.querySelector('.uppercase')
    .addEventListener('click', function(){
        let a = document.querySelectorAll('.letter')

        let c = '';

        for (let elem of a) {

            let a = elem.style.textTransform;

            c = a;
        }

        if (c.length === 0 || c === 'lowercase') {
            for (let elem of a) {
                elem.style.textTransform = 'uppercase';
                elem.textContent = elem.textContent.toUpperCase();
            }
        }

        else if (c.length > 0) {
            for (let elem of a) {
                elem.style.textTransform = 'lowercase';
                elem.textContent = elem.textContent.toLowerCase();
            }
        }
    })
