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


// 2. Three.js Background (Glowing Wireframe Icosahedron - Cyber Node)
const initThreeJS = () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  // No background color set means transparent relative to body if alpha:true, 
  // but we'll let it just sit on top of the CSS background
  
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap pixel ratio for performance
  renderer.setSize(window.innerWidth, window.innerHeight);

  // The Cyber Node (Icosahedron)
  const geometry = new THREE.IcosahedronGeometry(2, 1);
  const material = new THREE.MeshBasicMaterial({ 
    color: 0x00f0ff, 
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const node = new THREE.Mesh(geometry, material);
  scene.add(node);

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 500;
  const posArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i++) {
    // Spread particles around
    posArray[i] = (Math.random() - 0.5) * 15;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.5
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Animation Loop
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Rotate Node
    node.rotation.y += 0.002;
    node.rotation.x += 0.001;

    // Rotate Particles slightly based on mouse
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0005;
    
    // Parallax effect
    node.rotation.y += 0.05 * (targetX - node.rotation.y);
    node.rotation.x += 0.05 * (targetY - node.rotation.x);

    renderer.render(scene, camera);
  };

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

// Only init if user doesn't prefer reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  initThreeJS();
}


// 3. GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from('.glitch', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
gsap.from('.subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.4 });
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
