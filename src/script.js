// document.getElementById("menuToggle").addEventListener("click", function () {
//   const menu = document.getElementById("menu");
//   menu.classList.toggle("hidden");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menuToggle");

//   menuToggle.addEventListener("click", function () {
//     const menu = document.getElementById("menu");
//     menu.classList.toggle("hidden");
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const menu = document.getElementById("menu");
//   const menuToggle = document.getElementById("menu-toggle");
//   menuToggle.addEventListener("click", function () {
//     menu.classList.toggle("hidden");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get the menu and the toggle button elements
  const menu = document.getElementById("menu");
  const menuToggle = document.getElementById("menu-toggle");

  // Toggle the 'hidden' class on menu when the toggle button is clicked
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
