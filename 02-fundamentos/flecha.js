
function sumar(a, b = 10) {  // El valor de b es opcional
  return a + b;
}

console.log(sumar(5, 5));

console.log(sumar(5));

// Funciones flecha

const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(5, 5))
