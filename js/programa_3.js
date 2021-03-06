'use strict';

//este ejercicio realice las advertencias con alertas, 
//tenia pensado hacerlas agregandolas abajo del input modificando las clases y poniendolas en rojo o verde
//en caso de que esten bien o mal (para que quede mas bonito)

function comprobarpassword(){

    let password = document.getElementById('contraseña').value;

    let espacios = comprobarespacios(password); //true TIENE espacios, false SI NO TIENE espacios
    
    let signos = comprobarsignos(password);  //lo mismo con los signos (1 o mas)
    
    let cantidadcaracteres = password.length; //entre 8 y 15 inclusive

    let cantidadmayusculas = comprobarmayusculas(password); //2 mayusculas o mas

    let numerosunicos = comprobarnumerosrepetidos(password); //3 numeros unicos o mas

    //si esta todo bien 
    if ((!signos && !espacios) && (cantidadmayusculas > 1) && (numerosunicos > 2) && (cantidadcaracteres > 7) && (cantidadcaracteres < 16)) {
        alert("La contraseña es valida")
    }

    //advertencias de error

    if(espacios){
        alert("contiene espacios")
    }
    
    if (signos) {
        alert("debe tener al menos un signo")
    }

    if (cantidadcaracteres < 8 || cantidadcaracteres>15) {
        alert("la contraseña debe tener entre 8 y 15 caracteres")
    }

    if (cantidadmayusculas < 2) {
        alert("la contraseña debe tener al menos 2 letras mayusculas")
    }
    
    if (numerosunicos < 3) {
        alert("la contraseña debe tener al menos 3 numeros no repetidos")
    }
}

function comprobarespacios(pw){
    
    let password2 = pw.replace(/ /g, "")  //quito los espacios

    if (pw != password2) { //comparo la misma password con y sin espacios
        return true
    }
    else{ 
        return false
    }
}

function comprobarsignos(pw){

    let password2 = pw.replace(/[^a-zA-Z0-9]/g, ''); //elimino los signos con expresion regular

    if (pw != password2) {      //comparo la misma password con o sin signos
        return false            
    }
    else{ 
        return true
    }
}

function comprobarmayusculas(pw){
    
    let cantidad = 0;
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //hago un recorrido de cada una de las letras mayusculas y comparo
    
    let arraypw = Array.from(pw);
    let arraymayus = Array.from(mayusculas);

    arraymayus.map( mayuscula => {
        arraypw.map(letrapw => {
                    if(mayuscula == letrapw){
                        cantidad++;
                    }
        })              
    });
    return cantidad                                //devuelvo la cantidad de letras mayus
}

function comprobarnumerosrepetidos(pw){ //en esta funcion ordeno la contraseña ingresada (la transformo en un arreglo) para luego recorrerla y verificar los numeros repetidos 

    let arraypassword = Array.from(pw); //transformo el string en un array
    let numeros = 0;

    arraypassword.sort((a,b) => {  //ordeno la password
        if(a>b){
          return 1;
        }
        if(a<b){
          return -1;
        }
        return 0;
      })

    for(let i = 0; i < arraypassword.length; i++){
        if( !isNaN(arraypassword[i]) && (arraypassword[i] != arraypassword[i+1] && arraypassword[i] != arraypassword[i-1]) ){ //si el caracter es un numero unico, ya que el siguiente y anterior en el arreglo son diferentes (estan ordenados) se suma el contador
            numeros++;
        }
    }
    return numeros;
}

document.querySelector("#boton3").addEventListener("click",comprobarpassword);