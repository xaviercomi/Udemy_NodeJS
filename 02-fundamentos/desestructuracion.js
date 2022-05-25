const deadpool = {
  nombre: 'Wade',
  apellidos: 'Winston',
  poder: 'Regeneración',
  getNombre() {
    return `${this.poder}`
  }
};

console.log(deadpool.getNombre());

// Desestructuramos

const { nombre, apellidos, poder, edad = 23 } = deadpool; // podemos agregar un parametro


console.log(deadpool)
console.log(nombre, apellidos, poder, edad)

// Desestructurando en los argumentos de una funció

function imprimirHeroe({ nombre, apellidos, poder }) {
  console.log(nombre, apellidos, poder)
}

imprimirHeroe(deadpool);

// Desestructurar arreglos

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3)

const [, , heroe3] = heroes;

console.log(heroe3)