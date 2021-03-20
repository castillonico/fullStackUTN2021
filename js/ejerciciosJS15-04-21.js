/*Ejercicio 01 */
var elemento1;
elemento1 = document.querySelector("#holaMundo"); /*tomo el elemento holaMundo en una variable*/
const boton = document.querySelector("#cambioTexto"); /*selecciono el boton, para agregar un listener*/
boton.addEventListener("click", cambiarTxt); /*escucho por un click en el boton, para llamar a la funcion*/

function cambiarTxt(){ /*la funcion cambiara el texto en la variable seleccionada*/
    elemento1.innerHTML = "Hello JavaScriptWorld!"; 
    console.log("Resolución del Ejercicio 01");
}

/*Ejercicio 02*/
const btnAumTam = document.querySelector("#cambioTamano");
btnAumTam.addEventListener("click", aumentarTam);

function aumentarTam(){
    document.getElementById("txtACambiar").style.fontSize="40px";
    console.log("Resolucion del Ejercicio 02");
}


/*Ejercicio 03*/
const mostrar = document.querySelector("#btnMostrar"); /*selecciono el botón de mostrar*/
mostrar.addEventListener("click", fncMostrar); /*agrego listener al botón*/
const ocultar =document.querySelector("#btnOcultar"); /*selecciono el botón de ocultar*/
ocultar.addEventListener("click", fncOcultar); /*agrego listener a ocultar*/

function fncMostrar(){
    console.log ("funcion mostrar");
    document.getElementById("pMostrar").style.visibility = "visible";
}

function fncOcultar(){
    console.log ("funcion ocultar");
    document.getElementById("pOcultar").style.visibility = "hidden";

}