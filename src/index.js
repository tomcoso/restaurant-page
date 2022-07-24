import './style.css';
import generate from './generate.js';

generate.home();

const tabBtn = document.querySelectorAll('#tabs div');
tabBtn.forEach(each => each.addEventListener('click', function(event) {
    console.log(event.target.textContent)
    switch (event.target.textContent) {
        case 'Home' :
            generate.home();
            break;
        case 'Menu' :
            generate.menu();
            break;
        case 'Contact' :
            generate.contact();
            break;
    }
}))