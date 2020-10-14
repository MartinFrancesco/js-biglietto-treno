//Numero di km che l'utente vuole percorrere
var destination = parseInt(prompt("Quanti km vuoi percorrere oggi?"));
console.log (destination);

if (destination == NaN) {
  alert ("Errore!");
} else if (destination) {
  console.log (destination);
}

//Età del passeggero
var age = parseInt(prompt("Quanti anni hai?"));
console.log (age);

//Prezzo biglietto in base ai km (0.21€ al km)

// -20% per i minorenni

//-40% per gli over 65

// stampare a schermo il prezzo calcolato
