const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


//EJERCICIOS
//PUNTO A.

console.log("Las pizzas con un id impar son:");
pizzas
  .filter((pizza) => pizza.id % 2 !== 0)
  .forEach((pizza) => console.log(`- ${pizza.nombre}`));

//PUNTO B.

const PizzaMenos600 = pizzas.some((pizza) => pizza.precio < 600);
console.log(`¿Hay alguna pizza que valga menos de $600? ${PizzaMenos600 ? "Si" : "No"}`)


//PUNTO C.

console.log("Nombre y precio de c/u");
pizzas.forEach((pizza) => console.log(`${pizza.nombre}: $${pizza.precio}`));


//PUNTO D.

console.log("Ingredientes de cada una:");
pizzas.forEach((pizza) => {
  console.log(` ${pizza.nombre}:`);
  pizza.ingredientes.forEach((ingredientes) => 
  console.log(`   ${ingredientes}`))
});
