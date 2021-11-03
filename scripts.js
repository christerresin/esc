// Using DOM API to select elements
const navbar = document.querySelector('.navbar');
const dropDownMenu = document.querySelector('.dropDownMenu')
const menuExitBtn = document.querySelector('.exitBtnLink')

// Event listeners
menuExitBtn.addEventListener('click', () => {
    console.log('clicked')
})
 
// Render desktop menu
const menuEl = document.createElement('ul');
menuEl.classList.add('menu');
const menuItems = ['Play Online', 'Play on-site', 'The story', 'Contact Us'];

    // Looping over all menu items creating li's, appending ul
    menuItems.forEach((item) => {
        const menuLinkEl = document.createElement('li');
        menuLinkEl.innerText = item;
        menuEl.appendChild(menuLinkEl);
    })

navbar.append(menuEl);

// Render monile menu
const mobileMenuEl = document.createElement('ul');
mobileMenuEl.classList.add('mobileMenu');

    // Looping over all menu items creating li's, appending ul
    menuItems.forEach((item) => {
        const menuLinkEl = document.createElement('li');
        menuLinkEl.innerText = item;
        mobileMenuEl.appendChild(menuLinkEl);
    })

dropDownMenu.append(mobileMenuEl);    


const showHideMenu = function() {
    console.log('clicked')
}
