class Um {
  nro: number = 0;

  incrementar(): void {
    this.nro++;
  }
}

class Dois extends Um {
  incrementar(): void {
    super.incrementar();
    this.nro += 2; //nro = 1 + 2 = 3
  }
}

class Tres extends Dois {
  incrementar(): void {
    super.incrementar();
    this.nro += 3; //nro = 3 + 3 = 6
  }
}

const teste = new Dois();
teste.incrementar();
console.log("Nro:", teste.nro);
