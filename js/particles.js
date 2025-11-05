// Create animated particles
const particlesContainer = document.getElementById('particles');
const particleCount = 80;

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    // Random animation duration
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = '0s';

    particlesContainer.appendChild(particle);

    // Remove and recreate particle after animation completes
    setTimeout(() => {
        particle.remove();
        createParticle();
    }, duration * 1000);
}

// Create initial particles with staggered start times
for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
        createParticle();
    }, Math.random() * 15000); // Stagger initial creation over 15 seconds
}