const Tarea = require('./tarea');

class Tareas {

  _listado = {}

  get listadoArr() {

    const _listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      _listado.push(tarea);
    });

    return _listado;

  }

  contructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas) {

    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })

  }

  crearTarea(desc) {
    const tarea = new Tarea(desc);
    console.log(tarea)
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {

    this.listadoArr.forEach((tarea, index) => {       // El segundo argumento del forEach es el índice
      const idx = `${index + 1}`.green;
      const { desc, completada } = tarea;
      const estado = (completada)
        ? 'Completada'.green
        : 'Pendiente'.red;

      console.log(`${idx} ${desc} ${estado}`)

    });
  };

  listarCompletadasPendientes(status) {
    let contador = 0;
    this.listadoArr.forEach((tarea => {
      const { desc, completada } = tarea;
      const estado = (completada)
        ? 'Completada'.green
        : 'Pendiente'.red;

      if (status) {
        if (completada) {
          contador += 1;
          console.log(`${(contador + '.').green} ${desc} ${estado}`)
        }
      } else {
        if (!completada) {
          contador += 1;
          console.log(`${(contador + '.').green} ${desc} ${estado}`)
        }
      }
    }));
  };

  borrarTarea(id) {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  };

  toggleCompletadas(ids) {

    ids.forEach(id => {
      const tarea = this._listado[id];
      if (!tarea.completada) {
        tarea.completada = new Date().toString();
      }
    });

    this.listadoArr.forEach(tarea => {

      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completada = null;
      }

    });
  }

};

module.exports = Tareas;