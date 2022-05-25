// Funciones que son pasadas como argumentos

setTimeout(function () {      // Callback function que se ejecuta dentro de otra función
  console.log('Hola Mundo');
}, 1000);

const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Fernando"
  }

  setTimeout(() => {
    callback(usuario)
  }, 1500)
}

getUsuarioByID(10, (usuario) => {    // Funcion de callback
  console.log(usuario);
  console.log(usuario.nombre.toUpperCase());
});



