/* SCRIPT FOR THE NAVIGATION BAR */

// When the user scrolls the page, execute stickyFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav");
  }
}


/* SCRIPT FOR THE FOOTER */

// Generate footer content
var footerHTML = `
  This shrine is made with ♥ by <a href="/home.html">Leilukin</a>
`;
document.querySelector("#footer").innerHTML = footerHTML;