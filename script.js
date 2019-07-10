// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var elemento = document.getElementById('mio_id');
var elemento1 = document.getElementById('mio_id1');
var elemento2 = document.getElementById('mio_id2');

// variabili per scelta utente se aggiungere o meno un nuovo studente
var si = "s", no = "n";


var siMaiusc = si.toUpperCase();
var noMaiusc = no.toUpperCase();

// primo array ogetto
var studente1 = {
  "nome": "Giuseppe",
  "cognome": "Rossi",
  "età": 17
};

var text = "";

// ciclo per stampa array oggetto
for (var x in studente1) {
  text += studente1[x] + " ";
  elemento.innerHTML ="Alunno: " + text;
}


// seconda parte esercizio
// creazione array con al suo interno array oggetto
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

// creazione array con al suo interno altri array oggetto
var studenti = [studente2, studente3, studente4, studente5];
console.log(studenti);

// stampa dei vari array
var text = "";
for (var i = 0; i < studenti.length; i++) {
  text += "<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>";
  elemento1.innerHTML = text;
}

// scelta utente se aggiungere nuovo studente
var z = true;
while (z == true) {
  inserimento = prompt("Vuoi inserire un nuovo utente? s/n")
  var inserimentoMaiusc = inserimento.toUpperCase();

  // if per inserimento o meno del nuovo studente
  if (inserimentoMaiusc == siMaiusc) {
    var studente6 = {};
    studenti.push(studente6);
    var nome = prompt("Inserisci il nome dello studente");
    var cognome = prompt("Inserisci il cognome dello studente");
    var eta = parseInt(prompt("Inserisci l'età dello studente"));
    studente6.nome = nome;
    studente6.cognome = cognome;
    studente6.età = eta;
    console.log(studenti);

    // stampa del nuovo array aggiornato
    var text = "";
    for (var i = 0; i < studenti.length; i++) {
      text += "<li>" + studenti[i].nome + " " + studenti[i].cognome + "</li>";
      elemento2.innerHTML = text;
    }
  } else {
    z = false;
  }
}
