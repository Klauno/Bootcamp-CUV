// Ejercicio 1
// Sentencia if que siempre ejecuta su bloque de código
if (true) {
    console.log("Este bloque siempre se ejecuta");
}

// Sentencia if que nunca ejecuta su bloque de código
if (false) {
    console.log("Este bloque nunca se ejecuta");
}

// Preguntar al usuario cómo está y dar un mensaje de aliento si está "triste"
let estado = prompt("¿Cómo estás?");
if (estado.toLowerCase() === "triste") {
    console.log("No te preocupes, todo va a mejorar.");
}

// Preguntar al usuario cuál es el número secreto y advertirle si está equivocado
let numeroSecreto = 7;
let adivinanza = parseInt(prompt("¿Cuál es el número secreto?"));
if (adivinanza !== numeroSecreto) {
    console.log("Lo siento, ese no es el número secreto.");
}

// Pedir al visitante que ingrese una contraseña y redirigirlo si es correcta
let contrasena = prompt("Por favor, ingrese la contraseña:");
if (contrasena === "contrasena_secreta") {
    console.log("Redireccionando...");
    
} else {
    console.log("Contraseña incorrecta.");
}