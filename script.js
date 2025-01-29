// Selecionar elementos
let menuIcon = document.querySelector('#menu-toggle');
let menuList = document.querySelector('#menu-list');
let closeButton = document.querySelector('.close-button');

// Abrir o menu ao clicar no ícone
menuIcon.addEventListener('click', function () {
    menuList.classList.add('show');
});

// Fechar o menu ao clicar no botão de fechar
closeButton.addEventListener('click', function () {
    menuList.classList.remove('show');
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function (event) {
    if (!menuList.contains(event.target) && event.target !== menuIcon) {
        menuList.classList.remove('show');
    }
});
