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

//  reso surnameArray ordinato secondo alfabeto
var surnameArray = surnameArray.sort();

// stampo posizione utente
var stampUserPosition = surnameArray.indexOf(userSurname);
console.log((stampUserPosition) + 1);

// stampo i nomi nella lista ordinata
for (var i=0; i<surnameArray.length; i++){

    var olSurnames = surnameArray[i];
    var surnameUnorderedList = document.getElementById('lista_cognomi').innerHTML;
    document.getElementById('lista_cognomi').innerHTML = surnameUnorderedList + "<li>" + olSurnames + "</li>";
    
}