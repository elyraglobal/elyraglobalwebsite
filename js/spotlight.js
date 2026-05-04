// ============================================
// SPOTLIGHT EFFECT
// ============================================
// Mouse-tracking spotlight/glow effect
// ============================================

const spotlightGlow = document.getElementById('spotlightGlow');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    spotlightGlow.style.left = mouseX + 'px';
    spotlightGlow.style.top = mouseY + 'px';
});

// Reset spotlight to center when mouse leaves window
document.addEventListener('mouseleave', () => {
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
    spotlightGlow.style.left = mouseX + 'px';
    spotlightGlow.style.top = mouseY + 'px';
});
