//per prima cosa creiamo una lista di "mail"

var mail = [ "mailUno" , "mailDue" , "mailTre" , "mailQuattro" , "mailCinque" ];
console.log(mail);

var valoreUtente;
    valoreUtente = prompt("Inserisci la tua mail");
    console.log(valoreUtente);

var controllo = false;

    for ( var i = 0; i < mail.length; i++) {
    console.log(mail[i]);
    
    if(valoreUtente == mail[i]){
        controllo = true;
    };
}

if(controllo == true){
    alert("Benvenuto!");
}
else{
    alert("La tua mail non è presente!");
}