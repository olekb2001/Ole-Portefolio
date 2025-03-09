document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Ensures animation runs only once
            }
        });
    }, { threshold: 0.3 }); // Adjust visibility trigger

    projectCards.forEach(card => {
        observer.observe(card);
    });
});