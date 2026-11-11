const message = document.querySelector("#message");
const compteur = document.querySelector("#compteur");
const envoyer = document.querySelector("#envoyer");

message.addEventListener("input", function() {

    const texte = message.value.trim();

    const longueur = texte.length;

    compteur.textContent = longueur + " / 50";

    if (longueur > 50) {
        compteur.classList.remove("text-gray-600");
        compteur.classList.add("text-red-600");
    } else {
        compteur.classList.remove("text-red-600");
        compteur.classList.add("text-gray-600");
    }

    if (longueur === 0 || longueur > 50) {
        envoyer.disabled = true;
    } else {
        envoyer.disabled = false;
    }

});