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
const ocultar = document.querySelector("#btnOcultar"); /*selecciono el botón de ocultar*/
ocultar.addEventListener("click", fncOcultar); /*agrego listener a ocultar*/
function fncMostrar(){
    console.log ("muestro parrafo oculto");
    document.getElementById("pMostrar").style.visibility = "visible"; /*cambio el estilo CSS para mostrar el parrafo oculto*/
}
function fncOcultar(){
    console.log ("oculto un parrafo que estaba visible");
    document.getElementById("pOcultar").style.visibility = "hidden"; /*cambio el estilo CSS para ocultar el parrafo visible*/
}

/*Ejercicio 04*/ 
/* Es mostrar una URL que ya está resuelto en HTML */

/*Ejercicio 05*/ 


/*Ejercicio 06 */
const sobreEj06 =document.querySelector("#ejercicio06");
sobreEj06.addEventListener("mouseover", cambioFondo);
sobreEj06.addEventListener("mouseout", resetEj06);
function cambioFondo(){
    document.getElementById("ejercicio06").style.background = "#e1e0e4";
}
function resetEj06(){
    document.getElementById("ejercicio06").style.background = "#fefefe";
}
const btnOscuro = document.querySelector("#dark");
btnOscuro.addEventListener("click", goDark); 
function goDark () {
    console.log("cambio a modo oscuro");
    document.body.style.background = "#444645";
}
const btnAzul = document.querySelector("#goBlue"); 
btnAzul.addEventListener("click", goAzul); 
function goAzul(){
    console.log("pasamos a modo azul"); 
    document.body.style.background = "#96c2f1"; 
}
const btnResetear = document.querySelector("#resetear"); 
btnResetear.addEventListener("click", goClaro);
function goClaro(){
    console.log("pasamos a Modo Claro"); 
    document.body.style.background = "#fefefe"; 
}


/* Ejercicio 07 
const txtMinus = document.getElementById("aMayus");
const txtMayus = txtMinus.toUpperCase.call();
console.log(txtMinus); */

/* Ejercicio 08*/ 
var cantA; 
var aContar; 
aContar = document.getElementById("conteo");
console.log(aContar);
contar();
function contar(){
    cantA = aContar.getElementsByTagName('a').length;
    console.log (cantA);
}
