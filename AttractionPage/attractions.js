document.querySelectorAll(".card").forEach(card => {
  const body = card.querySelector(".card-body");
  const extra = card.querySelector(".card-extra");

  card.addEventListener("click", () => {
    const isExpanded = card.classList.contains("expanded");


    // close other cards
    document.querySelectorAll(".card").forEach(otherCard => {
      if (otherCard !== card) {
        const otherBody = otherCard.querySelector(".card-body");
        const otherExtra = otherCard.querySelector(".card-extra");

        if (otherCard.classList.contains("expanded")) {
          const fullHeight = otherBody.scrollHeight;

          otherBody.style.height = fullHeight + "px";

          requestAnimationFrame(() => {
            otherBody.style.height = "0px";
          });

          otherCard.classList.remove("expanded");
          otherExtra.style.display = "none";
        }
      }
    });


    if (!isExpanded) {
      // EXPAND
      const startHeight = body.scrollHeight;

      // flash extra for height
      extra.style.display = "block";
      const endHeight = body.scrollHeight;
      extra.style.display = "";

      body.style.height = startHeight + "px";

      requestAnimationFrame(() => {
        body.style.height = endHeight + "px";
      });

      card.classList.add("expanded");

      body.addEventListener("transitionend", function handler() {
        body.style.height = "auto";
        body.removeEventListener("transitionend", handler);
      });

    } else {
      // COLLAPSE
      const startHeight = body.scrollHeight;

      // Hide extra to get collapsed height
      extra.style.display = "none";
      const endHeight = body.scrollHeight;
      extra.style.display = "";

      body.style.height = startHeight + "px";

      requestAnimationFrame(() => {
        body.style.height = endHeight + "px";
      });

      card.classList.remove("expanded");
    }
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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