const { v4: uuidv4 } = require('uuid') // Renombramos el v4 que es la función que nos interesa a uuidv4

class Tarea {
  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completada = null;
  }


};

module.exports = Tarea;