'use strict';

//Nueva tarea: Array que queremos pintar en la consola
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
// escribimos una nueva función, la cual:
function writeMyArray() {
  // recorra el array "myWordList"
  for (let i=0; i<myWordList.length; i++) {
    const arrayWord = myWordList[i].text;
    console.log(arrayWord);
  }
}
writeMyArray();




// FUNCION DE APOYO:contador de números aleatorios
// console.log(randomNumber);
// function getRandomNumber(max) {
//   return Math.ceil(Math.random() * max);
// }
// const randomNumber = getRandomNumber(10);
// console.log(randomNumber);