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

// Image Rotator Logic
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    // Remove 'active' class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide (or back to first if at the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add 'active' class to new slide
    slides[currentSlide].classList.add('active');
}

// Change image every (5 seconds)
setInterval(nextSlide, 5000);

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.classList.add('reveal-hidden');
    observer.observe(card);
});