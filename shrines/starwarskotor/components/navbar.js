/* FOR TOGGLING MENUS ON THE NAVBAR */
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__item");

/* Toggle mobile navMenu */
function toggleMenu() {
  if (navMenu.classList.contains("nav__active")) {
    navMenu.classList.remove("nav__active");
    navToggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    navMenu.classList.add("nav__active");
    navToggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("nav__submenu-active")) {
    this.classList.remove("nav__submenu-active");
  } else if (navMenu.querySelector(".nav__submenu-active")) {
    navMenu.querySelector(".nav__submenu-active").classList.remove("nav__submenu-active");
    this.classList.add("nav__submenu-active");
  } else {
    this.classList.add("nav__submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  if (navMenu.querySelector(".nav__submenu-active")) {
    let isClickInside = navMenu
      .querySelector(".nav__submenu-active")
      .contains(e.target);

    if (!isClickInside && navMenu.querySelector(".nav__submenu-active")) {
      navMenu.querySelector(".nav__submenu-active").classList.remove("nav__submenu-active");
    }
  }
}

/* Event Listeners */
navToggle.addEventListener("click", toggleMenu, false);
for (let item of navItems) {
  if (item.querySelector(".nav__submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);


/* FOR MAKING THE NAVBAR STICKY */
const header = document.querySelector("header");
const navbar = document.querySelector("nav");


window.addEventListener("scroll", e => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const stickyLine = header.scrollHeight - navbar.scrollHeight;
  if (scrollPos > stickyLine) {
      navbar.classList.add("sticky-nav");
  } else {
      navbar.classList.remove("sticky-nav");
  }
});