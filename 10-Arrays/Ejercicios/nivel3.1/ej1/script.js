let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";

let arregloDesordenado = poemaDesordenado.split(' ');

let arregloOrdenado = [];


while (arregloDesordenado.length > 0) {
  arregloOrdenado.push(arregloDesordenado.shift());
  arregloOrdenado.push(arregloDesordenado.pop());
}

let poemaOrdenado = arregloOrdenado.join(' ');

console.log(poemaOrdenado);
