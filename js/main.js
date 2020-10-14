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

//STAMPA BIGLIETTI
// -20% per i minorenni
var discount1 = price - 0.2;

if (age < 18) {
  document.getElementById('print').innerHTML  = "Your 20% discounted ticket costs: " + discount1 + " " + "€";
  console.log ("Discounted under 18 Price: ", price - 0.2);
} else if (price) {
  document.getElementById('print').innerHTML  = "Your ticket costs: " + price + "€";
  console.log ("Price: ", price);
}

//-40% per gli over 65
var discount2 = price - 0.4;

if (age > 65) {
  document.getElementById('print').innerHTML  = "Your 40% discounted ticket costs: " + discount2 + " " + "€";
  console.log ("Discounted over 65 Price: ", price - 0.4);
} else if (price) {
  document.getElementById('print').innerHTML  = "Your ticket costs: " + price + "€";
  console.log ("Price: ", price);
}
