//Numbers with JavaScript basic operations
// Important: In the console the numbers are shown blue color, while text type data are shown in black

let numero1 = 30,
numero2 = 20,
numero3 = 20.20,
numero4 = .1020,
numero5 = -3,
resultado;
const DOLAR = 3277.40;

console.log(numero1); // Important: In the console the numbers are shown blue color, while text type data are shown in black

//Add
resultado = numero1 + numero2;
console.log("Add: " + resultado);

//subtract
resultado = numero1 - numero2;
console.log(`Subtract: ${resultado}`);

//multiply
resultado = numero1 * numero2;
console.log(`Multiply: ${resultado}`);

//Divide
resultado = numero1 / numero2;
console.log(`Divide: ${resultado}`);

//Module
resultado = numero1 % numero2;
console.log(`Module: ${resultado}`);

//Rounding to the nerarest number - redoneo al numero entero mas cercano
resultado = numero1 / numero2;
console.log(`Round: ${Math.round(resultado)}`);

//toFixed Devuelve un String con el número o variable sobre el que se invoca el método con tantos decimales como indique el parámetro
var numObj = 12345.6789;
console.log(`toFixed: ${numObj.toFixed()}`); //No show decimals
console.log(`toFixed: ${numObj.toFixed(2)}`); //show two decimals

//NaN Not a number 
var numberNAN = "1T23" * 2 ;
console.log(isNaN(numberNAN));





