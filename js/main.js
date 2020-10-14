//Numero di km che l'utente vuole percorrere
var destination = parseInt (prompt("Quanti km vuoi percorrere oggi?"));
console.log (destination);

if (isNaN(destination)) {
  alert ("Errore!");
} else if (!isNaN(destination)) {
  console.log (destination);
}

//Età del passeggero
var age = parseInt(prompt("Quanti anni hai?"));
console.log (age);

if (isNaN(age)) {
  alert ("Errore!");
} else if (!isNaN(age)) {
  console.log (age);
}

//Prezzo biglietto in base ai km (0.21€ al km)
var x = 0.21;
var price = destination * x;
console.log ("Price: ", price);

// -20% per i minorenni
if (age < 18) {
  console.log ("Discounted Price: ", price - 0.2);
} else if (price) {
  console.log ("Price: ", price);
}

//-40% per gli over 65
if (age > 65) {
  console.log ("Discounted Price: ", price - 0.4);
} else if (price) {
  console.log ("Price: ", price);
}

// stampare a schermo il prezzo calcolato
