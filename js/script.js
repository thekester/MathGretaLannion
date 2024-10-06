// Afficher / masquer les articles en cliquant sur le h2 de la section
let liste_h2 = document.getElementsByTagName("h2");
for (let i = 0; i < liste_h2.length; i++) {
    liste_h2[i].addEventListener("click", function () {
        let articles = this.closest("section").getElementsByTagName("article");
        for (let j = 0; j < articles.length; j++) {
            if (articles[j].classList.contains("visible")) {
                articles[j].classList.replace("visible", "cache");
            } else {
                articles[j].classList.replace("cache", "visible");
            }
        }
    });
}

// Gestion du mode sombre
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

// Initialisation du thème
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleDarkModeBtn.textContent = 'Mode Clair';
} else if (currentTheme === 'light') {
    document.body.classList.remove('dark-mode');
    toggleDarkModeBtn.textContent = 'Mode Sombre';
} else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode');
    toggleDarkModeBtn.textContent = 'Mode Clair';
}

// Événement au clic sur le bouton
toggleDarkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        toggleDarkModeBtn.textContent = 'Mode Clair';
    } else {
        toggleDarkModeBtn.textContent = 'Mode Sombre';
    }
    localStorage.setItem('theme', theme);
});
