const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //burger animation
        burger.classList.toggle('toggle');
    });


}

navSlide();