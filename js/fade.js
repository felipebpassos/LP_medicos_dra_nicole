function onScrollAnimation() {
    const fadeInUpElements = document.querySelectorAll('.fade-in-up');
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');

    fadeInUpElements.forEach(element => activateAnimation(element));
    fadeInLeftElements.forEach(element => activateAnimation(element));
}

function activateAnimation(element) {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0 && !element.classList.contains('show')) {
        element.classList.add('show');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', onScrollAnimation);
    onScrollAnimation(); // Verifica a posição inicial para ambos os efeitos
});
