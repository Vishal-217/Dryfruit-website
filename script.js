// Navbar Toggle for mobile
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on click
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});