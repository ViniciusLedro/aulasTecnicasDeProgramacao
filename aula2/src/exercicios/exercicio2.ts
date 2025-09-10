class Retangulo {
base: number;
altura: number;

constructor(base: number, altura: number) {
this.base = base;
this.altura = altura;
}

area(): number {
return this.base * this.altura;
}

perimetro(): number {
return 2 * this.base + 2 * this.altura;
}
}

const poligonos = new Retangulo(5,5);
console.log(`A área é ${poligonos.area()} o perímetro é ${poligonos.perimetro()}`)
