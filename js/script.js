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

    // Récupérer l'élément contenant l'année de copyright
    const copyrightYearElement = document.querySelector('.tm-current-year');

    // Récupérer l'année actuelle
    const currentYear = new Date().getFullYear();

    // Vérifier si le copyright a été modifié
    if (copyrightYearElement.textContent.trim() !== currentYear.toString()) {
        console.warn("Le copyright a été modifié. Attention à la violation des droits d'auteur.");

        // Optionnel : Rendre la page illisible en ajoutant une classe CSS pour masquer le contenu
        document.body.classList.add('page-illegible');
    }

});


