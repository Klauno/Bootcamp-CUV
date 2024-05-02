let peliculas = [
  { titulo: "Busqueda implacable", rating: 5, loHasVisto: true },
  { titulo: "Norbit", rating: 3, loHasVisto: false },
  { titulo: "Mini espías", rating: 2, loHasVisto: true },
  { titulo: "La vida es bella", rating: 5, loHasVisto: false }
];

for (let pelicula of peliculas) {
  let visto = pelicula.loHasVisto ? "Viste" : "No viste";
  console.log(`${visto} "${pelicula.titulo}" - ${pelicula.rating} estrellas`);
}
