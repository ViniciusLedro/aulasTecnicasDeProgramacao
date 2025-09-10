class Pessoa {
    nome:string; //Propriedades
    idade:number; //Propriedades

    constructor(a:string, b:number){ //Da erro no Constructor passar os parametros fora de ordem e passara quantidade incorreta de parametros
        this.nome = a;
        this.idade = b;
    }

    imprimir(){ //Método ou função
        console.log(`${this.nome} possui ${this.idade} anos`)
    }
}

const x = new Pessoa("Ana", 21); //Constrói uma instância (objeto) do tipo Pessoa e coloca na variável x
const y = new Pessoa("Vinícius", 22)

x.imprimir(); //Chama o método imprimir do objeto que está na variável x
y.imprimir();