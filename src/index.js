// ALL CREATED ELEMENTS
// The purpose of this project was to make a website using little html and manipulating dom elements
const content = document.querySelector('#content')
const bigParent = document.querySelector('#parent')
const createHeader = document.createElement('div')
const nav = document.createElement('div')
const about = document.createElement('div')
const home = document.createElement('div')
const menu = document.createElement('div')
const contact = document.createElement('div')
const parent = document.createElement('div')
const firstItem = document.createElement('div')
const secondItem = document.createElement('div')
const thirdItem = document.createElement('div')
const fourthItem = document.createElement('div')
const firstImg = document.createElement('img');
const secondImg = document.createElement('img');
const thirdImg = document.createElement('img');
const fourthImg = document.createElement('img');

function pageLoad() {
    createHeader.classList.add('header')
    createHeader.textContent = 'Our Restaurant';
    content.appendChild(createHeader)

    nav.classList.add('nav')
    content.appendChild(nav)

    home.classList.add('navItems')
    menu.classList.add('navItems')
    contact.classList.add('navItems')

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    about.classList.add('about')
    about.textContent = "This restaurant doesn't exist but I make a mean frozen pizza. \nClick on menu to see our totally real menu. \n Our Hours \nMonday: No \nTuesday: Never\nWednesday: Absolutely Not\nThursday: Think again\nFriday: You tell me\nSaturday: Are you seeing a pattern?\nSunday: Still not real";
    content.appendChild(about)
}

pageLoad()

function loadMenu(){
    content.removeChild(about)
    parent.classList.add('parent')
    firstItem.classList.add('items')
    secondItem.classList.add('items')
    thirdItem.classList.add('items')
    fourthItem.classList.add('items')

    bigParent.appendChild(parent)
    parent.appendChild(firstItem)
    parent.appendChild(secondItem)
    parent.appendChild(thirdItem)
    parent.appendChild(fourthItem)

    firstImg.classList.add('imgs')
    secondImg.classList.add('imgs')
    thirdImg.classList.add('imgs')
    fourthImg.classList.add('imgs')

    firstImg.src = 'https://cdn-icons.flaticon.com/png/512/2454/premium/2454219.png?token=exp=1646679184~hmac=49698d745567c2ccd1fde613e0cf902c';
    secondImg.src = 'https://cdn-icons-png.flaticon.com/512/2094/2094661.png';
    thirdImg.src = 'https://cdn-icons.flaticon.com/png/512/792/premium/792805.png?token=exp=1646679184~hmac=3b2675ac083bbfe4c1f0fedb978c0e40';
    fourthImg.src = 'https://cdn-icons-png.flaticon.com/512/6989/6989539.png';
    
    firstItem.appendChild(firstImg)
    secondItem.appendChild(secondImg)
    thirdItem.appendChild(thirdImg)
    fourthItem.appendChild(fourthImg)
}

home.addEventListener('click', function(){
    // removing everything so nothing duplicates
    createHeader.remove()
    nav.remove()
    home.remove()
    menu.remove()
    contact.remove()
    firstItem.remove()
    secondItem.remove()
    thirdItem.remove()
    fourthItem.remove()
    firstImg.remove()
    secondImg.remove()
    thirdImg.remove()
    fourthImg.remove()
    pageLoad()
})

menu.addEventListener('click', loadMenu)