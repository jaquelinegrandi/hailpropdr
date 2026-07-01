// ===============================
// MOBILE MENU
// ===============================

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

const aboutToggle = document.getElementById("about-toggle");
const aboutBack = document.getElementById("about-back");
const aboutDropdown = document.getElementById("about-dropdown");

// ===============================
// ABRIR MENÚ
// ===============================

if (openMenu && closeMenu && navMenu) {

    openMenu.addEventListener("click", function () {
        navMenu.classList.add("visible");
        openMenu.classList.add("hide");
        closeMenu.style.display = "block";
    });

    closeMenu.addEventListener("click", function () {
        navMenu.classList.remove("visible");
        openMenu.classList.remove("hide");
        closeMenu.style.display = "none";

        if (aboutDropdown) {
            aboutDropdown.classList.remove("active");
        }

    });

}

// ===============================
// SUBMENÚ ABOUT
// ===============================

if (aboutToggle && aboutBack && aboutDropdown) {

    // Abrir submenú
    aboutToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        aboutDropdown.classList.add("active");
    });

    // Volver atrás
    aboutBack.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        aboutDropdown.classList.remove("active");
    });

}