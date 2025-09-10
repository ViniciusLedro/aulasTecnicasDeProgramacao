class Operacao {
    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    somar(x:number, y:number):number{
    return x + y;
    }

    subtrair(x:number, y:number):number{
    return x - y;
    }

    dividir(x:number, y:number):number{
    return x / y;
    }

}

const op = new Operacao(3,5);
console.log("Soma:", op.somar(3,5));
console.log("Diferença:", op.subtrair(3,5));
console.log("Divisão:", op.dividir(3,5));