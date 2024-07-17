/* 7- Escriba un script que muestre la tabla de multiplicar de un número 
ingresado por pantalla, la creación de la tabla debe ser realizada con una 
función y mostrar solo los resultados del 1 al 10 del número elegido por el 
usuario. */

let tabla = (numero) => {
    for (let i = 0; i <= 10; i++) {
        document.write(`<p>* ${numero} x ${i} = ${numero * i}<p>`)
    }
}

const numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar:"));
document.write(`<p>Tabla del ${numero}:<p>`)
tabla(numero);