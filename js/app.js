/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global variables
 *
 */
const myNavigation = []
const h2Elements = document.getElementsByTagName('h2');
const navList = document.querySelector('#navbar__list');
let collapse = document.getElementsByClassName('collapsible');
const section_highlighted = document.getElementsByClassName('active');
const myButton = document.getElementById('topButton');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * @description Sets the back-to-top button's display style to 'block' so that the button is visible when the user scrolls below the fold of the page.
 */
function scrollFunction() {
    myButton.style.display = (document.documentElement.scrollTop > 20) ? 'block' : 'none';
}

/**
 * @description Sets the scrollTop property if the root element so that the page is scrolled back to the top.
 * PS: eslint has been disabled for the function definition because it is not used in this file. The function
 * is called in index.html
 */
// eslint-disable-next-line no-unused-vars
function buttonFunction() {
    document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Events
 *
*/

// Add the titles of the sections to the myNavigation array
for (let i = 0; i < h2Elements.length; i++) {
    myNavigation.push(h2Elements[i].innerText);
}

// Use the myNavigation array to build the navigation bar using the title of the sections
for (let i=0; i < myNavigation.length; i++) {
    const anchor = document.createElement('a');
    anchor.innerText = myNavigation[i];

    const section = document.createElement('li');
    section.id = `li__section${i+1}`;
    section.appendChild(anchor);
    navList.appendChild(section);

    // Scroll to selected section from the Navigation Bar when clicked
    anchor.addEventListener('click', () => {
        const elementPosition = h2Elements[i].getBoundingClientRect().top;
        const navSize = document.getElementById('navbar__list').clientHeight;

        window.scrollBy(0, elementPosition - navSize);
    });

    // Scroll to selected section from the Navigation Bar when clicked
    section.addEventListener('click', () => {
        const elementPosition = h2Elements[i].getBoundingClientRect().top;
        const navSize = document.getElementById('navbar__list').clientHeight;

        window.scrollBy(0, elementPosition - navSize);
    });
}

// Set up an event listener to expand or collapse a section when clicked.
for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function() {
        this.classList.toggle('activeSection');
        let text = this.nextElementSibling;

        text.style.display = (text.style.display === 'block') ? 'none' : 'block';
    });
}

// Set up event listeners to highlight sections and corresponding navigation items when the user hovers over the section.
for (let i = 0; i < section_highlighted.length; i++) {
    let section = section_highlighted[i];
    const navItem = document.getElementById(`li__section${i+1}`);

    section.addEventListener('mouseover', () => {
        navItem.className = 'active-highlighted';
        section.className = 'active-highlighted';
    });

    section.addEventListener('mouseout', () => {
        navItem.className = '';
        section.className = 'active';
    });
}

// Set up function to be called when user starts scrolling
window.onscroll = scrollFunction;

/**
 * End Events
*/