// Crear una tabla de multiplicar con persistencia.
const colors = require('colors');
const argv = require('./config/yargs')
const { crearTabla } = require('./helpers/multiplicar');

console.clear(); // Limpia la consola antes de correr el codigo

crearTabla(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(`archivo ${nombreArchivo}, creado`.blue))
  .catch(err => console.log(colors.red(err)))


