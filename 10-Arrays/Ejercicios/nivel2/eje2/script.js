// Creación del arreglo vacío para la lista de supermercado
let listaSuper = [];

// Agregar productos a la lista de supermercado
listaSuper.push("sal");
listaSuper.push("azúcar");
listaSuper.push("pan");
listaSuper.push("leche");
listaSuper.push("huevos");

// Acceder al primer elemento de la lista
console.log("Primer elemento de la lista: " + listaSuper[0]);

// Crear una variable para almacenar la posición del último elemento
let ultimoElemento = listaSuper.length - 1;

// Acceder al último elemento de la lista usando la variable ultimoElemento
console.log("Último elemento de la lista: " + listaSuper[ultimoElemento]);



// Agregar dos productos al final
listaSuper.push("queso", "manzanas");

// Agregar dos productos al principio 
listaSuper.unshift("papel higiénico", "jabón");

// Determinar la longitud del arreglo
let longitudActual = listaSuper.length;

// Sacar un producto y guardarlo en una variable llamada noHabia
let noHabia = listaSuper.pop();

// Sacar un producto y guardarlo en otra variable llamada comprado
let comprado = listaSuper.shift();

// Determinar la longitud del arreglo después de las modificaciones
let longitudDespues = listaDeSuper.length;

console.log("Longitud antes: " + longitudActual);
console.log("Producto sacado y guardado en noHabia: " + noHabia);
console.log("Producto sacado y guardado en comprado: " + comprado);
console.log("Longitud después: " + longitudDespues);

// Parte 1: Lista de Súper - Parte III

// Paso 1: Usar un for loop para mostrar cada ítem de listaDeSuper en la consola


for (let i = 0; i < listaSuper.length; i++) {
  console.log(listaSuper[i]);
}

// Paso 2: Refactorizar el código dentro de una función llamada logItems
function logItems(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}

// Paso 3: Invocar logItems dos veces, pasando listaDeSuper y otro arreglo nuevo
logItems(listaSuper);
logItems(["papel", "jabón", "detergente"]);

// Paso 4: Refactorizar el código de logItems para usar forEach en lugar de un for loop
function logItems(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}
// Parte 2: Reverse

// Paso 1: Crear la función printReverse
function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  
  // Paso 2: Crear la función reverser
  function reverser(arr) {
    var reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  // Paso 3: Testear las funciones
  printReverse(["a", "b", "c"]);
  printReverse([1, 2, 3, 4]);
  console.log(reverser(["a", "b", "c"])); // ["c","b", "a"]
  console.log(reverser([1, 2, 3, 4])); // [4, 3, 2, 1]