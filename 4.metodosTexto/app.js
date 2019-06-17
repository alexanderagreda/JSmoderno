//Longitud de carcateres
let texto = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto';
let longitud = texto.length;
//Escapar caracteres y mostrar el valor de las variables
console.log(`Longitud del texto \'${texto}\' es: ${longitud} caracteres`);

//Transformar texto a mayusculas
console.log('Texto en mayusculas: ' + texto.toUpperCase());

//Transformar texto a minusculas
console.log('Texto en minusculas: ' + texto.toLowerCase());

//Retornar la posicion en el resultado de busqueda un texto o frase.
// en el evento de no encontrar el dato retorna -1
console.log(`El texto \'archivos\' se encuentra en la posisicion ${texto.indexOf('archivos')} del texto`);

//extrar parte de un texto desde una posicion y un numero de caracteres
console.log('Extraer desde la posicion 3 hasta el caracter 20: ' + texto.substring(3,20));

//extrar de derecha a izquierda
console.log('Extraer 20 caracteres desde el final hacia el principio principio: ' +texto.slice(-20));

//Dividir una cadena de texto en varias cadenas
let pizza = "porción1 porción2 porción3 porción4 porción5 porción6";
let porciones = pizza.split(' ');//espacio es el separador de cadenas de texto
console.log(porciones[2]); //porción3

//Reemplazar un texto o porcion de texto por otra
let contenido = 'Modulo de JavaScript y PHP';
contenido = contenido.replace('PHP','NodeJS');
console.log(contenido);

//Buscar un texto, frase o porcion de texto y retornar true o false
console.log(`La palabra \'Modulo\' existe en el texto: \'${contenido}\' resultado: ${contenido.includes('Modulo')}`);

//Repetir un texto una determinada cantidad de veces
console.log(`Utilizando el metodo repeat: ${contenido.repeat(10)}`);



