const produits = [
    { nom: "Clavier", prix: 250, stock: 4 },
    { nom: "Souris", prix: 90, stock: 0 },
    { nom: "Écran", prix: 1400, stock: 2 },
    { nom: "Tapis", prix: 60, stock: 12 }
];

const liste = document.querySelector("#liste");

function afficher(tableau) {

    liste.replaceChildren();

    tableau.forEach(function(produit) {

        const li = document.createElement("li");

        li.textContent = produit.nom + " - " + produit.prix + " DH";

        li.className = "p-3 border rounded";

        liste.appendChild(li);
    });
}

afficher(produits);

document.querySelector("#tous").addEventListener("click", function() {
    afficher(produits);
});

document.querySelector("#stock").addEventListener("click", function() {

    const resultat = produits.filter(function(produit) {
        return produit.stock > 0;
    });

    afficher(resultat);
});

document.querySelector("#petitPrix").addEventListener("click", function() {

    const resultat = produits.filter(function(produit) {
        return produit.prix < 200;
    });

    afficher(resultat);
});

document.querySelector("#combo").addEventListener("click", function() {

    const resultat = produits.filter(function(produit) {
        return produit.stock > 0 && produit.prix < 200;
    });

    afficher(resultat);
});

console.log(produits.length);