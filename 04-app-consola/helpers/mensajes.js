require('colors')

const mostrarMenu = () => {

  return new Promise(resolve => {
    console.clear()
    console.log('============================='.green);
    console.log('    Selecciona una opción    '.green);
    console.log('=============================\n'.green);
    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({      // readline es un paquete nativo de node 
      input: process.stdin,                                     // para crear la interfaz para interactuar con el usuario
      output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opcion) => {
      readline.close();
      resolve(opcion);
    });

  });
};

const pausa = () => {

  return new Promise(resolve => {
    const readline = require('readline').createInterface({      // readline es un paquete nativo de node 
      input: process.stdin,                                  // crea la interfaz para interactuar con el usuario
      output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opcion) => {
      readline.close();
      resolve(opcion)

    })
  });
};

module.exports = { mostrarMenu, pausa };