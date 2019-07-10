// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var elemento = document.getElementById('mio_id');
var elemento1 = document.getElementById('mio_id1');

var si = s, no = n;

si.toUpperCase();
si.toUpperCase();

var studente1 = {
  "nome": "Giuseppe",
  "cognome": "Rossi",
  "età": 17
};

var text = "";

for (var x in studente1) {
  text += studente1[x] + " ";
  elemento.innerHTML ="Alunno: " + text;
}


var studente2 = {
  "nome": "Mario",
  "cognome": "Bianchi",
  "età": 18
};

var studente3 = {
  "nome": "Luigi",
  "cognome": "Mattarella",
  "età": 17
};

var studente4 = {
  "nome": "Francesca",
  "cognome": "Rossi",
  "età": 17
};

var studente5 = {
  "nome": "Maria",
  "cognome": "Verdi",
  "età": 20
};

var studenti = [studente2, studente3, studente4, studente5];
console.log(studenti);

var text2 = "";
for (var i = 0; i < studenti.length; i++) {
  text2 += "<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>";
  elemento1.innerHTML = text2;
}


inserimento = prompt("Vuoi inserire un nuovo utente? s/n")
inserimento.toUpperCase();

if (inserimento == si) {
  var nome = prompt("Inserisci il nome dello studente");
  var cognome = prompt("Inserisci il cognome dello studente");
  var eta = prompt("Inserisci l'età dello studente");
}
