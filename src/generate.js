import oatmeal from './oatmeal.png';
import falafel from './falafel-sandwich.png';
import cinnamon from './cinnamon-roll.png';
import coffee from './coffee-icon.png';
const generate = (function() {

    const _base = function() {
        // CONTENT
        const body = document.querySelector('body');

        if (!document.querySelector('#content')) {
        
            const content = document.createElement('div');
            content.id = 'content'
            body.appendChild(content);

            // HEADER SECTION
            const header = document.createElement('header');

            const title = document.createElement('div');
            title.id = 'title';
            const titleText = document.createElement('h1');
            titleText.textContent = 'Sin Azucar';
            title.append(titleText);

            const tabs = document.createElement('div');
            tabs.id = 'tabs';
            const tabHome = document.createElement('div');
            tabHome.textContent = 'Home';
            const tabMenu = document.createElement('div');
            tabMenu.textContent = 'Menu';
            const tabAbout = document.createElement('div');
            tabAbout.textContent = 'Contact';
            tabs.append(tabHome, tabMenu, tabAbout);

            header.append(title, tabs);
            content.append(header);
        }

        // MAIN (here it is passed to each tab)
        if (document.querySelector('main')) {
            console.log('test')
            const main = document.querySelectorAll('main div');
            main.forEach(each => each.remove());
        }
        else {
            const main = document.createElement('main');

            // FINAL APPEND
            content.append(main);
        }
        
    }

    const home = function() {
        _base();

        const main = document.querySelector('main');

        // display
        const display = document.createElement('div');
        display.classList.add('display');

        const displayText1 = document.createElement('div');
        displayText1.textContent = 'Stop with the sugar!';
        const displayText2 = document.createElement('div');
        displayText2.textContent = 'Come make your dreams reality.';
        display.append(displayText1, displayText2);

        // about panel
        const aboutPanel = document.createElement('div');
        aboutPanel.classList.add ('about-panel');

        const info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML = 'Sin Azucar is a space that offers a syncretism of industry and nature. Each of our vegan cafes is a space for dialogue and thought.<br>It is our dream to create a place where ideas and people can connect through conversation and wonder.'

        const image = document.createElement('div');
        image.classList.add('image');
        const img = document.createElement('img');
        img.src = coffee;
        img.alt = "Coffee Beans";
        image.append(img);

        aboutPanel.append(info, image);

        // final append
        main.append(display, aboutPanel);
    }

    const menu = function() {
        _base();
        const main = document.querySelector('main');

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        // Card
        function _createCard(name, desc, url) {
            

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('div');
            img.classList.add('item-img');
            img.setAttribute('style', 
                `background-image: url(${url}); background-size: 100%;`)

            const title = document.createElement('p');
            title.classList.add('title');
            title.textContent = name;

            const description = document.createElement('p');
            description.classList.add('desc');
            description.textContent = desc;

            card.append(img, title, description);

            wrapper.append(card);
        };

        _createCard('Coconut Oatmeal with Grilled Pear', 'Organic oats cooked with coconut milk and cinnamon, topped with poppy seeds, coconut flakes and a delicious grilled half pear.', oatmeal);
        _createCard('Cinnamon Roll', 'Delicious housemade cinnamon roll with our special touch of aniseed', cinnamon);
        _createCard('Falafel Sandwich', 'Morrocan falafel on house made organic rye bread, with grilled tomatoes and smoked pumpkin and paprika, topped with our vegan cream cheese', falafel);
        _createCard('Coconut Oatmeal with Grilled Pear', 'Organic oats cooked with coconut milk and cinnamon, topped with poppy seeds, coconut flakes and a delicious grilled half pear.', oatmeal);
        _createCard('Cinnamon Roll', 'Delicious housemade cinnamon roll with our special touch of aniseed', cinnamon);
        _createCard('Falafel Sandwich', 'Morrocan falafel on house made organic rye bread, with grilled tomatoes and smoked pumpkin and paprika, topped with our vegan cream cheese', falafel);

        main.append(wrapper);
    };


    return { home, menu };
})();

export default generate;