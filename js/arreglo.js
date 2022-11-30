
    function aleatorio(inferior,superior){
        numPosibilidades = superior - inferior + 1
        aleat = Math.random() * numPosibilidades
        aleat = Math.floor(aleat)
        return parseInt(inferior) + aleat
        }
       

var palabras = ['JAVA', 'HTML', 'MEXICO', 'GUATEMALA', 'NICARAGUA', 'AMERICA','CELULAR','LLUVIA','DISCORD','ALURA','PANAMA','HONDURAS','TECLADO','MOUSE','MONITOR','TORRE','CLASES'];
var palabraEscogida = palabras[aleatorio(0,palabras.length-1)] //
var aciertos = [];
console.log(palabras)
