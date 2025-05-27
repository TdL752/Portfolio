const lightMode = document.getElementById("light");
const darkMode = document.getElementById("dark");
const root = document.documentElement;
const navMenu = document.getElementById("collapsed-nav-menu");
const navBtn = document.getElementById("nav-menu-btn");

lightMode.addEventListener("click", () => {
    root.style.backgroundColor = "white";
    root.style.color = "black";
});

darkMode.addEventListener("click", () => {
    root.style.backgroundColor = "black";
    root.style.color = "white";
});

navBtn.addEventListener("click", () => {
    if(navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navMenu.classList.add("hidden");
    } else {
        navMenu.classList.remove("hidden");
        navMenu.classList.add("active");
    }
})