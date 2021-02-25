var nome = prompt("Digita il tuo nome");
var cognome = prompt("Digita il tuo cognome");
var colore = prompt("Digita il tuo colore preferito");

var pass = nome + cognome + colore + 27;
document.getElementById('psw').innerHTML = pass;
