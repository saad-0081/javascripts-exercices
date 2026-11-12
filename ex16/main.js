let produits = [
    { id: 1, nom: "Clavier", prix: 250, stock: 4 },
    { id: 2, nom: "Souris", prix: 90, stock: 0 },
    { id: 3, nom: "Écran", prix: 1400, stock: 2 },
    { id: 4, nom: "Casque", prix: 600, stock: 0 }
];

const cartes = document.querySelector("#cartes");
const detail = document.querySelector("#detail");

function afficherCartes() {
    cartes.replaceChildren();

    produits.forEach(function(produit) {
        const carte = document.createElement("div");
        carte.className = "border p-4 rounded space-y-3";
        carte.dataset.id = produit.id;

        const nom = document.createElement("h2");
        nom.textContent = produit.nom;
        nom.className = "font-bold";

        const prix = document.createElement("p");
        prix.textContent = produit.prix + " DH";

        const boutonDetail = document.createElement("button");
        boutonDetail.textContent = "Détail ";
        boutonDetail.className = "bg-blue-500 text-white px-3 py-2 rounded";
        boutonDetail.dataset.action = "detail";

        const icone = document.createElement("span");
        icone.textContent = "";
        boutonDetail.appendChild(icone);

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.className = "bg-red-500 text-white px-3 py-2 rounded";
        boutonSupprimer.dataset.action = "supprimer";

        carte.append(nom, prix, boutonDetail, boutonSupprimer);
        cartes.appendChild(carte);
    });
}

afficherCartes();

cartes.addEventListener("click", function(e) {
    const bouton = e.target.closest("button");

    if (!bouton || !cartes.contains(bouton)) {
        return;
    }

    const carte = bouton.closest("[data-id]");
    const id = Number(carte.dataset.id);

    if (bouton.dataset.action === "detail") {
        const produit = produits.find(function(p) {
            return p.id === id;
        });

        detail.textContent =
            "Nom : " + produit.nom +
            "  Prix : " + produit.prix + " DH" +
            " Stock : " + produit.stock;
    }

    if (bouton.dataset.action === "supprimer") {
        produits = produits.filter(function(p) {
            return p.id !== id;
        });

        afficherCartes();
        detail.textContent = "Produit supprimé.";
    }
});