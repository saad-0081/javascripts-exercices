const boutons = document.querySelectorAll(".choix");

const apercu = document.querySelector("#apercu");
const info = document.querySelector("#info");

boutons.forEach(function(bouton) {
    console.log(bouton.dataset);
});

boutons.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const couleur = bouton.dataset.couleur;
        const nom = bouton.dataset.nom;

        apercu.className = "h-32 rounded border";

        apercu.classList.add(couleur);

        info.textContent = "Couleur choisie : " + nom;

    });

});

console.log(boutons[2].dataset.prixUnitaire);