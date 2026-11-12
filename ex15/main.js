const produits = [
    { id: 1, nom: "Clavier", prix: 250, stock: 4 },
    { id: 2, nom: "Souris", prix: 90, stock: 0 },
    { id: 3, nom: "Écran", prix: 1400, stock: 2 },
    { id: 4, nom: "Casque", prix: 600, stock: 0 }
];

const boutons = document.querySelectorAll(".q");
const reponse = document.querySelector("#reponse");

boutons.forEach(function(bouton) {

    bouton.addEventListener("click", function() {

        const question = bouton.dataset.question;

        if (question === "1") {

            const produit = produits.find(function(p) {
                return p.id === 3;
            });

            reponse.textContent = produit.nom;

        } else if (question === "2") {

            const resultat = produits.filter(function(p) {
                return p.stock === 0;
            });

            reponse.textContent = resultat.map(p => p.nom).join(", ");

        } else if (question === "3") {

            const resultat = produits.some(function(p) {
                return p.stock === 0;
            });

            reponse.textContent = resultat ? "Oui" : "Non";

        } else if (question === "4") {

            const resultat = produits.every(function(p) {
                return p.prix < 2000;
            });

            reponse.textContent = resultat ? "Oui" : "Non";

        } else if (question === "5") {

            const produit = produits.find(function(p) {
                return p.id === 10;
            });

            reponse.textContent = produit ?
                produit.nom :
                "Aucun produit trouver";
        }

    });

});