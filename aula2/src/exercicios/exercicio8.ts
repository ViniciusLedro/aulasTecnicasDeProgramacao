class Point {
    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    distancia(ponto:Point): number{
     const dx = ponto.x - this.x;
     const dy = ponto.y - this.y;
     return Math.sqrt(dx * dx + dy * dy)
    }
}

class Rectangle {
    inferiorEsquerdo:Point;
    superiorDireito:Point;

    constructor(ie:Point, sd:Point){
        this.inferiorEsquerdo = ie;
        this.superiorDireito = sd;
    }

    area():number{
        const largura = this.superiorDireito.x - this.inferiorEsquerdo.x;
        const altura = this.superiorDireito.y - this.inferiorEsquerdo.y;
        return largura * altura;
    }
}


const sd = new Point(3, 5);
const ie = new Point(1, 2);

const r = new Rectangle(ie,sd);
console.log("Área:", r.area());