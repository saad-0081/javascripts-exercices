const produits = [
    { id: 1, nom: "Clavier", prix: 250, stock: 4 },
    { id: 2, nom: "Souris", prix: 90, stock: 0 },
    { id: 3, nom: "Écran", prix: 1400, stock: 2 }
];

console.log(produits[1].nom);
console.log(produits[produits.length - 1].prix);

function creerFiche(produit) {

    const article = document.createElement("article");
    article.className = "border p-4 rounded-lg shadow";

    const titre = document.createElement("h2");
    titre.textContent = produit.nom;
    titre.className = "text-xl font-bold";

    const prix = document.createElement("p");
    prix.textContent = produit.prix + " DH";

    article.appendChild(titre);
    article.appendChild(prix);

    if (produit.stock === 0) {
        const rupture = document.createElement("p");
        rupture.textContent = "Rupture";
        rupture.className = "text-red-600 font-bold";

        article.appendChild(rupture);
    }

    return article;
}
const catalogue = document.querySelector("#catalogue");

produits.forEach(function(produit) {
    const fiche = creerFiche(produit);
    catalogue.appendChild(fiche);
});