var errores = document.querySelector('#errores')
var pts = 0;
var repetida = false;
var contadorCanvas = 200;
var letrasUsadas = [];
var considencias = false;

function verificador(){

    console.log(palabraEscogida)
    repetida = false;
    var spans2 = document.querySelectorAll('.letras')
    console.log(spans2)
    for(var i = 0; i < letrasUsadas.length ;i++){
        if(mayuscula == letrasUsadas[i]){
            repetida = true;
            break;
        }
    }
    if(repetida == false ){
        letrasUsadas.push(mayuscula);
            considencias = false;

        for(var i = 0 ; i < palabraEscogida.length; i++){
            if(mayuscula == palabraEscogida.charAt(i)){
             pts ++;
             considencias = true; 

                dibujar()
             spans2[i].classList.remove('hidden');

             if(pts == palabraEscogida.length){
                ganastes();
                removeEventListener("keypress",verificador)
            }   
            
            }
               
        }
        if(considencias ==  false){
            intentos ++;
            dibujar()
            errores.innerHTML +=" " + mayuscula;

        }   

        
    }
}
        
addEventListener("keypress",verificador);

   