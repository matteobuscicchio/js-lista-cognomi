// prompt di domanda
var userSurname = prompt("Salve, qual'è il tuo cognome?");
console.log(userSurname);

// lista cognomi
var surnameArray = [
    "Bianchi", 
    "Verdi", 
    "Duzioni",
    "Balsano", 
    "Rossi"
]

// aggiungi cognome
surnameArray.push(userSurname);
console.log(surnameArray.sort());

// stampo i nomi nella lista ordinata
for (var i=0; i<surnameArray.length; i++){

    var olSurnames = surnameArray[i];
    var surnameOrderedList = document.getElementById('lista_cognomi').innerHTML;
    document.getElementById('lista_cognomi').innerHTML = surnameOrderedList + "<li>" + olSurnames + "</li>";
    
}

// stampo posizione utente
var stampUserPosition = surnameArray.indexOf(userSurname);
console.log((stampUserPosition) + 1);