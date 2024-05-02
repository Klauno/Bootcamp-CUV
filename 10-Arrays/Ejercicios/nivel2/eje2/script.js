let listaSuper = [];

listaSuper.push("sal");
listaSuper.push("azúcar");
listaSuper.push("pan");
listaSuper.push("leche");
listaSuper.push("huevos");

console.log("Primer elemento de la lista: " + listaSuper[0]);

let ultimoElemento = listaSuper.length - 1;

console.log("Último elemento de la lista: " + listaSuper[ultimoElemento]);


listaSuper.push("queso", "manzanas");


listaSuper.unshift("papel higiénico", "jabón");


let longitudActual = listaSuper.length;


let noHabia = listaSuper.pop();


let comprado = listaSuper.shift();


let longitudDespues = listaSuper.length;

console.log("Longitud antes: " + longitudActual);
console.log("Producto sacado y guardado en noHabia: " + noHabia);
console.log("Producto sacado y guardado en comprado: " + comprado);
console.log("Longitud después: " + longitudDespues);


// Parte III

for (let i = 0; i < listaSuper.length; i++) {
  console.log(listaSuper[i]);
}

function logItems(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}

logItems(listaSuper);
logItems(["papel", "jabón", "detergente"]);

// Función para imprimir los elementos de un arreglo en orden inverso
function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

// Función para invertir los elementos de un arreglo y devolver un nuevo arreglo invertido
function reverser(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// Ejemplo de uso de printReverse
console.log("Imprimiendo arreglo en orden inverso:");
printReverse(listaSuper);

// Ejemplo de uso de reverser
let invertedArray = reverser(listaSuper);
console.log("Nuevo arreglo invertido:", invertedArray);


// Parte III

for (let i = 0; i < listaSuper.length; i++) {
  console.log(listaSuper[i]);
}

function logItems(arr) {
  arr.forEach(function(item) {
    console.log(item);
  });
}

logItems(listaSuper);
logItems(["papel", "jabón", "detergente"]);


function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}


function reverser(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}



console.log("// Ejemplo de printReverse([\"a\", \"b\", \"c\"])");
printReverse(["a", "b", "c"]);


console.log("// Ejemplo de printReverse([1, 2, 3, 4])");
printReverse([1, 2, 3, 4]);


console.log("// Ejemplo de reverser([\"a\", \"b\", \"c\"]) // [\"c\",\"b\", \"a\"]");
console.log(reverser(["a", "b", "c"]));


console.log("// Ejemplo de reverser([1, 2, 3, 4]) // [4, 3, 2, 1]");
console.log(reverser([1, 2, 3, 4]));
