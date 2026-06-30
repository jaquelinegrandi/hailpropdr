// ===============================
// MOBILE MENU
// ===============================

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

openMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
    openMenu.classList.add("hide");
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
    openMenu.classList.remove("hide");
    closeMenu.style.display = "none";

    aboutDropdown.classList.remove("active");
});


// ===============================
// ABOUT US SUBMENU
// ===============================

const aboutToggle = document.getElementById("about-toggle");
const aboutBack = document.getElementById("about-back");
const aboutDropdown = document.getElementById("about-dropdown");

aboutToggle.addEventListener("click", (e) => {
    e.preventDefault();
    aboutDropdown.classList.add("active");
});

aboutBack.addEventListener("click", () => {
    aboutDropdown.classList.remove("active");
});