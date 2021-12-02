const body = document.querySelector('body')
const header = document.getElementById("header");
const overlay = document.getElementById("overlay");
const btnHamburger = document.getElementById("btnHamburger");
const fadeEls = document.querySelectorAll(".has-fade");

// this is so stupid
window.onresize = () => {
  if(window.innerWidth > 1024) {
    body.classList.remove('no-scroll')
  }
};


btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove('no-scroll')  
    header.classList.remove("open");
    fadeEls.forEach((fadeEl) => {
      fadeEl.classList.add("fade-out");
      fadeEl.classList.remove("fade-in");
    });
  } else {
    body.classList.add('no-scroll')  
    header.classList.add("open");
    fadeEls.forEach((fadeEl) => {
      fadeEl.classList.add("fade-in");
      fadeEl.classList.remove("fade-out");
    });
  }
});

overlay.addEventListener('click', () => {
    header.classList.remove("open");
    fadeEls.forEach((fadeEl) => {
      fadeEl.classList.add("fade-out");
      fadeEl.classList.remove("fade-in");
    });
})