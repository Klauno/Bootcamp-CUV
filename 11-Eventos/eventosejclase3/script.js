let boton = document.getElementsByClassName("comprar")//selecciono todos los elementos con clase comprar
let i = 0;//contador para utilizar en el while
console.log(boton.length); //cantidad de botones
let carrito = document.getElementById("carrito");

while (i < boton.length) {
    //obtener  el id de cada boton
    let boton_id = boton[1].getAttribute("id")
     
    let precio = boton[i].getAttribute("data-precio");

    let descripcio = boton[i].getAttribute("data-producto");

    //agregamos el oyente del evento click a cada boton particular
    boton[i].addEventListener("click", function() {
        // lo que hago cuando se dispare el evento click

      carrito.textContent = text_carrito;

       console.log("comprando" + boton_id +"-" + descripcio +"")
    });

    i++;

}