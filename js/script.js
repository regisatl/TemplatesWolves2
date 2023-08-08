// script.js
window.addEventListener("DOMContentLoaded", () => {

    const headerRight = document.querySelector('.header-right');
    const toggleButton = document.querySelector('.toggle-button');
    const iconButton = document.querySelector('#icons');
    const copyright = document.querySelector('p.col-sm');
    console.log(copyright);
    const allBody = document.querySelector('body');

    toggleButton.addEventListener('click', () => {

        if (headerRight.style.display === "block") {

            headerRight.style.display = "none";
            iconButton.classList.add('fa-bars');
            iconButton.classList.remove('fa-close');

        } else {

            headerRight.style.display = "block";
            iconButton.classList.remove('fa-bars');
            iconButton.classList.add('fa-close');

        }
    });

    if (!copyright) {
        allBody.innerHTML = ' ';
    } 

});


