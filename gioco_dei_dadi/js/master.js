var inizioGioco;
inizioGioco = document.getElementById("start");

inizioGioco.addEventListener( "click",
    function()
        {
            var valoreUtente;
            valoreUtente = Math.round(Math.random()*6 + 1);
            console.log(valoreUtente);
            document.getElementById("risultato_giocatore").innerHTML = "il tuo numero è : " + valoreUtente; 
            
            var valorePC;
            valorePC = Math.round(Math.random()*6 + 1);
            console.log(valorePC);
            document.getElementById("risultato_pc").innerHTML = "il numero del tuo avversario è : " + valorePC;

            if(valoreUtente > valorePC) 
            {
                document.getElementById("risultato").innerHTML = "Complimenti hai vinto!"
            }
            else if(valorePC > valoreUtente)
            {
                document.getElementById("risultato").innerHTML = "Peccato hai perso!"
            }
            else 
            {
                document.getElementById("risultato").innerHTML = "Avete pareggiato!"
            };
        }
)

var ricomincia;
ricomincia = document.getElementById("ripeti");

ricomincia.addEventListener( "click",
        function()
        {
            location.reload();
        }
)