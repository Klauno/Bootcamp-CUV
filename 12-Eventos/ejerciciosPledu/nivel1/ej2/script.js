document.addEventListener("DOMContentLoaded", function() {
  // Función para cambiar el color del body
  function cambiarColorBody() {
      document.body.classList.toggle("color");
  }

  // Función para agregar el párrafo al body y cambiar el color
  function seEjecutaEnEvento() {
      // Agregar un párrafo al final del body
      const paragraph = document.createElement("p");
      paragraph.textContent = "BEEP";
      document.body.appendChild(paragraph);

      // Cambiar el color del body
      cambiarColorBody();
  }

  // Seleccionar el botón y agregar un event listener
  const beepButton = document.getElementById("beepButton");
  beepButton.addEventListener("click", seEjecutaEnEvento);
});
