class Texto extends String {

primeira():string {
return this.charAt(0);
}

ultima():string {
return this.charAt(this.length-1);
}
}

const palavra = new Texto("Boa noite");
console.log("Quantidade:",palavra.length);
console.log("Primeira:",palavra.primeira());
console.log("Ultima:",palavra.ultima());
console.log("Minuscula:",palavra.toLocaleLowerCase());

