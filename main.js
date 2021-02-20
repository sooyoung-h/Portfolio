"use strict";

//1. make navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//2. menu click -> move 내 방식으로 했을 경우
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  //! 이벤트 위임 !
  // event.target은 실제 클릭된 애 (여기선 home, skills, work 등)
  // event.currentTarget은 이벤트가 걸려있는 element (여기선 navbarmenu)
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoSelector(link);
});

const home = document.querySelector("#home");
home.addEventListener("click", (e) => {
  const link = e.target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoSelector(link);
});

//반복되는 코드 함수화
function scrollIntoSelector(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//3. scroll할 때 home을 투명하게
//질문 : 전역변수로 하면 클래스 home__container의 height가 계속 달라짐
//해결 1) 함수 안에서 변수 정의 (지역변수)

document.addEventListener("scroll", () => {
  const homeContainer = document.querySelector("#home__container");
  const homeContainer__Height = homeContainer.getBoundingClientRect().height;

  if (window.scrollY > 0) {
    homeContainer.style.opacity = 1 - window.scrollY / homeContainer__Height;
  } else if (window.scrollY == 0) {
    homeContainer.style.opacity = 1;
  }
});

//4. Arrow Up BTN - class 사용, opacity(애니매이션 위해)
const arrowBtn = document.querySelector(".arrowBtn");
document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    arrowBtn.classList.add("visible");
  } else if (window.scrollY == 0) {
    arrowBtn.classList.remove("visible");
  }
});

arrowBtn.addEventListener("click", () => {
  home.scrollIntoView({ bahavior: "smooth" });
});

//5. Project filtering & animation
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  const selected = document.querySelector(".category__btn.selected");
  selected.classList.remove("selected"); //기존의 selected 클래스 찾아서 지우기
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("selected"); //클릭된 애는 selected 클래스 더해주기

  projectContainer.classList.add("anim-out");
  //0.3초 이후에 필터링 되어서 보여줌 (애니매이션 적용은 이미 된 상태->)
  //이렇게 분리하지 않으면 필터링 + anim-out클래스가 동시에 적용되어서 필터되면서 애니매이션이 적용되어서 어색함
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

//6. button state ACTIVE
