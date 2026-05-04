// ============================================
// THEME TOGGLE
// ============================================
// Manages dark/light mode switching
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const lightIcon = document.getElementById('lightIcon');
const darkIcon = document.getElementById('darkIcon');

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    html.classList.add('light');
    lightIcon.classList.add('hidden');
    darkIcon.classList.remove('hidden');
} else {
    html.classList.remove('light');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    } else {
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
});
