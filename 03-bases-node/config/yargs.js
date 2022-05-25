

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
  })
  .option('l', {
    alias: 'listado',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Número hasta el que llegara la tabla a multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número'
    }
    return true;
  })
  .argv;

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')
// console.log(base);

module.exports = argv;