class Ponto {
    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    distancia(ponto:Ponto): number{
     const dx = ponto.x - this.x;
     const dy = ponto.y - this.y;
     return Math.sqrt(dx * dx + dy * dy)
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);

console.log("Distância: ", a.distancia(b));