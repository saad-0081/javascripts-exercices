const produits = [
    { nom: "Clavier", prixHT: 250 },
    { nom: "Souris", prixHT: 90 },
    { nom: "Écran", prixHT: 1400 }
];

const noms = produits.map(function(produit) {
    return produit.nom;
});

console.log(noms);

const produitsTTC = produits.map(function(produit) {
    return {
        ...produit,
        prixTTC: produit.prixHT * 1.2
    };
});

console.log(produitsTTC);

console.log(produits);

const textes = produitsTTC.map(function(produit) {
    return produit.nom + " : " + produit.prixTTC + " DH TTC";
});

console.log(textes);

const liste = document.querySelector("#etiquettes");

textes.forEach(function(texte) {
    const li = document.createElement("li");
    li.textContent = texte;
    li.className = "p-3 border rounded bg-gray-100";

    liste.appendChild(li);
});

const resultat = produits.forEach(function(produit) {
    return produit.nom;
});

console.log(resultat);