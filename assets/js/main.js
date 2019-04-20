'use strict';

//Nueva tarea: pintar los elementos del array obtenido de la API con URL: `https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js`

fetch ('https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js')
 .then (function (response) {
    return response.json();
 })
 .then (function (data) {
    // console.log(data.results);
    writeMyArray(data.results);
    // y si quiero que se me pinten en el html en el body:
    const arrayWrited = writeMyArray(data.results);
    document.body.innerHTML = arrayWrited;
 });


// FUNCIÓN QUE RECORRE EL ARRAY "RESULTS" DE LA API:
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

// FUNCIÓN DE APOYO "writeThis"
function writeThis(word, lenght) {
  for (let i = 0; i < lenght; i++) {
    console.log(word);
  }
}