let edad = parseInt(prompt("Ingrese su edad:"));
let genero = prompt("Ingrese su género (hombre/mujer):").toLowerCase();

if (genero === "mujer" && edad >= 60) {
    alert("¡Puede jubilarse!");
} else if (genero === "hombre" && edad >= 65) {
    alert("¡Puede jubilarse!");
} else {
    alert("No puede jubilarse aún.");
}