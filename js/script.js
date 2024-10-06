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
