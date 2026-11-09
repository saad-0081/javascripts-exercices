console.log("JavaScript connecté");

const titre = document.querySelector("#titre");
const intro = document.querySelector(".intro");
const pied = document.querySelector("footer");

console.log(titre);
console.log(intro);
console.log(pied);

titre.textContent = "Bienvenue sur ma page";
intro.textContent = "Je découvre JavaScript";
pied.textContent = "Exercice JavaScript";

const titre2 = document.getElementById("titre");

console.log(titre === titre2);

const test = document.querySelector("intro");

console.log(test);