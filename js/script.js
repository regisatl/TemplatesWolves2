// script.js
window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const headerRight = document.querySelector(".header-right");
    const toggleButton = document.createElement("div");
    toggleButton.classList.add("toggle-button");
    header.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        headerRight.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 780) {
            headerRight.classList.remove("active");
        }
    });
});
