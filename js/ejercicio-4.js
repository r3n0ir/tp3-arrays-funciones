/* 4- Escribir el código de una función a la que se pasa como parámetro un 
número entero y devuelve como resultado una cadena de texto que indica si el 
número es par o impar. Mostrar por pantalla el resultado devuelto por la 
función. */

let paridad = (numero) => {
    if (numero % 2 === 0) {
        document.write(`<p>El numero ${numero} es par<p>`)
    } else {
        document.write(`<p>El numero ${numero} es impar<p>`)
    }
}

const num = prompt("Ingrese un numero:")
paridad(num);