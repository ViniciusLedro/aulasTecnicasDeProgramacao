class Operacao {
x?: number;
y?: number;

    setX(x: number){
        this.x = x;
    }

    setY(y: number){
        this.y = y;
    }

    somar():number | undefined {
        if (this.x !== undefined && this.y !== undefined){
            return this.x + this.y;
        } else {
            return undefined;
        }
    }

}

const op = new Operacao();

console.log("x + y:", op.somar());

op.setX(5);
op.setY(3);

console.log("x + y:", op.somar());