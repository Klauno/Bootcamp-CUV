const colors = {
  "rojo": "red",
  "azul": "blue",
  "amarillo": "yellow",
  "blanco": "white",
  "negro": "black"
};

const input = document.getElementById('colorInput');
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      const color = event.target.value.toLowerCase();
      const backgroundColor = colors[color] || 'white'; // Si el color no está en el objeto, se establece blanco por defecto
      document.body.style.backgroundColor = backgroundColor;
  } else if (event.key === 'Backspace' && event.target.value === '') {
      document.body.style.backgroundColor = 'white';
  }
});
