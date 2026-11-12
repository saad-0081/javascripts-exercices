let panier = [
    { id: 1, nom: "Clavier", prix: 250, quantite: 1 },
    { id: 2, nom: "Souris", prix: 90, quantite: 2 },
    { id: 3, nom: "Câble", prix: 35, quantite: 3 }
];

const panierElement = document.querySelector("#panier");
const totalElement = document.querySelector("#total");
const nombreElement = document.querySelector("#nombre");

function afficher() {
    panierElement.replaceChildren();

    if (panier.length === 0) {
        panierElement.textContent = "mon panier est vide";
    }

    panier.forEach(function(p) {
        const ligne = document.createElement("div");
        ligne.textContent = `${p.nom} | ${p.prix} DH | Qté: ${p.quantite} | Sous-total: ${p.prix * p.quantite} DH `;

        ["moins", "plus"].forEach(function(action) {
            const btn = document.createElement("button");
            btn.textContent = action === "plus" ? "+" : "-";
            btn.dataset.id = p.id;
            btn.dataset.action = action;
            ligne.appendChild(btn);
        });

        panierElement.appendChild(ligne);
    });

    totalElement.textContent = panier.reduce((s, p) => s + p.prix * p.quantite, 0) + " DH";
    nombreElement.textContent = panier.reduce((s, p) => s + p.quantite, 0);
}

afficher();

panierElement.addEventListener("click", function(e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    const p = panier.find(p => p.id === Number(btn.dataset.id));

    if (btn.dataset.action === "plus") p.quantite++;
    else p.quantite--;

    panier = panier.filter(p => p.quantite > 0);
    afficher();
});