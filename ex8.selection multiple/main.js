const notes = document.querySelectorAll(".note");

const notes2 = document.getElementsByClassName("note");

console.log(notes);
console.log(notes2);

const bouton = document.querySelector("#surligner");

bouton.addEventListener("click", function() {
    notes.forEach(function(note) {
        note.classList.toggle("bg-yellow-200");
    });
});

const lire = document.querySelector("#lire");

lire.addEventListener("click", function() {
    const themes = document.getElementsByName("theme");

    themes.forEach(function(theme) {
        if (theme.checked) {
            console.log(theme.value);
        }
    });
});