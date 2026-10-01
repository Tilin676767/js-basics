// dia1.js
// Día 1: primeros ejercicios de freeCodeCamp (Basic JavaScript)

// 1. Comment Your JavaScript Code
// Esto es un comentario de una línea
/* 
  Esto es un comentario 
  de varias líneas
*/

// 2. Declare JavaScript Variables
let miNombre;
let miEdad;

// 3. Storing Values with the Assignment Operator
miNombre = "Fernan";
miEdad = 17;

// 4. Assigning the Value of One Variable to Another
let tuNombre = miNombre; // tuNombre ahora vale "Fernan"

// 5. Initializing Variables with the Assignment Operator
let miCiudad = "Caracas";

// 6. Understanding Uninitialized Variables
let sinValor; // por ahora no tiene valor (undefined)
console.log("sinValor:", sinValor);

// 7. Understanding Case Sensitivity in Variables
let miVariable = 1;
let MiVariable = 2;
let mivariable = 3;

console.log("miVariable, MiVariable, mivariable:", miVariable, MiVariable, mivariable);

// 8. Explore Differences Between the var and let Keywords
var x = 1;
let y = 2;

x = 10; // se puede reasignar
y = 20; // también se puede reasignar

console.log("x:", x, "y:", y);

// 9. Declare a Read-Only Variable with the const Keyword
const PI = 3.1416;

console.log("PI:", PI);

// PI = 3; // <- si descomentas esta línea, te va a dar error

// 10. Imprimir resultados en consola
console.log("miNombre:", miNombre);
console.log("miEdad:", miEdad);
console.log("tuNombre:", tuNombre);
console.log("miCiudad:", miCiudad);