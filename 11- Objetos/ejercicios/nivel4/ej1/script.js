let actoresVocales = [];
let peliculas = [];
let actoresPrincipalesPorPelicula = {
  "Titanic": "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  "Matrix": "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
  "Forrest Gump": "Tom Hanks",
  "Pulp Fiction": "John Travolta"
};

for (let actor of Object.values(actoresPrincipalesPorPelicula)) {
  let primeraLetra = actor[0].toLowerCase();
  if (['a', 'e', 'i', 'o', 'u'].includes(primeraLetra)) {
    actoresVocales.push(actor);
  }
}

for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  actoresPrincipales.push(actor);
  peliculas.push(pelicula);
}


let peliculaPorActor = {};
for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  if (peliculaPorActor[actor]) {
    peliculaPorActor[actor].push(pelicula);
  } else {
    peliculaPorActor[actor] = [pelicula];
  }
}

console.log(actoresVocales);
console.log(actoresPrincipales);
console.log(peliculas);
console.log(peliculaPorActor);
