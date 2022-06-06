const fs = require('fs');

const archivo = './db/tareas.json';

const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  } else {
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    const data = JSON.parse(info)
    return data;
  }
};

module.exports = { guardarDB, leerDB }