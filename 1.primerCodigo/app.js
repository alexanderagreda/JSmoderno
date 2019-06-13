//declaration of variables
let nombre = prompt('¿Cuál es tu nombre?');
let edad = prompt('¿Cuál es tu edad?');

//write in html element
document.getElementById('app').innerHTML = `Bienvenido ${nombre} ${edad} años`;