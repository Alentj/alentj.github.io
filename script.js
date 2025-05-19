// Typing Effect
const text = "Welcome to My Personal Webpage";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // Adjusted for smoother typing
    }
}

window.onload = function() {
    typeEffect();
};

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.classList.add('show');
        }
    });
});