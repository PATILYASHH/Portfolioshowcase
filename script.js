document.querySelectorAll('.skills-container ul li').forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hovered');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hovered');
    });
});
