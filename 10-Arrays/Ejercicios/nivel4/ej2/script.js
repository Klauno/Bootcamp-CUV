
let tareas = [];

while (true) {
    let input = prompt("¿Qué desea hacer? (nuevo/listar/borrar/salir)");

    if (input === "salir") {
        console.log("¡Hasta luego!");
        break;
    } else if (input === "listar") {
        console.log("**********");
        tareas.forEach((tarea, index) => {
            console.log(`${index}: ${tarea}`);
        });
        console.log("**********");
    } else if (input === "nuevo") {
        let nuevaTarea = prompt("Ingrese la nueva tarea:");
        tareas.push(nuevaTarea);
        console.log("Tarea agregada correctamente.");
    } else if (input === "borrar") {
        let indice = prompt("Ingrese el número de la tarea que desea borrar:");
        indice = parseInt(indice);

        if (indice >= 0 && indice < tareas.length) {
            let tareaEliminada = tareas.splice(indice, 1);
            console.log(`La tarea "${tareaEliminada}" ha sido eliminada.`);
        } else {
            console.log("Número de tarea inválido.");
        }
    } else {
        console.log("Comando no reconocido. Por favor, ingrese 'nuevo', 'listar', 'borrar' o 'salir'.");
    }
}