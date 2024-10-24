const convertToCelsius = function(faren) {
  resultado = Math.round((faren - 32) * 5/9);
  return resultado;
};

const convertToFahrenheit = function(celcius) {
  resultado = Math.round((celcius * 9/5) + 32);
  return resultado;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
