'use strict';

//Nueva tarea: escribimos una nueva función que permite como parámetro un array con objetos y nos los recorre y usa la función writeThis para pintar en la consola cada palabra "text" del objeto un número de veces definido en cada objeto como "total"

// Array que queremos pintar en la consola
const myWordList = [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];
// FUNCIÓN PEDIDA:
function writeMyArray(array) {
  // con un bucle que recorra el array "myWordList"
  for (let i=0; i<array.length; i++) {
    // meto en una constante las palabras del array
    const arrayWord = array[i].text;
    // número de veces a escribir cada palabra del array
    const textTotal = array[i].total;
    // y ejecuto la función writeThis con estas constantes como parámetros
    writeThis(arrayWord, textTotal);
  }
}
// EJECUTO FUNCIÓN
writeMyArray(myWordList);

// FUNCIÓN DE APOYO "writeThis"
function writeThis(word, lenght) {
  for (let i = 0; i < lenght; i++) {
    console.log(word);
  }
}