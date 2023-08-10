// script.js
window.addEventListener("DOMContentLoaded", () => {

    const headerRight = document.querySelector('.header-right');
    const toggleButton = document.querySelector('.toggle-button');
    const iconButton = document.querySelector('#icons');

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


    const copyrightElement = document.querySelector('#footer');

    copyrightElement.innerHTML = " <p class='col-sm fw-bold'> Copyright &copy; <span class='date'>2023</span> - Design create by: <a rel='nofollow' href='https://highfiveuniversity.bj' class='link-footer' target='_parent' id='copyright'>Highfive University</a></p>";

    const allBody = document.querySelector('body');

    // Vérifie si le copyright a été modifié
    if (!(copyrightElement)) {
        // Affiche une alert
        alert("Le copyright a été modifié. Attention à la violation des droits d'auteur.");
        // Rend la page illisible 
        allBody.innerHTML = ' ';
    }

});





