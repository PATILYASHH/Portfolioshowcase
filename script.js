document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            showLoadingBar();
        });
    });
});

function showLoadingBar() {
    const loadingBar = document.getElementById('loading-bar');
    loadingBar.style.width = '100%';

    setTimeout(() => {
        loadingBar.style.width = '0';
    }, 1000); // Adjust the duration of the loading animation as needed
}
