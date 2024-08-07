// JavaScript para el menú de navegación
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", () => {
    if (menuList.classList.contains("js-menu-hide")) {
        menuIcon.innerText = "X";
        menuList.classList.remove("js-menu-hide");
    } else {
        menuIcon.innerText = "|||";
        menuList.classList.add("js-menu-hide");
    }
});

menuIcon.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        menuIcon.click();
    }
});
