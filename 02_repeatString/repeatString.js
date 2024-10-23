const repeatString = function(palabraRepetida, numeroRepeticiones) {
    let resultado = ''; // Inicializa una variable para almacenar el resultado

    for (let i = 0; i < numeroRepeticiones; i++) { // Cambia <= por <
        if (numeroRepeticiones > 0) {
            resultado = resultado + palabraRepetida; // Añade la palabra a resultado
        }
    }
    
    return resultado; // Devuelve el resultado final
}

console.log(repeatString("hey", 10));

// Do not edit below this line
module.exports = repeatString;
