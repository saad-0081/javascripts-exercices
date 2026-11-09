let compteur = 0;

const valeur = document.querySelector("#valeur");
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const reset = document.querySelector("#reset");

function afficher() {
    valeur.textContent = compteur;
}

plus.addEventListener("click", function() {
    compteur++;
    afficher();
});

moins.addEventListener("click", function() {
    if (compteur > 0) {
        compteur--;
    }

    afficher();
});

reset.addEventListener("click", function() {
    compteur = 0;
    afficher();
});