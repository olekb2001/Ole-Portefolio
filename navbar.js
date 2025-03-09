document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list"); // Ensure this ID matches your HTML

    
    hamburger.addEventListener("click", function () {
        navList.classList.toggle("show");
    });

   
    document.querySelectorAll("#nav-list a").forEach(link => {
        link.addEventListener("click", function () {
            navList.classList.remove("show");
        });
    });
});