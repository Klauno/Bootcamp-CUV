let edad = prompt("Ingrese su edad.");

// Verificar si la edad es negativa
if (edad < 0) {
    alert("Error, su edad no es válida.");
} else {
    // Verificar si la edad es impar
    if (edad % 2 !== 0) {
        alert("¿Sabías que tu edad es impar?");
    }

    if (edad < 18) {
        alert("No puede pasar al bar.");
    } else if (edad === "21") {
        alert("¡Bienvenido al bar! Además, felicidades por haber llegado a la mayoría de edad.");
    } else if (edad < 21) {
        alert("Puede pasar al bar, pero no puede tomar alcohol.");
    } else {
        alert("Puede pasar al bar y tomar alcohol.");
    }
}
