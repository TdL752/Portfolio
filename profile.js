const lightMode = document.getElementById("light");
const darkMode = document.getElementById("dark");
const root = document.documentElement;

lightMode.addEventListener("click", () => {
    root.style.backgroundColor = "white";
    root.style.color = "black";
});

darkMode.addEventListener("click", () => {
    root.style.backgroundColor = "black";
    root.style.color = "white";
});