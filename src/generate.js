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

    const contact = function() {
        _base();
        
        const main = document.querySelector('main');

        const contactWrapper = document.createElement('div');
        contactWrapper.classList.add('contact-wrapper');
        
        const info = document.createElement('div');
        info.classList.add('info');

        const address = document.createElement('div');
        const addTitle = document.createElement('span');
        addTitle.textContent = 'Address:';
        const addInfo = document.createElement('span');
        addInfo.textContent = 'Av. 9 de Julio s/n, C1043 CABA, Argentina';
        address.append(addTitle, addInfo);

        const email = document.createElement('div');
        const emTitle = document.createElement('span');
        emTitle.textContent = 'Email:';
        const emInfo = document.createElement('span');
        emInfo.textContent = 'sinazucar0@nomail.com';
        email.append(emTitle, emInfo);

        const phone = document.createElement('div');
        const phTitle = document.createElement('span');
        phTitle.textContent = 'Phone number:';
        const phInfo = document.createElement('span');
        phInfo.textContent = '(+123) 000 1234';
        phone.append(phTitle, phInfo);

        const time = document.createElement('div');
        const timeTitle = document.createElement('span');
        timeTitle.textContent = 'Opening times:';
        const timeInfo = document.createElement('span');
        timeInfo.innerHTML = 'Monday-Thursday: 10am-11pm<br>Friday-Sunday: 9am-12pm';
        time.append(timeTitle, timeInfo);

        info.append(address, email, time, phone);

        const mapWrap = document.createElement('div');
        mapWrap.classList.add('iframe');
        const map = document.createElement('iframe');
        map.setAttribute('width', '100%');
        map.setAttribute('height', '100%');
        map.setAttribute('frameborder', "0");
        map.setAttribute('style',"border:0");
        map.setAttribute('referrerpolicy', "no-referrer-when-downgrade");
        map.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167132768415!2d-58.383759085114846!3d-34.603738880459595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2ses!4v1658933736418!5m2!1sen!2ses");
        map.setAttribute('loading',"lazy");
        mapWrap.append(map);

        contactWrapper.append(info, mapWrap);

        main.append(contactWrapper);
    }


    return { home, menu, contact };
})();

export default generate;