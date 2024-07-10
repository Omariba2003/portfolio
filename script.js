/** ======================= NAV TOGGLE ========================= */
// toggle navbar
var nav_toggler = document.querySelector(".nav_toggler");
var nav_toggler_menu = document.querySelector(".nav_toggler_menu");

nav_toggler.addEventListener("click", () => {
    nav_toggler_menu.classList.toggle("nav_toggler_close");
});

// active link
const linkNav = document.querySelectorAll('.nav_li')

function active() {
  if (linkNav) {
    linkNav.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    // Close the menu after clicking a link (optional)
    nav_toggler_menu.classList.add('nav_toggler_close');
  }
}

linkNav.forEach(l => l.addEventListener('click', active));
