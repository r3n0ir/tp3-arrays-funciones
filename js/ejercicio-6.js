/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un 
rectángulo, luego crear una función para calcular su perímetro y mostrarlo por 
pantalla.
La fórmula del perímetro  es p = 2*(a +b) */

let perimetro = (a, b) => 2 * (a + b);

alert("Ingrese los lados del rectangulo");
const lado_a = parseInt(prompt("Ingrese la medida del lado a"));
const lado_b = parseInt(prompt("Ingrese la medida del lado b"));
document.write(`<p>El perimetro es: ${perimetro(lado_a, lado_b)}<p>`);
