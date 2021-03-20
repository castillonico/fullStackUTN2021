/*Ejercicio 01 */
var elemento;
elemento = document.querySelector("#holaMundo"); 
const boton = document.querySelector("#cambioTexto");
boton.addEventListener("click", cambiarTxt);
function cambiarTxt(){

    elemento.innerHTML = "Hello JavaScriptWorld";

}
console.log(elemento); 