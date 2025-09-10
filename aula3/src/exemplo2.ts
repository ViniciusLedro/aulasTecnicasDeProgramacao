class A {
    um(){
        console.log("Bom dia");
    }
}

class B extends A {
    dois(){
        console.log("Boa tarde");
    }
}

class C extends B {
    tres(){
        console.log("Boa noite");
    }
}

const ce = new C();
ce.um();
ce.dois();
ce.tres();