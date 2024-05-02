document.body.addEventListener('mousemove', function(event) {
  if (event.buttons === 1) { // Solo sigue el mouse si el botón izquierdo está presionado
      var mouseX = event.clientX + 'px';
      var mouseY = event.clientY + 'px';
      var img = document.querySelector('.mouse-tracker');
      img.style.top = mouseY;
      img.style.left = mouseX;
  }
});
