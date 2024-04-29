let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";

//Convertir el poema en un arreglo
let arregloDesordenado = poemaDesordenado.split(' ');

// Instanciar un nuevo arreglo para almacenar el poema ordenado
let arregloOrdenado = [];

// Ordenar el poema
while (arregloDesordenado.length > 0) {
  arregloOrdenado.push(arregloDesordenado.shift());
  arregloOrdenado.push(arregloDesordenado.pop());
}

//Crear la variable poemaOrdenado
let poemaOrdenado = arregloOrdenado.join(' ');

console.log(poemaOrdenado);
