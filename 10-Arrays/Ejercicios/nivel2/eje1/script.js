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
