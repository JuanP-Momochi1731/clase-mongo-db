function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, stars) {
    return accumulator + stars;
  }, 0); // El segundo argumento (0) es el valor inicial del acumulador.

  return totalStars;
}

const galaxies = [10, 3, 2, 1, 6, 1, 9, 2];
console.log(countAllStars(galaxies)); 
// Mostrará el total de estrellas en la consola

