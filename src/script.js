// document.getElementById("menuToggle").addEventListener("click", function () {
//   const menu = document.getElementById("menu");
//   menu.classList.toggle("hidden");
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  });
});
