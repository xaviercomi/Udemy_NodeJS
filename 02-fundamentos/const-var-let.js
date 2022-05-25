/* 
Atención! var ya no se debe usar para nada
Siempre es mejor utilizar const que son mas lijeras y hacen el codigo mas eficiente
let se debe utilizar en caso de saber que el valor de la variable cambiara. 
*/

var nombre = "Wolverine"; // Crea la variable en ambito global

if (true) {
  var nombre = "Magneto";
}

console.log(nombre)

let nombre1 = "Wolverine"; // Crea la variable en ambito local

if (true) {
  nombre1 = "Magneto";
}

console.log(nombre1)

const nombre2 = "Wolverine"; // Crea la variable en ambito local

if (true) {
  nombre2 = "Magneto"; // Error, no puede ser reasignada
}

console.log(nombre2)