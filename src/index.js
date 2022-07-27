import './style.css';
import generate from './generate.js';

generate.menu();

const tabBtn = document.querySelectorAll('#tabs div');
tabBtn.forEach(each => {if (each.textContent === 'Menu') {each.classList.add('current')}})
tabBtn.forEach(each => each.addEventListener('click', function(event) {
    console.log(event.target.textContent)
    switch (event.target.textContent) {
        case 'Home' :
            generate.home();
            tabBtn.forEach(each => each.classList.remove('current'));
            each.classList.add('current');
            break;
        case 'Menu' :
            generate.menu();
            tabBtn.forEach(each => each.classList.remove('current'));
            each.classList.add('current');
            break;
        case 'Contact' :
            generate.contact();
            tabBtn.forEach(each => each.classList.remove('current'));
            each.classList.add('current');
            break;
    }
}))