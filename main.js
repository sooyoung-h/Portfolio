'use strict'

//1. make navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    if ( window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//2. menu click -> move 내 방식으로 했을 경우
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    //! 이벤트 위임 !
    // event.target은 실제 클릭된 애 (여기선 home, skills, work 등)
    // event.currentTarget은 이벤트가 걸려있는 element (여기선 navbarmenu)
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    const scrollTo = document.querySelector(link);
    //link는 #about이면 id가 about인 element를 찾음
    scrollTo.scrollIntoView({behavior:"smooth"});
});