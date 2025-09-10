class X {
    um(){
        console.log("um");
    }
}

class Y extends X {
    dois(){
        console.log("dois");
    }
}

class Z extends Y {
    tres(){
        console.log("três");
    }
}

const z = new Z();
z.um();
z.dois();
z.tres();