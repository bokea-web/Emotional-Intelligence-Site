console.log("Welcome to Emotional Intelligence Hub!");// Highlight active nav link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// Highlight active nav link
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});