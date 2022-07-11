const primaryNav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", false)
    }
}) 