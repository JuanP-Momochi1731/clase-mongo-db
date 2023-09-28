function countAllStars(galaxies) {
  var totalStars = galaxies.reduce(function (accumulator, stars) {
    return accumulator + stars;
  });
  return totalStars;
}

const galaxies = [10, 3, 2, 1, 6, 1, 9, 2];
var resultado = countAllStars(galaxies);
console.log(resultado);


