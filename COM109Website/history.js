// ===========================
// BELFAST HISTORY PAGE - JS
// ===========================

// --- Era Data for Modal Pop-ups ---
const eraData = {
  early: {
    title: "Early Settlement (Pre-1600s)",
    text: "The name 'Belfast' comes from the Irish 'Béal Feirste', meaning 'mouth of the sandy ford'. The area around the River Lagan was inhabited long before recorded history, with evidence of Bronze Age and Iron Age settlements on Cave Hill. In medieval times, a small Norman castle stood near the ford, and the area was home to the O'Neill clan — one of the most powerful Gaelic Irish dynasties. The settlement remained small and largely rural until the arrival of the English and Scottish settlers in the seventeenth century."
  },
  plantation: {
    title: "The Plantation Era (1600s)",
    text: "In 1613, King James I granted Belfast its first Royal Charter, officially making it a town. This was part of the wider Ulster Plantation — a scheme to settle Protestant English and Scottish families on land confiscated from Gaelic Irish lords. Sir Arthur Chichester, the Lord Deputy of Ireland, was granted the land around Belfast and played a key role in its early development. The town grew quickly, with a market, a church, and a small but growing merchant community. This period established the religious and cultural divisions that would shape Belfast's history for centuries to come."
  },
  industrial: {
    title: "The Industrial Revolution (1800s)",
    text: "The nineteenth century transformed Belfast beyond recognition. The city became one of the most industrialised in the world, driven by two industries above all — linen and shipbuilding. Belfast earned the nickname 'Linenopolis' as its mills produced linen cloth exported globally. By the mid-century, the focus shifted to the River Lagan, where the massive Harland & Wolff shipyard was founded in 1861. At its peak, Belfast's shipyards were the largest and most productive in the world. The population exploded from around 20,000 in 1800 to over 350,000 by 1900, fuelled by migration from across Ireland and beyond. The city gained city status in 1888."
  },
  titanic: {
    title: "RMS Titanic (1912)",
    text: "Belfast's most famous — and tragic — contribution to world history is the RMS Titanic. Built at the Harland & Wolff shipyard in the Titanic Quarter, she was the largest ship in the world at the time of her launch in 1911. On 2 April 1912, she departed Belfast for sea trials. Just ten days later, on 15 April 1912, she sank in the North Atlantic after striking an iceberg, killing over 1,500 people. For many years the tragedy was a sore point in the city, but Belfast has since reclaimed the Titanic story with pride. The award-winning Titanic Belfast museum, which opened in 2012, now attracts over 800,000 visitors a year and stands on the very ground where the ship was built."
  },
  troubles: {
    title: "The Troubles (1960s–1998)",
    text: "The period known as 'The Troubles' was one of the most painful chapters in Belfast's — and Ireland's — modern history. Beginning in the late 1960s, decades of simmering tensions between the unionist/loyalist community (who wished to remain part of the United Kingdom) and the nationalist/republican community (who sought a united Ireland) erupted into widespread violence. Paramilitary groups on both sides carried out bombings, shootings, and assassinations. British Army troops were deployed on the streets. Belfast's city centre was devastated by bomb attacks, and communities were bitterly divided. Altogether, over 3,500 people were killed during The Troubles. The conflict profoundly shaped the city's identity, culture, and communities."
  },
  peace: {
    title: "Peace & Renaissance (1998–Present)",
    text: "The signing of the Good Friday Agreement on 10 April 1998 marked a turning point for Belfast and Northern Ireland. The agreement, supported by the governments of both the UK and Ireland, established a power-sharing assembly and set out a framework for peace. Slowly but surely, Belfast began to transform. Investment poured in, the city centre was rebuilt, and tourism grew dramatically. The Titanic Quarter regeneration brought world-class attractions to what had been a derelict dockland. Belfast now attracts millions of visitors each year, drawn by its history, its vibrant food and music scene, its Game of Thrones filming locations, and — above all — the warmth of its people. It stands today as one of Europe's most exciting and welcoming cities."
  }
};

// --- Mobile Navigation Toggle ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// --- Modal Logic ---
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle   = document.getElementById('modalTitle');
const modalText    = document.getElementById('modalText');
const modalClose   = document.getElementById('modalClose');

document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const era = btn.getAttribute('data-era');
    const data = eraData[era];
    if (data) {
      modalTitle.textContent = data.title;
      modalText.textContent  = data.text;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// --- Animated Number Counter ---
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 1800;
  const stepTime = 16;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, stepTime);
}

// Use Intersection Observer to trigger counters when visible
const counters = document.querySelectorAll('.fact-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// --- Scroll Reveal for Timeline Items ---
const timelineItems = document.querySelectorAll('.timeline-item');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateX(0)';
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach((item, i) => {
  // Set initial hidden state (alternating sides)
  item.style.opacity = '0';
  item.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
  if (i % 2 === 0) {
    item.style.transform = 'translateX(-30px)';
  } else {
    item.style.transform = 'translateX(30px)';
  }
  revealObserver.observe(item);
});

// --- Navbar scroll shadow ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  }
});
