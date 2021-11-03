// Using DOM API to select elements
const navbar = document.querySelector('.navbar');
const dropDownMenu = document.querySelector('.dropDownMenu')
 
const createMenu = function(el){
    let isMobile;

    if (el === navbar) {
        isMobile = false; 
    } else {
        isMobile = true;
    }

    const menuEl = document.createElement('ul');
    menuEl.classList.add(isMobile? 'mobileMenu' : 'menu');
    const menuItems = ['Play Online', 'Play on-site', 'The story', 'Contact Us'];

    // Looping over all menu items creating li's, appending ul
    menuItems.forEach((item) => {
        const menuLinkEl = document.createElement('li');
        menuLinkEl.innerText = item;
        menuEl.appendChild(menuLinkEl);
    })

    el.append(menuEl)
}

createMenu(navbar);
createMenu(dropDownMenu)