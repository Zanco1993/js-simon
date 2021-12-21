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

const numberHtml = document.getElementById("container-number");

const listNumberMachine = [];

while(listNumberMachine.length < 5){
    let randomNum = randomNumber(1, 20);
    if(!listNumberMachine.includes(randomNum)){
        listNumberMachine.push(randomNum);
}
}

numberHtml.innerHTML = `<div class="box">${listNumberMachine}</div>`;

// aggiunta la funzione di scomparsa dei numeri dopo 30 secondi
// nel container-number
setTimeout(function(){
    numberHtml.classList.add("hide");
}, 5000);


let listNumberCorrect = [];
let numberCorrect = 0;

setTimeout (function() {
    // creo una lista che mi tenga conto del numero degli elementi
    let listNumberUser = [];
    while(listNumberUser.length < 5) {
        let userNumber = parseInt(prompt("Inserisci i numeri che hai visto: "))
        listNumberUser.push(userNumber);
    
        //una volta aggiunto il numero in lista, verifico che si incluso
        // nella lista generata inizialmente dalla macchina
    if (listNumberMachine.includes(userNumber) && userNumber !== listNumberCorrect) {
        listNumberCorrect.push(userNumber);
        numberCorrect++;

    } 

    // faccio un confronto ogni giro, se è incluso,
    // aggiungo alla lista numberCorrect e incremento di 1

    console.log(`Hai indovinato questi numeri ${listNumberCorrect}`);
    console.log(`Hai indovinato ${numberCorrect} numeri!!`)
}


}, 5100);



















