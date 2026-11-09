const ajouter = document.querySelector("#ajouter");
const notes = document.querySelector("#notes");


let compteur = 0;

ajouter.addEventListener("click", function() {

    compteur++;

    const li = document.createElement("li");

    console.log("Après createElement :", li);

    li.textContent = `Note n° ${compteur}`;

    li.classList.add("p-2", "bg-yellow-100", "rounded");

    notes.appendChild(li);

    console.log("Après appendChild :", li);

});