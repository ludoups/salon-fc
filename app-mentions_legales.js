const menuIcon = document.querySelector('.menu-icon');
const servicesSection = document.querySelector('.services');
const headerMobile = document.querySelector('.header--mobile');
const headerLogo = document.querySelector('.header__logo');

const mediaQuery = window.matchMedia("(min-width: 1024px)");

headerLogo.style.display = 'flex';
headerMobile.style.justifyContent = "space-between";

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    function gestionHeaderMobile(){
        // console.log("MOBILE");
        if (scrollY <= 55) {
        headerLogo.style.display = 'flex';
        headerMobile.style.justifyContent = "space-between";
        headerMobile.style.backgroundColor = "#262626ff";
        menuIcon.style.backgroundColor = "#26262600";
        } else {
            headerLogo.style.display = 'none';
            headerMobile.style.justifyContent = "right";
            headerMobile.style.backgroundColor = "#26262600";
            menuIcon.style.backgroundColor = "#262626ff";
        }
    }

    function gestionHeaderDesktop(){
        headerMobile.style.backgroundColor = "#262626";
        headerLogo.style.display = 'flex';
        headerMobile.style.justifyContent = "space-between";
    }

    /*****************/
    
    function handleViewportChange(e) {
        if (e.matches) {
            gestionHeaderDesktop();
            
        } else {
            gestionHeaderMobile();
        }
    }

    // Exécute une première fois
    handleViewportChange(mediaQuery);

    // Ajoute un écouteur pour détecter les changements
    mediaQuery.addEventListener("change", handleViewportChange);


});

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Fermer le menu quand on clique sur un lien du menu
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Si c'est un lien vers la même page avec une ancre (ex: index.html#ancre-services ou juste #ancre-services)
        // if (href.includes('#') && (href.startsWith('#') || href.startsWith('index.html#'))) {
        //     menu.classList.remove('active');
        // }
        menu.classList.remove('active');
    });
})