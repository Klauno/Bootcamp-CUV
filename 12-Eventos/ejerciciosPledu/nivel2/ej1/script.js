const moneyButton = document.getElementById('moneyButton');
const miamiButton = document.getElementById('miamiButton');
const maiameeeButton = document.getElementById('maiameeeButton');
const imagenes = document.querySelectorAll('img');


moneyButton.addEventListener('click', () => {
  imagenes[0].classList.toggle('oculto');
});
miamiButton.addEventListener('click', () => {
  imagenes[1].classList.toggle('oculto');
});
maiameeeButton.addEventListener('click', () => {
  imagenes[2].classList.toggle('oculto');
});


imagenes.forEach(imagen => {
  imagen.addEventListener('click', function() {
      this.classList.add('oculto');
  });
});




