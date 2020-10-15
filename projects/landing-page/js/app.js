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
 * Define Global  iables
 * 
*/

const myNavigation = []
const h2Elements = document.getElementsByTagName("h2")

for (let i = 0; i < h2Elements.length; i++) {
    myNavigation.push(h2Elements[i].innerText)
}

const navList = document.querySelector('#navbar__list');
for (let i=0; i < myNavigation.length; i++) {
    const anchor = document.createElement('a');
    anchor.href = '#section' + (i+1);
    anchor.innerText = myNavigation[i];

    const section = document.createElement('li');
    section.appendChild(anchor);
    navList.appendChild(section);
}

// let active = document.querySelector('.active');

// active.addEventListener('mouseenter', function( event ) {
//     event.style.color = 'yellow';
// });

// active.addEventListener('mouseout', function( event ) {
//     event.style.color = '';
// });

const section_highlighted = document.getElementsByClassName('active');
for (let i = 0; i < section_highlighted.length; i++) {
    let section = section_highlighted[i]

    section.addEventListener('mouseover', function() {
        section.className = 'active-highlighted'
    });
        
    section.addEventListener('mouseout', function() {
        section.className = 'active'  
    });
}  

/* Back to top button */
myButton = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function buttonFunction() {
    document.documentElement.scrollTop = 0;
}



// const mouseEvent = document.querySelector('body');
//     document.body.addEventListener('mouseover', function() {
//         console.log('This section is being viewed');
//         mouseEvent.setAttribute('style', 'color: red; font-size: 2em;');
//     });
    


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// for (let i = 1; i <= h2Elements.length; i++) {
//     let section = document.getElementById(`section${i}`)

//     section.addEventListener('mouseover', function( event ) {
//         section.className = 'active_highlighted'
//         // console.log(event)
//         // event.target.style.color = 'purple';
//         // setTimeout(function() {
//         //     event.target.style.color = '';
//         // }, 500);
//     }, false);
    
//     section.addEventListener('mouseout', function( event ) {
//         section.className = 'active'
//         // console.log(event)
//         // event.target.style.color = 'purple';
//         // setTimeout(function() {
//         //     event.target.style.color = '';
//         // }, 500);
//     }, false);
// }