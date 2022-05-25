// Instrucciones sincronas no bloqueantes NO-BLOCKING
// Todas las instrucciones se registran en la pila de procesos (Call Stack)

console.log("Inicio de programa");

setTimeout(() => {
  console.log("Primer Timeout")
}, 3000);

setTimeout(() => {
  console.log("Segundo Timeout")
}, 0);

setTimeout(() => {
  console.log("Tercer Timeout")
}, 0);

console.log("Fin de programa")