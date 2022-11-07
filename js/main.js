
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
//variabili globali
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const priceC = 0.21;


// output
let eta;
let priceF; 
let distanza;
let priceKm;
let discount;
// codice principale
// richesta dati utente

eta = prompt("inserisci la tua eta");
distanza = prompt("a quanti km dista la tua posizione");

// controlli per verificare lo sconto da applicare
priceKm = 0.21 * distanza;


if (eta <= 18) {
    discount =  (priceKm / 100) * 20;

} else if(eta >= 65){
    discount =  (priceKm / 100) * 40;
}else{
    discount=0.00;
}

priceF = priceKm - discount;
priceF=priceF.toFixed(2);

//output finale

document.getElementById("ticket").innerHTML = priceF + " euro";



