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
var venti = (price / 100) * 20;
var quaranta = (price / 100) * 40;
var discount1 = price - venti;
var discount2 = price - quaranta;

if (age < 18) {
  document.getElementById('print').innerHTML  = "Your 20% discounted ticket costs: " + discount1.toFixed(2) + " " + "€";
  console.log ("Discounted under 18 Price: " + discount1);
} else if (age > 65) {
  document.getElementById('print').innerHTML  = "Your 40% discounted ticket costs: " + discount2.toFixed(2) + " " + "€";
  console.log ("Discounted over 65 Price: " + discount2);
} else {
  document.getElementById('print').innerHTML  = "Your ticket costs: " + price.toFixed(2) + "€";
  console.log ("Price: ", price);
}
