class A {
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }

    print():void{
        console.log("Classe A:", this.nome);
    }
}

class B extends A {
    nome:string //Sobrescreve a propriedade nome da Classe A

    constructor(nome:string){
        super(nome);
        this.nome = nome.toLocaleLowerCase();
    }

    print():void{ //Sobrescreve o método print da Classe A
        console.log("Classe B:", this.nome); 

    }

    imprimir():void{
        super.print(); //Chama o método print da superclasse
    }
}

const a = new A("Tipo A");
a.print();

const b = new B("Tipo B");
b.print();
b.imprimir();