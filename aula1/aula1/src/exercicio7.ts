const parImpar: Function = (nro:number):string => 
nro % 2 == 0 ? "par" : "impar"; // Se o resto da divisão de nro por 2 for igual a 0, é par se não é impar

const somarArray: Function = (v: number[]): void => {
    for (let i = 0; i < v.length; i++){ //Laço de repetição For esta sendo usado para percorrer o array v
    console.log(v[i], "é", parImpar(v[i]));
    }
};

const v: number[] = [5, 3, 1, 8, 2];
somarArray(v);