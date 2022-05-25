// Callback hell, son funciones callback anidadas

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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find(e => e.id === id)
  if (empleado) {
    callback(null, empleado)
  } else {
    callback(`Empleado con id ${id} no existe`);
  }
}

const getSalario = (id, callback) => {
  const salario = salarios.find(s => s.id === id)
  if (salario) {
    callback(null, salario);
  } else {
    callback(`Salario no existente para id ${id}`)
  }
}


getEmpleado(10, (err, empleado) => {

  if (err) {
    console.log('ERROR!');
    return console.log(err);
  }
  console.log('Empleado existe!');
  console.log(empleado.nombre);
});