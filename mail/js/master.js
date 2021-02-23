//per prima cosa creiamo una lista di "mail"

var mail = [ "mailUno" , "mailDue" , "mailTre" , "mailQuattro" , "mailCinque" ];
console.log(mail);

//diamo un promt per l'inserimento della mail

var valoreUtente;
valoreUtente = prompt("Inserisci la tua mail");
console.log(valoreUtente);

// facciamo in modo che il sito riconosca i valori della variabile mail

for (var i = 0; i < mail.length; ++i){
    console.log(mail[i]);

    //verifichiamo se la mail scritta è congruente ai valori salvati e facciamo avvenire due cose
    //se il valore è uguale
    if (valoreUtente == mail[i])
    {
        alert("Benvenuti nel sito!");
    }
};

