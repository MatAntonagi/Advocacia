const header = document.querySelector('header')
const btnMenu = document.getElementById('btnMenu')
const menuMobile = document.querySelector('.menu-mobile')
const menuIcon = document.getElementById('menuIcon')
const pages = document.querySelector('.pages')
const pagesMenu = document.querySelector('.menuPages')
const pagesIcon = document.getElementById('pagesIcon')
const pagesMenuDSK = document.querySelector('.pagesMenuDesktop')
const pagesDSK = document.querySelector('.pagesDSK')
const MenuDSK = document.querySelector('.menuPagesDSK')
const pagesIconDSK = document.getElementById('pagesIconDSK')


// Função do menu Versão Mobile.
function openMenu () {
    btnMenu.addEventListener('click', (event) =>{
        event.preventDefault(); // Desabilita o recarregamento da pagina por padrão.
        // Adiciona rotação ao icone.
        menuIcon.classList.add('iconRotate');

        // Espera a animação do icone acabar, então troca icone e abre ou fecha menu.
        setTimeout(() => {
            if (menuMobile.classList.contains('active')) {
                // Fechando
                menuMobile.classList.remove('active');
                menuMobile.classList.add('closing')
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            
                // Espera a animação de saida acabar antes de esconder.
                setTimeout(() => {
                    menuMobile.classList.remove('closing');
                },600)
            } else {
                // Abrindo
                menuMobile.classList.add('active');
                menuIcon.classList.add('fa-xmark');
                menuIcon.classList.remove('fa-bars');

            }

            // Remove a rotação depois de rodar
            menuIcon.classList.remove('iconRotate');
        }, 200);
    });
}

openMenu()

function pageMenu () {
    pages.addEventListener('click', (event) => {
        event.preventDefault();
        if (pagesMenu.classList.contains('active')) {
            pagesMenu.classList.remove('active');
            pagesIcon.classList.remove('rotateCarret')
        } else {
            pagesMenu.classList.add('active');
            pagesIcon.classList.add('rotateCarret')

        }
    })
}

pageMenu ()

// Função para hover do menu Pags.
function pageMenuDSK () {
    pagesMenuDSK.addEventListener('mouseenter', (event) => {
        event.preventDefault();
        MenuDSK.classList.add('active');
        pagesIconDSK.classList.add('rotateCarret')
    })

    pagesMenuDSK.addEventListener('mouseleave',(event) => {
        event.preventDefault();
        MenuDSK.classList.remove('active');
        pagesIconDSK.classList.remove('rotateCarret')
    })
}

pageMenuDSK ()