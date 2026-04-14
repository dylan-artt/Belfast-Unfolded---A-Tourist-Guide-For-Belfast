// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Alert for the CTA button
const ctaBtn = document.getElementById('cta-btn');
ctaBtn.addEventListener('click', () => {
    alert("Belfast is waiting for you! Booking system coming soon.");
});

// Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.8s ease-in';
        }
    });
});