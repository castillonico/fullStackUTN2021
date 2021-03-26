//Ejercicio 01 THE TEAM 
console.log("Ejercicio 01"); 
let teamName = "formación"; 
let people = ["Amalia", "Karla", "Silvana", "Manu", "John", "Mike"]; 

function imprimir(team, people) {
    cant = people.length;
    console.log(`Hay ${cant}, personas en el equipo ${team}`); 
}
imprimir(teamName, people); 

//-----------------------------------------------------------------
// Ejercicio 02 SQUARE OF PAIRS 
console.log("Ejercicio 02"); 
const primero = [2, 4, 6];
const segundo = [-3, 2, -8, 12, 5]; 
const tercero = [1, 2, 3, 4, 5];

//el enunciado pide los cuadrados de los positivos, creo la función y hago el map. 
const positivos = x => {
    if ( x > 0){
        return x = x*x;
    } else return x;
}
losCuadrados = primero.map(positivos);
console.log(`El cuadrado de los positivos de: ${primero} son: ${losCuadrados}`);
losCuadrados = segundo.map(positivos);
console.log(`El cuadrado de los positivos de: ${segundo} son: ${losCuadrados}`);
losCuadrados = tercero.map(positivos);
console.log(`El cuadrado de los positivos de: ${tercero} son: ${losCuadrados}`);

console.log("------------------------------------");
// En el titulo del ejercicio, hablaba de los pares, asi que también dejo esa función. 
const pares = x => {
    if (x % 2 == 0) {
        return x = x*x;
    } else return x;
};

todosLosPares = primero.map(pares);
console.log(`El cuadrado de los pares del: ${primero} son:  ${todosLosPares}`); 
todosLosPares = segundo.map(pares);
console.log(`El cuadrado de los pares del: ${segundo} son:  ${todosLosPares}`);
todosLosPares = tercero.map(pares);
console.log(`El cuadrado de los pares del: ${tercero} son:  ${todosLosPares}`);

//-----------------------------------------------------------------
// Ejercicio 03 Inventario 
const inventario = [ 
    {   descripción: "Coca-Cola", 
        categoria: "Bebidas", 
        precioUni: 3
    }, 
    {   descripción: "Cerveza", 
        categoria: "Bebidas", 
        precioUni: 12
    }, 
    {   descripción: "Manteca", 
        categoria: "Lacteos", 
        precioUni: 11
    } 
]; 


const objBebidas = x => { 
    if (x.categoria === "Bebidas"){ 
        let y = x.precioUni;
        return y ; 
    } 
}; 
const bebidas = inventario.filter(objBebidas); 
console.log(bebidas); 


//-----------------------------------------------------------------
// Ejercicio 04 CAPITALIZE 

/* let unaFrase = `laboratoria mexico`; 
console.log(unaFrase);
let arrPalabras = unaFrase.split(" "); 
console.log(arrPalabras);
for (let i = 0; i < arrPalabras.length; i++) {
    arrPalabras[i] = arrPalabras[i][0].toUpperCase() + arrPalabras[i].substr(1);
}
arrPalabras.join(" ");
console.log(arrPalabras); */

let frase = `laboratoria mexico`;
console.log(`La frase antes de capitalizar la primera letra de cada palabra: ${frase}`);

let arrSeparadas = frase.split(" ");
let recorridas = arrSeparadas.map( unaPalabra => {
    return unaPalabra[0].toUpperCase() + unaPalabra.substring([1]);
}); 

frase = recorridas.join(" ");
console.log(`La frase después de capitalizar la primera letra de cada palabra: ${frase}`);