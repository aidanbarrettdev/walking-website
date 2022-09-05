const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

const hamburgerToggle = () => {
  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-toggle");
    console.log("confirm");
  });
};
hamburgerToggle();
