
const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];

/*
<<<Convertir la funcion en promesas>>>

const getEmpleado = (id, callback) => {
  const empleado = empleados.find(e => e.id === id) 
  if (empleado) {
    callback(null, empleado)
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
}
*/

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;  // ?.nombre nos permite seleccionar la propiedad "nombre" del objeto empleado
    (empleado)                                                  // ?.nombre muestra el valor de esta propiedad y no todo el objeto 
      ? resolve(empleado)
      : reject(`Empleado con id ${id} no existe.`);
  });
}

const id = 1;

getEmpleado(id)
  .then(empleado => console.log(empleado))
  .catch(err => console.log(`${err}`))