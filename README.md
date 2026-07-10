# Static 3D Animated Cyber Security Portfolio

A lightweight, purely static, single-page portfolio built for a Cyber Security student. Features a dark theme, electric blue neon accents, glassmorphism UI cards, a Three.js 3D animated hero background, and GSAP scroll-triggered animations.

## Features
- **No Build Tools**: Pure HTML, CSS, and Vanilla JS.
- **Three.js Background**: A 3D wireframe rotating cyber node with floating particles in the Hero section.
- **GSAP Animations**: Smooth scroll triggers, fades, and staggers for all sections.
- **Fully Responsive**: Mobile-first grid layouts.
- **Reduced Motion**: Gracefully degrades the 3D scene if the user's OS prefers reduced motion to save battery.

## Setup & Hosting
Because this uses no build tools, it is completely ready to host on **GitHub Pages**, **Vercel**, **Netlify**, or any basic web server out of the box.

1. Simply commit these three files (`index.html`, `style.css`, `script.js`) to the `main` branch of your GitHub repository.
2. Go to your repository **Settings** -> **Pages**.
3. Under "Build and deployment" Source, choose **Deploy from a branch**.
4. Select the **main** branch and **/root** folder.
5. Save, and your portfolio will be live in a few minutes!

## Customization
- **Change the accent color**: In `style.css`, find the `:root` pseudo-class and change `--accent` and `--accent-glow`. Also, in `script.js`, change the hex values `0x00f0ff` inside the `initThreeJS` function.
- **Edit content**: Open `index.html` and modify the text within the tags. No compiling needed!

## Tech Stack
- HTML5
- CSS3 (Variables, Flexbox, Grid)
- Vanilla JavaScript
- Three.js (via CDN)
- GSAP & ScrollTrigger (via CDN)
- Google Fonts (Space Grotesk)
