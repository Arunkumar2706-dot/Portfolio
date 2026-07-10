// 1. Navbar Scroll & Hamburger Menu
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});


// 2. Star Background Canvas
const initStars = () => {
  const container = document.getElementById('stars-container');
  if (!container) return;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  container.appendChild(canvas);

  let width, height;
  let stars = [];

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initStarsArray();
  };

  const initStarsArray = () => {
    stars = [];
    const numStars = Math.floor((width * height) / 1000); // density
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      });
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';

    stars.forEach(star => {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };

  window.addEventListener('resize', resize);
  resize();
  animate();
};

initStars();


// 3. UI/UX Enhancements
// Initialize VanillaTilt for 3D hover effects on cards
if (typeof VanillaTilt !== 'undefined') {
  VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
}

// Typing Effect for Subtitle
const subtitleText = "Cybersecurity & CSE Honours Student";
const subtitleElement = document.querySelector('.subtitle');
if (subtitleElement) {
  subtitleElement.textContent = '';
  let i = 0;
  
  // Start typing after initial load animations
  setTimeout(() => {
    const typeWriter = setInterval(() => {
      if (i < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 50); // Speed of typing
  }, 1000); // Delay before starting
}

// 4. GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from('.glitch', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
gsap.from('.tagline', { opacity: 0, y: 20, duration: 1, delay: 0.6 });
gsap.from('.hero-buttons', { opacity: 0, y: 20, duration: 1, delay: 0.8 });

// General Section Fades
const sections = gsap.utils.toArray('.section');
sections.forEach(sec => {
  gsap.from(sec.querySelectorAll('.section-title'), {
    scrollTrigger: {
      trigger: sec,
      start: 'top 80%',
    },
    opacity: 0,
    y: 30,
    duration: 0.8
  });
});

// About Section
gsap.from('.about-image', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0.8,
  duration: 1
});

gsap.from('.about-text', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top 70%',
  },
  opacity: 0,
  x: 50,
  duration: 1
});

gsap.from('.about-skills', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top 70%',
  },
  opacity: 0,
  x: 50,
  duration: 1
});

// Projects Cards Stagger
gsap.from('.project-card', {
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 70%',
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8
});

// Timeline Stagger
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '#experience',
    start: 'top 70%',
  },
  opacity: 0,
  x: -50,
  stagger: 0.3,
  duration: 0.8
});

// Certs Stagger
gsap.from('.cert-box', {
  scrollTrigger: {
    trigger: '#certifications',
    start: 'top 70%',
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 0.8
});

// Contact Stagger
gsap.from('.contact-info', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
  },
  opacity: 0,
  x: -50,
  duration: 0.8
});

gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '#contact',
    start: 'top 70%',
  },
  opacity: 0,
  x: 50,
  duration: 0.8
});
