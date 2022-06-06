const inquirer = require('inquirer');
const Tarea = require('../models/tarea');
require('colors');

const menuOpts = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tarea`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar tarea`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir`
      }
    ]
  }
];

const question = [
  {
    type: 'input',
    name: 'enter',
    message: `Presione ${'enter'.green} para continuar`
  }
];

const inquirerMenu = async () => {

  console.clear()
  console.log('============================='.green);
  console.log('    Selecciona una opción    '.white);
  console.log('=============================\n'.green);

  const { opcion } = await inquirer.prompt(menuOpts);
  return opcion;

};

const pausa = async () => {
  console.log('\n');
  await inquirer.prompt(question);

};

const leerInput = async (message) => {

  const question = [
    {
      type: 'input',
      name: 'descripcion',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Ingrese un valor!';
        } else {
          return true;
        }
      }
    }
  ];

  const { descripcion } = await inquirer.prompt(question);
  return descripcion;
}

const listadoTareasBorrar = async (tareas) => {

  const choices = tareas.map((tarea, i) => {  // devuelve un array duplicado al que podemos cambiar los atributos. 

    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`
    }

  });

  choices.unshift({       // Nos permite agregar una opción al principio del array que crea map. 
    value: '0',
    name: '0. '.green + 'Cancelar'
  });

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Tarea a borrar:',
      choices
    }
  ]

  const { id } = await inquirer.prompt(preguntas);
  return id;

};

const confirmar = async (message) => {

  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;

}

const mostrarListadoChecklist = async (tareas) => {

  const choices = tareas.map((tarea, i) => {  // devuelve un array duplicado al que podemos cambiar los atributos. 

    const idx = `${i + 1}.`.green;

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: (tarea.completada) ? true : false
    }

  });

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Seleccione',
      choices
    }
  ]

  const { ids } = await inquirer.prompt(pregunta);
  return ids;

};


module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist
}
