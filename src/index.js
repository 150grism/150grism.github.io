import './css/style.scss'
var menuButtons = document.querySelectorAll('.mobile-menu');
var navOverlay = document.querySelector('.nav-overlay');
var navWide = document.querySelector('.nav-wide');
var navLinks = document.querySelectorAll('.nav-link');
var overlayVisible = false;

menuButtons.forEach((b) => {
  b.onclick = () => {
    if (overlayVisible === false) {
      navOverlay.style.width = "100%";
      overlayVisible = true;
    } else {
      navOverlay.style.width = "0%";
      overlayVisible = false;
    }
  }
});

navLinks.forEach((b) => {
  b.onclick = () => {
    let destinationElement = document.getElementById(b.dataset.destination);
    let distanceToDestination = destinationElement.offsetTop - window.pageYOffset - 62;
    if (overlayVisible) {
      navOverlay.style.width = "0%";
      overlayVisible = false;
    }
    if (typeof window.scrollBy === 'function' && window.scrollBy) {
      window.scrollBy({top: distanceToDestination + 30, left: 0, behavior: "smooth"});
    } else {
      window.scrollBy(0, distanceToDestination + 30);
    }
  }
});

window.onscroll = () => {
  if (window.scrollY > 0) {
    navWide.classList.add('nav-scroll');
    navOverlay.firstElementChild.style.margin = "20.5px 29px 25px 31px";
  } else {
    navWide.classList.remove('nav-scroll');
    navOverlay.firstElementChild.style.margin = "31px 30px 25px 30px";
  }
};