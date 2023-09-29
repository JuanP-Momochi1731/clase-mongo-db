function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, stars) {
    return accumulator + stars;
  });
  return totalStars;
}

const galaxies = [10, 3, 2, 1, 6, 1, 9, 2];
var resultado = countAllStars(galaxies);
console.log(resultado);

// ACTIVIDAD coger 5 métodos cualquiera y combinarlo con array functions//

//SOME//
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);
//se usa para verificar si al menos un número en el array es par//

//SLICE//
const fruits = ['manzana', 'banano', 'cereza', 'coco', 'kiwi'];
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits);
//para crear un nuevo array con elementos seleccionados desde el índice 1 (inclusive) hasta el índice 4 (exclusivo).//

//FIND//
const personas = [
  { nombre: 'Alejandro', edad: 30 },
  { nombre: 'Juan Pablo', edad: 25 },
  { nombre: 'Charlotte', edad: 35 },
];
const resultado = personas.find((persona) => persona.edad === 25);
console.log(resultado);
//buscar un objeto en el array que cumple con una condición específica (en este caso, una persona de 25 años).//

//concat//
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray);
//para combinar dos arrays en uno solo.//

//unshift//
const nombres = ['Ana', 'Juan', 'Luis'];
const nuevoNombre = 'María';
nombres.unshift(nuevoNombre);
console.log(`Array actualizado: ${nombres}`);
//se usa para agregar un nuevo nombre al principio del array de nombres.//




