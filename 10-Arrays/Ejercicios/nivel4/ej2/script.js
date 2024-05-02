
let tareas = [];

while (true) {
    let input = prompt("¿Qué desea hacer? (nuevo/listar/borrar/salir)");

    if (input === "salir") {
        alert ("¡Hasta luego!");
        break;
    } else if (input === "listar") {
        alert("**********");
        tareas.forEach((tarea, index) => {
            console.log(`${index}: ${tarea}`);
        });
        console.log("**********");
    } else if (input === "nuevo") {
        let nuevaTarea = prompt("Ingrese la nueva tarea:");
        tareas.push(nuevaTarea);
        alert("Tarea agregada correctamente.");
    } else if (input === "borrar") {
        let indice = prompt("Ingrese el número de la tarea que desea borrar:");
        indice = parseInt(indice);

        if (indice >= 0 && indice < tareas.length) {
            let tareaEliminada = tareas.splice(indice, 1);
            alert(`La tarea "${tareaEliminada}" ha sido eliminada.`);
        } else {
            alert("Número de tarea inválido.");
        }
    } else {
        alert("Comando no reconocido. Por favor, ingrese 'nuevo', 'listar', 'borrar' o 'salir'.");
    }
}