let amigos = ["Juan", "Pepe", "Jorge", "Francisco", "Juan"];

function verificarAmigo(nombre) {
    if (amigos.includes(nombre)) {
        console.log("Tengo un amigo que se llama " + nombre);
    } else {
        console.log("Sería bueno tener un amigo que se llame " + nombre);
    }
}
// Verificar si tienes un amigo llamado Félix
verificarAmigo("Félix");
