let listaSuper = [];

listaSuper.push("sal");
listaSuper.push("azúcar");
listaSuper.push("pan");
listaSuper.push("leche");
listaSuper.push("huevos");

console.log("Primer elemento de la lista: " + listaSuper[0]);

let ultimoElemento = listaSuper.length - 1;

console.log("Último elemento de la lista: " + listaSuper[ultimoElemento]);

// Agrega dos productos al final
listaSuper.push("queso", "manzanas");

// Agrega dos productos al principio 
listaSuper.unshift("papel higiénico", "jabón");

// Determina la longitud 
let longitudActual = listaSuper.length;

// Saca un producto y  lo guarda en una variable llamada noHabia
let noHabia = listaSuper.pop();

// Saca un producto y  lo guarda en otra variable llamada comprado
let comprado = listaSuper.shift();

// Longitud del arreglo después de las modificaciones
let longitudDespues = listaSuper.length;

console.log("Longitud antes: " + longitudActual);
console.log("Producto sacado y guardado en noHabia: " + noHabia);
console.log("Producto sacado y guardado en comprado: " + comprado);
console.log("Longitud después: " + longitudDespues);

