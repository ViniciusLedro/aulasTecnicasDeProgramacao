class Pessoa {
    nome:string = "";
    idade:number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    imprimir():void{
        console.log(`${this.nome} - ${this.idade}`);
    }


}

class Cliente extends Pessoa {
    saldo:number;

    constructor(nome:string, idade: number, saldo:number){
        super(nome,idade); //Super tem que ser chamado antes do this e precisa ser chamado para não dar erro
        this.saldo = saldo;
    }

    print():void{
        this.imprimir();
        super.imprimir();
        console.log(`${this.nome} - ${this.idade} - ${this.saldo}`);
    }
}

const c = new Cliente("Ana", 18, 980)
c.print();