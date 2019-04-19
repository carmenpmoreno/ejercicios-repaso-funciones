'use strict';

// FUNCION DE APOYO:contador de números aleatorios
const randomNumber = getRandomNumber(10);
// console.log(randomNumber);
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function writeThis(word, lenght) {
    for (let i=0; i<lenght; i++) {
        console.log(word);
    }
}

writeThis ('Patata', randomNumber);
writeThis ('Aguacate', randomNumber);
writeThis('Pizza', randomNumber);

