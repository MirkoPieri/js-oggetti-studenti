// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var elemento = document.getElementById('mio_id');

var studenti = {
  "nome": "Giuseppe",
  "cognome": "Rossi",
  "età": 17
};

var text = "";

for (var x in studenti) {
  text += studenti[x] + " ";
  elemento.innerHTML ="Alunno: " + text;
}

console.log(studenti);
