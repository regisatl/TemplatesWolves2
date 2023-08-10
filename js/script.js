// script.js
window.addEventListener("DOMContentLoaded", () => {

    const headerRight = document.querySelector('.header-right');
    const toggleButton = document.querySelector('.toggle-button');
    const iconButton = document.querySelector('#icons');

    const copyrightElement = document.querySelector('#copyright').innerHTML = 'Highfive University';
    /*
    const copyrightElement = document.querySelector('#footer');
    const elementCreateP = document.createElement('p');

    copyrightElement.appendChild(elementCreateP);

    elementCreateP.classList.add('col-sm');
    elementCreateP.classList.add('fw-bold');
    elementCreateP.innerHTML = 'Copyright &copy;';

    const elementCreateSpan = document.createElement('span');
    elementCreateSpan.appendChild(elementCreateP);
    elementCreateSpan.id = 'displayYear';
    console.log(elementCreateSpan);
    elementCreateSpan.classList.add('date');
    elementCreateP.innerHTML = ' - Design create by: ';

    const elementLink = document.createElement('a');
    elementCreateP.appendChild(elementLink);
    elementLink.setAttribute('href', 'https://highfiveuniversity.bj');
    elementLink.setAttribute('rel', 'nofollow');
    elementLink.setAttribute('target', '_parent');
    elementLink.classList.add('link-footer');
    console.log(elementLink);

    */

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

    // Vérifie si le copyright a été modifié
    if (!(copyrightElement)) {
        // Affiche une alert
        alert("Le copyright a été modifié. Attention à la violation des droits d'auteur.");
        // Rend la page illisible 
        allBody.innerHTML = ' ';
    }

});

// to get current year
function getYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    document.getElementById("displayYear").innerHTML = currentYear;
}

getYear();



