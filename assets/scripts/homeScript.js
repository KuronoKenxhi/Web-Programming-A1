// JAVASCRIPT FILE for Home Page
// Author: Mitchell Hughes s3901335

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop - 90;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
});

// Sticky Navigation Bar
document.addEventListener("DOMContentLoaded", function() {
    // call elements from html into the script
    const navbar = document.getElementById("navbar");
    const header = document.querySelector("header");
    const stickyOffset = header.offsetHeight; // Offset by the header's height
    const sticky = stickyOffset;

    // On scroll event add class to navbar element called 'sticky'
    window.addEventListener("scroll", function() {
        // checks whether or not the window is below the header or not
        if (window.scrollY >= sticky) {
            // add class to navbar
            navbar.classList.add("sticky");
        } else {
            // remove class from navbar
            navbar.classList.remove("sticky");
        }
    })
});

