'use strict';

// FUNCION DE APOYO:contador de números aleatorios
// console.log(randomNumber);
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
const randomNumber = getRandomNumber(10);
console.log(randomNumber);

//Nueva tarea: Array que queremos pintar en la consola
const myWordList =  [
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
// escribimos una nueva función, la cual:
function writeMyArray(word, randomNumber) {
    // recorra el array "myWordList"
    for (let i=0; i<myWordList.length; i++) {
        
        console.log(word);
    }
    // use la función "writeThis" para pintar el Array

}

// FUNCION DE APOYO "writeThis"

function writeThis(word, lenght) {
    for (let i=0; i<lenght; i++) {
        console.log(word);
    }
}




writeThis(myWordList, randomNumber);

