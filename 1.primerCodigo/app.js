//declaration of variables
let nombre = prompt('Preguntas: \n\n¿Cuál es tu nombre?');
let edad = prompt('Preguntas \n\n¿Cuál es tu edad?');

//write in html element
document.getElementById('app').innerHTML = `Bienvenido ${nombre} ${edad} años`;