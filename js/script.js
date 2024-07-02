const navbar = document.querySelector(".navbar");

// TRANSPARENT NAVBAR TO SOLID NAVBAR
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navbar.classList.add("navbar-scrolled");
    }
    else if (window.scrollY < 56) {
        navbar.classList.remove("navbar-scrolled");
    }
});



