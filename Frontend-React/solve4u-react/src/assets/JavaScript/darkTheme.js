const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function applyLightTheme() {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
}

function applyDarkTheme() {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
}

themeToggle.addEventListener('click', toggleTheme);

loadTheme();
