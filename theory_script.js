// Логика для подмены текста на изображение при наведении
const hoverElements = document.querySelectorAll('.hover-img');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        const imgSrc = this.getAttribute('data-img');
        this.style.position = 'relative';
        this.setAttribute('style', `content: url(${imgSrc});`);
    });

    element.addEventListener('mouseleave', function() {
        this.removeAttribute('style');
    });
});
