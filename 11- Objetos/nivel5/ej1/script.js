function totalArticulos(ecommerce) {
  let resultado = [];
  
  ecommerce.forEach(producto => {
    let valorTotal = producto.precio * producto.articulos;
    let objetoResultado = {};
    objetoResultado[producto.nombre] = valorTotal;
    resultado.push(objetoResultado);
  });
  
  return resultado;
}

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notebook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
];

console.log(totalArticulos(ecommerce));

