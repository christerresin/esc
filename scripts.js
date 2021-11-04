// Using DOM API to select elements
const body = document.querySelector('body');
const header = document.querySelector('.header')
const dropDownMenu = document.querySelector('.dropDownMenu');
const dropDownMenuBtn = document.querySelector('.menu-btn');
const layer = document.querySelector('#layer')
const menuExitBtn = document.querySelector('.exitBtnLink');
const navbar = document.querySelector('.navbar');


// Event listeners
menuExitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownMenu.setAttribute('style', 'display: none');
    layer.classList.remove('layer')
})

dropDownMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownMenu.style.setProperty('display', 'flex');
    layer.classList.add('layer')
})

// Placeholder listener to close menu when clicked
dropDownMenu.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownMenu.setAttribute('style', 'display: none');
    layer.classList.remove('layer')
})



// Render menus
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

    el.append(menuEl);
}

// Render
createMenu(navbar);
createMenu(dropDownMenu)

