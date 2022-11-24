//MESSAGGIO DI BENVENUTO :)
alert("Benvenuto nel mio esercizio.");

//DICHIARO E ASSEGNO ALLA VARIABILE number VALORE 21 COSTANTE
const number = 21;
/* DICHIARO E ASSEGNO ALLA VARIABILE name_input IL VALORE CHE INSERISCE L'UTENTE */
let name_input = prompt("Inserisci il tuo nome");

/* DICHIARO E ASSEGNO ALLA VARIABILE lastname_input IL VALORE CHE INSERISCE L'UTENTE */
let lastname_input = prompt("Inserisci il tuo cognome");

/* DICHIARO E ASSEGNO ALLA VARIABILE color_input IL VALORE CHE INSERISCE L'UTENTE */
let color_input = prompt("Inserisci il tuo colore preferito");

//DICHIARO E ASSEGNO ALLA VARIABILE sum_input LA SOMMA DELLE VARIABILI 
let sum_input = name_input + lastname_input + color_input + number;

/* INSERISCO NELLA PAGINA HTML NEL TAG CON ID "title" LA VARIABILE "sum_input" */
document.getElementById("title").innerHTML = sum_input;


