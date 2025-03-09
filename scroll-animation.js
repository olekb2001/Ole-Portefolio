document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-down");

    scrollButton.addEventListener("click", function () {
        slowScrollTo(document.getElementById("projects").offsetTop, 1200); 

       
        scrollButton.style.transform = "scale(0.9)";
        setTimeout(() => {
            scrollButton.style.transform = "scale(1)";
        }, 200);
    });
});


function slowScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animationStep(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 

        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animationStep);
        }
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animationStep);
}
