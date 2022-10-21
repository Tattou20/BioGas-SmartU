const menuBtn = document.getElementById("mobile-links");
const exitBtn = document.getElementById("menu-exit");
const body = document.getElementById("body");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
  menu.classList.add("anime");
  menu.classList.remove("animeOut");
  body.style.overflow = "hidden";
  menuBtn.style.display = "none";
});

exitBtn.addEventListener("click", function () {
  menu.classList.add("animeOut");
  body.style.overflow = "auto";
  menuBtn.style.display = "block";

  setTimeout(function () {
    menu.classList.remove("anime");
  }, 500);
});
