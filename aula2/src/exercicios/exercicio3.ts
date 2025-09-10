class Aleatorio {
get(): number {
    return Math.floor(Math.random() * 100 + 1);
}
}


const cincoNumeros = new Aleatorio();
console.log(cincoNumeros.get());
console.log(cincoNumeros.get());
console.log(cincoNumeros.get());
console.log(cincoNumeros.get());
console.log(cincoNumeros.get());