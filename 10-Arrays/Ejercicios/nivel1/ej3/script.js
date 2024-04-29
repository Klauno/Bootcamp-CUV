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