/*
Lista de compras
Pedir al usuario que ingrese una lista de productos a comprar.
Mostrar cuantos productos se agregaron a la lista.
Aclaracion: si ingresa "NO", significa que no quiere ingresar más productos
*/

let prod = prompt("Ingresa un producto a comprar o escribe 'NO' para finalizar:");
let lista =[];
let i = 0;


while(prod != "NO") {
  lista[1] = prod;
  prod = prompt("Ingresa un producto a comprar o escribe 'NO' para finalizar:");
  i++;
}

alert("La Cantidad total de productos agregados es" + lista.length);
alert("Los productos son: " + lista);
