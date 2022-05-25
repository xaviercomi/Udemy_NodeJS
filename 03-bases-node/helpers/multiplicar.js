
const fs = require('fs');
const colors = require('colors');

const crearTabla = async (base = 5, listar = false, hasta = 10) => {
  try {

    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.italic.green} ${i} ${'='.gray.italic} ${base * i}\n`;
    };

    if (listar) {
      console.log('============================'.rainbow);
      console.log(`Tabla de multiplicar del: ${base}`.red);
      console.log('============================'.rainbow);
      console.log(consola)
    }
    /*
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
      console.log(`La tabla del ${base} tiene persistencia!`)
    });
    */

    // writeFileSync es mas sencillo, la diferéncia es que la gestión
    // del error se tiene que hacer con try - catch y no un callback

    fs.writeFileSync(`./salida/tabla_del_${base}.txt`, salida);
    return `tabla_del_${base}.txt`

  } catch (err) {
    throw error;
  }
}

module.exports = { crearTabla }