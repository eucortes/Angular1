let avenger = {
    nombre: "steve",
    clave: "Capitan America",
    poder: "fuerza"
};

// let nombre=avenger.nombre
// let clave=avenger.clave
// let poder=avenger.poder

// en los objetos se usa la referencia del metodo
let { nombre, poder: alias, clave } = avenger;

console.log(nombre, clave, alias);

//en los arreglos es secuencial
let avengers: string[] = ["thor", "steve", "tony"];
let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);
