function somar(a:number,b:number): number|string{
    if( a < b){
        return a + b; //somar
    } else {
    return "" + a + b; //concatenar
}
} 

console.log("Resultados:", somar(1,2));
console.log("Resultados:", somar(5,3));