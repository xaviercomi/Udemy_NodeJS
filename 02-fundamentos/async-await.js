
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

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    (empleado)
      ? resolve(empleado)
      : reject(`Empleado con id ${id} no existe.`);
  });
}

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    (salario)
      ? resolve(salario)
      : reject(`Empleado con id ${id} no tiene salario asignado.`);
  });
}

const getInfoUsuario = async (id) => {      // async transforma una funcion para que devuelva una promesa
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario de ${empleado} con id ${id} es: ${salario} € mensuales`
  } catch (error) {
    throw error;          // El throw a diferencia del return dispara el reject de la función asíncrona
  }                       // que a su vez activara el catch de la funcion que hace la llamada (getInfoUsuario)

}

const id = 3;

getInfoUsuario(id)
  .then(msg => console.log(`Success! ${msg}`))
  .catch(err => console.log(`Error! ${err}`))

