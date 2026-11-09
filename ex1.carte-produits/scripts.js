const nom = "Clavier";
let prix = 250;

const elementNom = document.getElementById("nom");
const elementPrix = document.getElementById("prix");

elementNom.textContent = nom;
elementPrix.textContent = prix + " DH";

prix = 199;

elementPrix.textContent = prix + " DH";