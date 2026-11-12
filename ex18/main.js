let produits = [];

const formulaire = document.querySelector("#formulaire");
const liste = document.querySelector("#liste");
const erreur = document.querySelector("#erreur");

function afficher() {
    liste.replaceChildren();

    produits.forEach(function(p) {
        const li = document.createElement("li");
        li.textContent = `${p.nom} - ${p.prix} DH - ${p.categorie}`;
        liste.appendChild(li);
    });
}

formulaire.addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = formulaire.elements.nom.value.trim();
    const prix = Number(formulaire.elements.prix.value);
    const categorie = formulaire.elements.categorie.value;

    if (!nom || !formulaire.elements.prix.value || !categorie) {
        erreur.textContent = "Tous les champs sont obligatoires.";
        return;
    }

    if (prix <= 0) {
        erreur.textContent = "Le prix doit être positif.";
        return;
    }

    if (produits.some(p => p.nom.toLowerCase() === nom.toLowerCase())) {
        erreur.textContent = "Ce produit existe déjà.";
        return;
    }

    const nouveau = { nom, prix, categorie };
    produits = [...produits, nouveau];

    afficher();
    formulaire.reset();
    erreur.textContent = "";
    formulaire.elements.nom.focus();
});