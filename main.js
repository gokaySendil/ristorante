// const primaryHeader = document.querySelector(".primary-header");
// const navToggle = document.querySelector(".mobile-nav-toggle");
// const primaryNav = document.querySelector(".primary-navigation");
// const navLinks = document.querySelectorAll(".anchor-nav");

// navToggle.addEventListener("click", () => {
//   primaryNav.hasAttribute("data-visible")
//     ? navToggle.setAttribute("aria-expanded", false)
//     : navToggle.setAttribute("aria-expanded", true);
//   primaryNav.toggleAttribute("data-visible");
//   if (primaryNav.hasAttribute("data-visible")) {
//     navToggle.classList.add("active");
//     document.body.style.overflowY = "hidden";
//   } else {
//     navToggle.classList.remove("active");
//     document.body.style.overflowY = "visible";
//   }
//   primaryHeader.toggleAttribute("data-overlay");
// });
// const resetLinks = () => {
//   navLinks.forEach((element) => {
//     element.classList.remove("active-nav");
//   });
// };
// const activateLink = (link) => {
//   navLinks.forEach((element) => {
//     if (element.innerHTML === link) {
//       element.classList.add("active-nav");
//     }
//   });
// };
// const selectNavLink = () => {
//   var path = window.location.pathname;
//   // Get the current html file
//   var page = path.split("/").pop();
//   console.log(page);
//   // Add active-nav class to current active page's navbar link
//   switch (page) {
//     case "about.html":
//       activateLink("About");
//       break;
//     case "gallery.html":
//       activateLink("Gallery");
//       break;
//     case "contact.html":
//       activateLink("Contact");
//       break;
//     case "index.html":
//       resetLinks();
//       break;
//   }
// };
// selectNavLink();
const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
})