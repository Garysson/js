"use strict";

let age = prompt('Ваш возраст', '');
let drink = confirm('Алкаголь употребляем?');

if (age >= 40 && drink == true) {
    alert ('Не злоупотребляйте');
    } else if (age < 18 && drink == true) {
    alert ('Ты что?! Маме расскажу!');
    } else if (age >=18 && drink == true) {
    alert ('Только водку с пивом не мешай...');
    } else {
    alert ('Так держать!');
    };