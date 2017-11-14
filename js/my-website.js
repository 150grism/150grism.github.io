var menuButton = document.querySelectorAll('.mobile-menu');
var navOverlay = document.querySelector('.nav-overlay');
var navContainer = document.querySelector('.nav-container');
var navWide = document.querySelector('.nav-wide');
var overlayVisible = false;

menuButton.forEach((oneButton) => {
  oneButton.onclick = () => {
    if (overlayVisible === false) {
      navOverlay.style.width = "100%";
      overlayVisible = true;
    } else {
      navOverlay.style.width = "0%";
      overlayVisible = false;
    }
    // console.log('sadf');
  }
});

console.log(window.scrollY);

window.onscroll = () => {
  if (window.scrollY > 0) {
    navWide.classList.add('nav-scroll');
    navOverlay.firstElementChild.style.margin = "20.5px 29px 25px 31px";
  } else {
    navWide.classList.remove('nav-scroll');
    navOverlay.firstElementChild.style.margin = "31px 30px 25px 30px";
  }
}