window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;

    if (scrollPosition >= viewportHeight) {
        document.querySelector('.navbar').classList.add('gradient');
    } else {
        document.querySelector('.navbar').classList.remove('gradient');
    }
});