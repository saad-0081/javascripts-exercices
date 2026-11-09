function calculerTTC(prixHT) {
    return prixHT * 1.20;
}

console.log(calculerTTC(100));

function afficherPrix(selecteur, prixHT) {
    const element = document.querySelector(selecteur);

    const prixTTC = calculerTTC(prixHT);

    element.textContent = `HT : ${prixHT} DH · TTC : ${prixTTC} DH`;
}

afficherPrix("#p1", 100);
afficherPrix("#p2", 45);
afficherPrix("#p3", 320);

const calculerTTCFlechee = (prixHT) => prixHT * 1.20;

console.log(calculerTTCFlechee(100));

function calculerSansReturn(prixHT) {
    prixHT * 1.20;
}

console.log(calculerSansReturn(100));