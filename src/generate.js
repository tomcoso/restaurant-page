const generate = (function() {

    const _base = function() {
        // CONTENT
        const body = document.querySelector('body');
        const content = document.createElement('div');
        content.id = 'content'
        body.append(content);

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
        tabAbout.textContent = 'About';
        tabs.append(tabHome, tabMenu, tabAbout);

        header.append(title, tabs);

        // MAIN (here it is passed to each tab)
        const main = document.createElement('main');

        // FINAL APPEND
        content.append(header, main);
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
        img.src = "../src/coffee-icon.png";
        img.alt = "Coffee Beans";
        image.append(img);

        aboutPanel.append(info, image);

        // final append
        main.append(display, aboutPanel);

    }


    return { home };
})();

export default generate;