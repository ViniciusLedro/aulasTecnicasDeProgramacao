class Cliente {
nome:string = "Ana";
idade:number = 12;
}

const um = new Cliente();
const dois = new Cliente();


class Individuo {
    nome:string;
    idade:number;

    constructor(a:string, b:number){ //Não pode ter anotação de tipo de retorno e não pode ter instrução return com umvalor diferente de this 
        this.nome = a;
        this.idade = b;
    }
}

const tres = new Individuo("Ana", 13);
const quatro = new Individuo("Vinícius", 21);