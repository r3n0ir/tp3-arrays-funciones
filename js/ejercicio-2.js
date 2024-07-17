/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre 
de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona 
cancelar se debe mostrar el arreglo generado, luego realizar las siguientes 
acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y 
última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 
'Barcelona' */

let ciudades = [];
let ciudad = "";
do {
    ciudad = prompt("Ingrese una ciudad")
    ciudades.push(ciudad)
} while (ciudad !== null)
document.write(`<p>El arreglo tiene ${ciudades.length - 1} elementos<p>`)
document.write(`<p>El primer elemento del arreglo es: ${ciudades[0]}<p>`)
document.write(`<p>El tercer elemento del arreglo es: ${ciudades[2]}<p>`)
document.write(`<p>El ultimo elemento del arreglo es: ${ciudades[ciudades.length - 2]}<p>`)
ciudades[1] = "Barcelona"
document.write(`<p>Lista de ciudades:<p>`)
for (let i = 0; i < ciudades.length - 1; i++) {
    document.write(`<li>${ciudades[i]}</li>`);
}
