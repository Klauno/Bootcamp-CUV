function mostrarTextoSinVocales() {
    let inputElement = document.getElementById('inputTexto');
    let textoIngresado = inputElement.value;
    let textoSinVocales = quitarVocales(textoIngresado);
    document.getElementById('resultado').textContent = textoSinVocales;
}

function quitarVocales(texto) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (!vocales.includes(letra)) {
            resultado += letra;
        } else {
            resultado += '_';
        }
    }
    return resultado;
}