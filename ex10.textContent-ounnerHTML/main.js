const message = '<strong>Promo</strong> : -20 % sur les claviers';

const bouton = document.querySelector("#go");
const bigTexte = document.querySelector("#bigTexte");
const bigHtml = document.querySelector("#bigHtml");

bouton.addEventListener("click", function() {

    bigTexte.textContent = message;

    bigHtml.innerHTML = message;

    bigHtml.innerHTML += " Fin";

    console.log(bigHtml.innerHTML);
});