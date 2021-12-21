// Consegna
// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri vengono nascosti nell’html
// e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare
// sono stati individuati.

// inizio con il creare 5 numeri casuali con una funzione random

function randomNumber(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}

// generiamo i 5 numeri casuali e gli inseriamo nella lista "listNumber"

const listNumber = [];

while(listNumber.length < 5){
    let randomNum = randomNumber(1, 20);
    if(!listNumber.includes(randomNum)){
        listNumber.push(randomNum);
    }
}
console.log(listNumber)

// const numScritti = []

// setTimeout (function() {
//     for(let i = 0;i < 5; i++) {
//         const userNumber = parseInt(prompt("Inserisci i numeri che hai visto: "))
//         numScritti.push(userNumber);
//     }
// }, 5000);






