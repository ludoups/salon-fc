const menuIcon = document.querySelector('.menu-icon');
const servicesSection = document.querySelector('.services');
const headerMobile = document.querySelector('.header--mobile');
const headerLogo = document.querySelector('.header__logo');

const mediaQuery = window.matchMedia("(min-width: 1024px)");

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const halfHeader = headerMobile.offsetHeight / 2;
    const top = servicesSection.offsetTop - halfHeader;

    function gestionHeaderMobile(){
        if (scrollY < top){
            // situation = "header dans accueil";
            headerLogo.style.display = 'none';
            headerMobile.style.justifyContent = "end";
            headerMobile.style.backgroundColor = "#f9f9fc00";
            menuIcon.style.color = '#f9f9fc';
            menuIcon.style.backgroundColor = '#f9f9fc00';
        }else if(scrollY >= top && scrollY < (top+100)){
            // situation = "header début services";
            headerLogo.style.display = 'flex';
            headerMobile.style.justifyContent = "space-between";
            headerMobile.style.backgroundColor = "#f9f9fc";
            menuIcon.style.color = '#262626';
            menuIcon.style.backgroundColor = '#f9f9fc';
            document.querySelector('.logo-coeur').src = "/medias/logo - coeur - pour svg.svg";
            document.querySelector('.nom-salon--header').style.color = "#262626";
        }else if(scrollY >= (top+50)){
            // situation = "header courant";
            headerLogo.style.display = 'none';
            headerMobile.style.justifyContent = "end";
            headerMobile.style.backgroundColor = "#f9f9fc00";
            menuIcon.style.color = '#262626';
            menuIcon.style.backgroundColor = '#f9f9fc';
        }
    }

    function gestionHeaderDesktop(){
        if (scrollY < top){
            // situation = "header dans accueil";
            headerLogo.style.display = 'flex';
            headerMobile.style.justifyContent = "space-between";
            document.querySelector('.logo-coeur').src = "/medias/logo - coeur blanc - pour svg.svg";

            const itemMenu = document.querySelectorAll('.item-menu');

            itemMenu.forEach((element) => {
                // console.log(element);
                element.style.color = "#f9f9fc";
            });

            headerMobile.style.backgroundColor = "#f9f9fc00";
            document.querySelector('.nom-salon--header').style.color = "#f9f9fc";
        }else{
            const itemMenu = document.querySelectorAll('.item-menu');

            itemMenu.forEach((element) => {
                // console.log(element);
                element.style.color = "#262626";
            });

            headerMobile.style.backgroundColor = "#f9f9fc";
            document.querySelector('.logo-coeur').src = "/medias/logo - coeur - pour svg.svg";
            document.querySelector('.nom-salon--header').style.color = "#262626";
        }
    }

    function handleViewportChange(e) {
        if (e.matches) {
            // console.log("Passage en vue desktop");
            gestionHeaderDesktop();
            
        } else {
            // console.log("Retour en vue mobile");
            gestionHeaderMobile();
            

        // console.log("Retour en vue mobile");
        // headerLogo.style.display = 'none';
        // headerMobile.style.justifyContent = "end";
        // document.querySelector('.logo-coeur').src = "/medias/logo - coeur - pour svg.svg";
    }
    }

    // Exécute une première fois
    handleViewportChange(mediaQuery);

    // Ajoute un écouteur pour détecter les changements
    mediaQuery.addEventListener("change", handleViewportChange);

    // console.log("scrollY : "+scrollY);
    // console.log("top "+top);

        // let situation;

        // if (scrollY < top){
        //     // situation = "header dans accueil";
        //     headerLogo.style.display = 'none';
        //     headerMobile.style.justifyContent = "end";
        //     headerMobile.style.backgroundColor = "#f9f9fc00";
        //     menuIcon.style.color = '#f9f9fc';
        //     menuIcon.style.backgroundColor = '#f9f9fc00';
        // }else if(scrollY >= top && scrollY < (top+100)){
        //     // situation = "header début services";
        //     headerLogo.style.display = 'flex';
        //     headerMobile.style.justifyContent = "space-between";
        //     headerMobile.style.backgroundColor = "#f9f9fc";
        //     menuIcon.style.color = '#262626';
        //     menuIcon.style.backgroundColor = '#f9f9fc';
        // }else if(scrollY >= (top+50)){
        //     // situation = "header courant";
        //     headerLogo.style.display = 'none';
        //     headerMobile.style.justifyContent = "end";
        //     headerMobile.style.backgroundColor = "#f9f9fc00";
        //     menuIcon.style.color = '#262626';
        //     menuIcon.style.backgroundColor = '#f9f9fc';
        // }

        // console.log(situation);
});

/***********************************************************/

// const mediaQuery = window.matchMedia("(min-width: 1024px)");

// function handleViewportChange(e) {
//   if (e.matches) {
//     console.log("Passage en vue desktop");
//     // ici tu peux changer le texte, le menu, les images...
//     headerLogo.style.display = 'flex';
//     headerMobile.style.justifyContent = "space-between";
//     document.querySelector('.logo-coeur').src = "/medias/logo - coeur blanc - pour svg.svg";
//     // document.querySelector('.item-menu').color = "blue";
//   } else {
//     console.log("Retour en vue mobile");
//     headerLogo.style.display = 'none';
//     headerMobile.style.justifyContent = "end";
//     document.querySelector('.logo-coeur').src = "/medias/logo - coeur - pour svg.svg";
//   }
// }

// // Exécute une première fois
// handleViewportChange(mediaQuery);

// // Ajoute un écouteur pour détecter les changements
// mediaQuery.addEventListener("change", handleViewportChange);

/***********************************************************/

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

function mettreAJourTexteResponsive() {
  const span1 = document.getElementById("texteResponsive1");
  const span2 = document.getElementById("texteResponsive2");


  if (window.innerWidth >= 1024) {
    span1.textContent = "Coiffure";
  } else {
    span1.textContent = "Family";
  }

  if (window.innerWidth >= 1024) {
    span2.textContent = "Family";
  } else {
    span2.textContent = "Coiffure";
  }
}

// Met à jour au chargement
mettreAJourTexteResponsive();

// Met à jour si la fenêtre est redimensionnée
window.addEventListener("resize", mettreAJourTexteResponsive);