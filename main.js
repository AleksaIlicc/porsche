window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition >= viewportHeight) {
        document.querySelector('.navbar').classList.add('gradient');
    } else {
        document.querySelector('.navbar').classList.remove('gradient');
    }
});

window.addEventListener('resize', function() {
    const viewportHeight = window.innerHeight;

    const image911 = document.querySelector('.image-overlay');
    const image911Height = parseInt(window.getComputedStyle(image911).fontSize);

    const topPosition = (viewportHeight) * 0.3 - image911Height;
    
    image911.style.top = topPosition + 'px';

});

window.dispatchEvent(new Event('resize'));
