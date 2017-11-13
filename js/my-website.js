var menuButton = document.querySelectorAll('.mobile-menu');
var navOverlay = document.querySelector('.nav-overlay');
var overlayVisible = false;

menuButton.forEach((oneButton) => {
  oneButton.onclick = function() {
    if (overlayVisible === false) {
      navOverlay.style.width = "100%";
      overlayVisible = true;
    } else {
      navOverlay.style.width = "0%";
      overlayVisible = false;
    }
    // console.log('sadf');
  }
})