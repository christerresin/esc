const navbar = document.querySelector('.navbar');
 
const createMenu = function(){
    const menuEl = document.createElement('ul');
    menuEl.classList.add('menu');
    const menuItems = ['Play Online', 'Play on-site', 'The story', 'Contact Us'];

    menuItems.forEach((item) => {
        const menuLinkEl = document.createElement('li');
        menuLinkEl.innerText = item;
        menuEl.appendChild(menuLinkEl);
    })

    navbar.append(menuEl)

}

createMenu();