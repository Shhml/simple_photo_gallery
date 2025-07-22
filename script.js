// ======================
// Fullscreen Slideshow
// ======================
let currentSlide = 0;
const slides = document.querySelectorAll('.fullscreen-slideshow img');
const quotes = document.querySelectorAll('.slideshow-quote');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  quotes.forEach((quote, i) => {
    quote.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ================
// Lightbox Viewer
// ================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

document.querySelectorAll('.category-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

// ========================
// Sticky Navbar on Scroll
// ========================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ==========================
// Light/Dark Mode Toggle
// ==========================


// =============================
// ✅ Carousel for Highlights Section
// =============================
const viewport = document.getElementById("carouselViewport");
const nextBtn = document.getElementById("carouselNext");
const prevBtn = document.getElementById("carouselPrev");
const cards = document.querySelectorAll(".highlight-card");

let currentIndex = 0;
let visibleCards = 3;
let scrollInterval = null;

function scrollToIndex(index) {
  const cardWidth = cards[0].offsetWidth + 24;
  viewport.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
}

function nextScroll() {
  currentIndex++;
  if (currentIndex > cards.length - visibleCards) {
    currentIndex = 0;
  }
  scrollToIndex(currentIndex);
}

function prevScroll() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - visibleCards;
  }
  scrollToIndex(currentIndex);
}

function startAutoScroll() {
  scrollInterval = setInterval(nextScroll, 3000);
}

nextBtn.addEventListener("click", () => {
  clearInterval(scrollInterval);
  nextScroll();
  startAutoScroll();
});

prevBtn.addEventListener("click", () => {
  clearInterval(scrollInterval);
  prevScroll();
  startAutoScroll();
});

window.addEventListener("load", startAutoScroll);

// ======================
// Throttle Function for Scroll
// ======================
function throttle(fn, wait) {
  let last = Date.now();
  return function () {
    if ((Date.now() - last) >= wait) {
      fn();
      last = Date.now();
    }
  };
}

// ======================
// Parallax Scroll Effect
// ======================
function handleParallax() {
  const parallax = document.querySelector('.parallax-achievements');
  if (parallax) {
    parallax.style.backgroundPositionY = window.pageYOffset * 0.5 + 'px';
  }
}

window.addEventListener('scroll', handleParallax);

// ======================
// Animate .animate and .category-row
// ======================
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate');
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

function revealOnScroll() {
  const rows = document.querySelectorAll('.category-row');
  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      row.classList.add('animate-visible');
    }
  });
}

window.addEventListener('scroll', () => {
  animateOnScroll();
  revealOnScroll();
});

window.addEventListener('load', () => {
  animateOnScroll();
  revealOnScroll();
});

// ==========================
// Discover All Categories Button
// ==========================
function discoverAll() {
  alert("Redirecting to all categories...");
}

// ==========================
// ✅ Counter Animation for Contest Cards
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});

// ==========================
// ✅ Counter Animation for Achievement Section
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const achievements = document.querySelectorAll('.achievement-box .count');

  const animateCounter = (el) => {
    const update = () => {
      const target = +el.getAttribute('data-target');
      const current = +el.innerText.replace(/[^\d]/g, '');
      const increment = target / 150;

      if (current < target) {
        el.innerText = Math.ceil(current + increment).toLocaleString();
        setTimeout(update, 20);
      } else {
        el.innerText = target.toLocaleString();
      }
    };
    update();
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  achievements.forEach(counter => observer.observe(counter));
});

// ==========================
// ✅ Animate Timeline Items
// ==========================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
      timelineObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => timelineObserver.observe(item));



  
   

    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    });
 
// ==========================


// Initialize particles.js for the achievements section
if (document.getElementById('particles-js')) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#31a774" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value:4 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#31a774",
        opacity: 0.4,
        width: 2.5
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}




// particles.js config for Hero Section
particlesJS("particles-hero", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas", // make sure interaction is on canvas
    events: {
      onhover: {
        enable: true,
        mode: "grab" // 👈 makes lines connect to cursor
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.8
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
if (document.getElementById('particles-js')) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#31a774" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value:4 },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#31a774",
        opacity: 0.4,
        width: 2.5
      },
      move: { enable: true, speed: 2 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

 AOS.init({
    once: false,  // Keep animation on scroll, not just once
    mirror: true  // Animate on scroll up as well
  });

swiper.on('slideChange', () => {
  AOS.refresh();
});



