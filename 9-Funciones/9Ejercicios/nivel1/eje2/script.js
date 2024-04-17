function triplicador(numero) {
    return numero * 3;
  }
  
  function multiplicador(num1, num2) {
    let producto = 0;
    for (let i = 0; i < num2; i++) {
      producto += num1;
    }
    return producto;
  }
  
  function division(dividendo, divisor) {
    let cociente = 0;
    while (dividendo >= divisor) {
      dividendo -= divisor;
      cociente++;
    }
    return cociente;
  }
  
  function resto(dividendo, divisor) {
    while (dividendo >= divisor) {
      dividendo -= divisor;
    }
    return dividendo;
  }
  
  let resultado = resto(division(multiplicador(triplicador(5), 12), 12), 3);
  alert(resultado); 