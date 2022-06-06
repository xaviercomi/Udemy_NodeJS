require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const { leerDB } = require('./helpers/guardarArchivo');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas')

const main = async () => {

  let opcion = '';
  const tareas = new Tareas();

  const tareasDB = await leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
    tareas.listadoCompleto()
  }

  do {
    console.clear()
    opcion = await inquirerMenu();

    switch (opcion) {
      case '1':
        const desc = await leerInput('Descripción:');
        tareas.crearTarea(desc);
        break;
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
        tareas.listarCompletadasPendientes(true);
        break;
      case '4':
        tareas.listarCompletadasPendientes(false);
        break;
      case '5':
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0') {
          const ok = await confirmar('¿Estas seguro?'.red)
          if (ok) {
            tareas.borrarTarea(id);
            console.log(`¡Tarea borrada correctamente!`.green)
          };
        };
        break;
    }

    // guardarDB(tareas.listadoArr);

    await pausa();

  } while (opcion !== '0');

}

main() 