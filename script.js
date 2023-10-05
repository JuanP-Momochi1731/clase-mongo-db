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

//Reto 1

const getNestedRecordsExample = () => [
  
];

const totalMatriculasNormales = (data) => {
  const total = data.reduce((accumulator, item) => {
    if (item.detalles.descripcion === 'matricula normal') {
      return accumulator + item.detalles.valorMatricula;
    }
    return accumulator;
  }, 0);

  return total;
};

const registros = getNestedRecordsExample();
const total = totalMatriculasNormales(registros);

console.log('El total de matrículas normales es: ', total);

//Reto 2

const getNestedRecordsExample = () => [

];

const obtenerTelefonosEstudiantes = (data) => {
  const telefonos = data.map((item) => item.detalles.contacto.telefono);
  return telefonos;
};

const registros = getNestedRecordsExample();
const telefonosEstudiantes = obtenerTelefonosEstudiantes(registros);

console.log('Números de teléfono de los estudiantes: ', telefonosEstudiantes);

//Reto 3

const getNestedRecordsExample = () => [

];

const obtenerEstudianteConMayorMatricula = (data) => {
  let estudianteConMayorMatricula = null;
  let valorMatriculaMayor = 0;

  for (const estudiante of data) {
    if (estudiante.detalles.valorMatricula > valorMatriculaMayor) {
      valorMatriculaMayor = estudiante.detalles.valorMatricula;
      estudianteConMayorMatricula = estudiante.nombre;
    }
  }

  return estudianteConMayorMatricula;
};

const registros = getNestedRecordsExample();
const estudianteConMayorMatricula = obtenerEstudianteConMayorMatricula(registros);

console.log('El estudiante con la matrícula de mayor valor es: ', estudianteConMayorMatricula);

//Reto 4

const getNestedRecordsExample = () => [
  
];

const obtenerCorreoEstudianteMatriculaCondicional = (data) => {
  const estudianteConMatriculaCondicional = data.find((estudiante) => estudiante.detalles.descripcion === 'matricula condicional');
  
  if (estudianteConMatriculaCondicional) {
    return estudianteConMatriculaCondicional.detalles.contacto.email;
  } else {
    return 'No se encontró un estudiante con matrícula condicional.';
  }
};

const registros = getNestedRecordsExample();
const correoEstudianteMatriculaCondicional = obtenerCorreoEstudianteMatriculaCondicional(registros);

console.log('El correo del estudiante con matrícula condicional es: ', correoEstudianteMatriculaCondicional);







