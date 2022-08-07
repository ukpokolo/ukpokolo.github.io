const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link-container');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        document.body.classList.add('fixed');
        document.body.classList.remove('fixed');
        

        //burger animation
        burger.classList.toggle('toggle');
    });


}

navSlide();

