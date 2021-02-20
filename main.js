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
const btn__home = document.querySelector('#btn__home');
const btn__about = document.querySelector('#btn__about');
const btn__skills = document.querySelector('#btn__skills');
const btn__work = document.querySelector('#btn__work');
const btn__test = document.querySelector('#btn__test');
const btn__contact = document.querySelector('#btn__contact');

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const testimonials = document.querySelector('#testimonials');
const contact = document.querySelector('#contact');

//이벤트 위임!
    const navbar__menu = document.querySelector('.navbar__menu');

    navbar__menu.addEventListener( 'click', (event)=> {

    const homeHeight = home.getBoundingClientRect().height -navbarHeight;
    const aboutHeight = homeHeight + about.getBoundingClientRect().height;
    const skillHeight = aboutHeight + skills.getBoundingClientRect().height;
    const workHeight = skillHeight + work.getBoundingClientRect().height;
    const testimonialsHeight = workHeight + skills.getBoundingClientRect().height;
    //위의 변수들을 전역변수로 설정하면 오류가 남-> 질문!

    if (event.target == btn__home) {
        window.scroll(0,0);
    } else if (event.target == btn__about) {
        window.scroll(0,homeHeight);
    } else if (event.target == btn__skills) {
        window.scroll(0,aboutHeight);
    } else if (event.target == btn__work) {
        window.scroll(0,skillHeight);
    } else if (event.target == btn__test) {
        window.scroll(0,workHeight);
    } else if (event.target == btn__contact) {
        window.scroll(0,testimonialsHeight);
    } 
});