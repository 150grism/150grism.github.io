var menuButtons = document.querySelectorAll('.mobile-menu');
var navOverlay = document.querySelector('.nav-overlay');
var navWide = document.querySelector('.nav-wide');
var goToHireButton = document.querySelector('.go-to-hire');
var contactContainer = document.querySelector('.contact-container');
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

// goToHireButton.onclick = () => {
//   // console.log(contactContainer.offsetTop);
//   window.scrollBy({top: contactContainer.offsetTop - 62 - 50, left: 0, behavior: "smooth"});
// };

navLinks.forEach((b) => {
  b.onclick = () => {
    // console.log(b.dataset.destination);
    let destinationElement = document.getElementById(b.dataset.destination);
    let distanceToDestination = destinationElement.offsetTop - window.pageYOffset - 62;
    console.log(destinationElement.offsetTop);
    window.scrollBy({top: distanceToDestination - 50, left: 0, behavior: "smooth"});
    if (overlayVisible) {
      navOverlay.style.width = "0%";
      overlayVisible = false;
    }
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
};