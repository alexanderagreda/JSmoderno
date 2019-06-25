//Data types in JavaScript
//Datos primitivos o elementales - data primivite

//undefined
let valor;
console.log("Undeclared variable: " + typeof valor);

//string
valor = "";
console.log("Initialize string: " + typeof valor);

//Number
valor = -30;
console.log("Initialize number: " + typeof valor);

//Boolean
valor = true;
console.log("Initialize bolean: " + typeof valor);

//null
valor = null;
console.log("Initialize null: " + typeof valor);

//Number
valor = "1G2" * 2;
console.log("Initialize string: " + typeof valor + " "+ valor);

//Datos de referencia o de tipo objeto -----------

//Array - Object
valor= [1,2,3,5,6];
console.log("Initialize array: " + typeof valor);

//Object
valor = {id: "1", name: "Paul"};
console.log("Initialize object " + typeof valor);

///Date - object
valor = new Date();
console.log("Constructor date: " + typeof date);


