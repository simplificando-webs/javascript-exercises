# Exercise 04 - removeFromArray

Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Hints

The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

- you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
- how to remove a single element from an array
- how to deal with multiple optional arguments in a javascript function
- For more information, check out MDN's page on [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - scroll down to the bit about `Array.from` or the spread operator. You can also check out MDN's page on [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).



Objetivo del Ejercicio
Quieres crear una función que:

Recibe un array (por ejemplo, [1, 2, 3, 4]).
Recibe otros argumentos (por ejemplo, 3).
Elimina esos otros argumentos del array.
Por lo tanto, si llamas a la función con [1, 2, 3, 4] y 3, deberías obtener [1, 2, 4] como resultado.

Cosas a Considerar
Manipulación del Array:

Decide si quieres modificar el array original que pasas a la función o crear uno nuevo que contenga los elementos que quieres conservar. Ambas opciones son válidas.
Eliminar Elementos:

Piensa en cómo puedes eliminar un elemento específico de un array. Hay diferentes métodos en JavaScript que te permiten hacerlo.
Múltiples Argumentos:

Tienes que considerar que tu función puede recibir más de un argumento adicional. Así que deberías pensar en cómo manejar esos argumentos.
Investiga sobre el parámetro rest, que te permite recibir un número variable de argumentos en una función.
Uso de Métodos de Array:

Familiarízate con algunos métodos útiles de los arrays, como filter(), que puede ayudarte a crear un nuevo array excluyendo ciertos elementos.
Pasos para Resolverlo
Define la función: Comienza definiendo tu función y los parámetros que tomará (el array y los elementos a eliminar).

Manipula el Array: Decide si vas a usar el array original o crear uno nuevo. Si decides crear uno nuevo, necesitarás un método que te ayude a filtrar los elementos.

Itera sobre los Argumentos: Si decides que la función puede recibir múltiples elementos a eliminar, piensa en cómo iterar a través de esos elementos para asegurarte de que todos se eliminen.

Devuelve el Resultado: Asegúrate de devolver el array resultante, ya sea modificado o nuevo.

Recursos para Investigar
Métodos de Array: Busca información sobre filter(), splice(), o forEach().
Parámetro Rest: Investiga cómo se usan los parámetros rest en funciones para manejar múltiples argumentos.
MDN: Los enlaces que mencionaste en los hints son muy útiles para entender cómo funcionan los arrays y los argumentos en JavaScript.
Con estos puntos en mente, deberías poder abordar el ejercicio paso a paso. ¡Buena suerte y disfruta del proceso!



Tú dijiste:
no entiendo esta parte:

Recibe otros argumentos (por ejemplo, 3).
Elimina esos otros argumentos del array.
Por lo tanto, si llamas a la función con [1, 2, 3, 4] y 3, deberías obtener [1, 2, 4] como resultad
ChatGPT Plus
ChatGPT
¡Claro! Vamos a desglosar esa parte.

Explicación Detallada
Recibe otros argumentos:

Cuando llamas a la función, no solo le pasas un array (como [1, 2, 3, 4]), sino que también le pasas uno o más valores adicionales que quieres eliminar del array. En el ejemplo, pasas 3 como segundo argumento.
Eliminar esos otros argumentos:

El objetivo es que la función busque en el array los elementos que coinciden con los argumentos adicionales que has pasado y los elimine. En este caso, quieres que el número 3 se elimine del array.
Resultado esperado:

Entonces, si comienzas con el array [1, 2, 3, 4] y llamas a la función con 3, al final quieres que el array devuelto sea [1, 2, 4], es decir, que el 3 ya no esté presente.
Visualización
Entrada:

javascript
Copiar código
removeFromArray([1, 2, 3, 4], 3);
Proceso:

La función revisa el array [1, 2, 3, 4].
Busca el valor 3 en el array.
Elimina 3 del array.
Salida:

El resultado de la función debería ser [1, 2, 4].
Múltiples Argumentos
Además, si decides que la función puede recibir más de un número para eliminar, como en este ejemplo:

javascript
Copiar código
removeFromArray([1, 2, 3, 4], 3, 4);
En este caso, deberías eliminar tanto 3 como 4, y el resultado sería [1, 2].

Resumen
Tu función debe poder:

Tomar un array y uno o más valores adicionales.
Buscar esos valores en el array.
Eliminar todos los valores que coincidan.
Devolver el array resultante.
Espero que esto aclare tus dudas. ¡Sigue adelante y no dudes en preguntar más!
