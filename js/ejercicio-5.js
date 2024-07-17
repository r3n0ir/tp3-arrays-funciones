/* 5- Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, la 
función determina si esa cadena está formada sólo por mayúsculas, sólo por 
minúsculas o por una mezcla de ambas. */

let mayus_minus = (cadena) => {
    let valor = /[a-z]/.test(cadena) && /[A-Z]/.test(cadena);
    if (valor === true) {
        document.write(`<p>La palabra:  ${cadena}  esta formada por mayusculas y minusculas<p>`)
    } else {
        valor = /^[A-Z]+$/.test(cadena);
        if (valor === true) {
            document.write(`<p>La palabra:  ${cadena}  esta formada por mayusculas<p>`)
        } else {
            valor = /^[a-z]+$/.test(cadena);
            if (valor === true) {
                document.write(`<p>La palabra:  ${cadena}  esta formada por minusculas<p>`)
            }
        }
    }
}

const palabra = prompt("Ingrese una palabra");
mayus_minus(palabra);