document.addEventListener('DOMContentLoaded', function () {
    const shoe = document.querySelector('.shoe');
    let direction = 1;
    let position = 0;

    function animateShoe() {
        position += direction;
        if (position > 15 || position < 0) {
            direction *= -1; // Reverse direction
        }
        shoe.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animateShoe);
    }

    animateShoe();
});
