const primaryNav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelector(".nav-list li");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", false)
    };

    navLinks.forEach((link, index) => {
        console.log(index);
    });
    
}) 

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-list');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//     });
// }