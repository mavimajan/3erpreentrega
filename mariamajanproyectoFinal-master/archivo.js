// se pide a la persona indicar si es usuaria de la sucursal como condicion para poder realizar la compra.Si es así, se solicita que ingrese el nombre del producto, el precio y el medio de pago para calcular si recibira un descuento en el total o tendra un recargo. Luego se muestran los datos ingresados al usuario.

// reconocer si es usuario cliente de la sucursal para poder continuar la compra

let usuario = prompt("Ingrese si es cliente de nuestra sucursal");


while (usuario !="si" && usuario != "SI"){
    alert("Debe ser cliente de la sucursal para continuar la compra");
    usuario = prompt("Ingrese si es cliente de nuestra sucursal");
}


// solicitar al usuario nombre del producto y monto del mismo

let producto = prompt("Ingrese nombre del producto a adquirir");

while (!isNaN (producto)){
    alert("Ingrese solo letras");
    producto = prompt("Ingrese nombre del producto a adquirir");
}

let monto = parseInt(prompt("Ingrese el precio del mismo"));


while (isNaN(monto)){
    alert("Ingrese solo numeros");
    monto = parseInt(prompt("¿Ingrese el precio del mismo"));
}

// calcular el precio total de un producto segun pago en debito o efectivo

function calcular_precio(monto, forma_pago){
    if(forma_pago == debito){
        let pago_debito = (monto * 0.2);
        return pago_debito;
    }else{
        let pago_efectivo = (monto / 5);
        return pago_efectivo;
    }
}


// mostrar al usuario el precio a pagar segun lo ingresado 

let debito = "debito";
let efectivo = "efectivo";
let forma_pago = prompt("¿Abona en debito o efectivo?").toLowerCase();
let total_efectivo = monto - calcular_precio(monto, forma_pago);
let total_debito = monto + calcular_precio(monto, forma_pago);

if(forma_pago == debito){
    alert("esta por comprar " + producto + " " +  "total a pagar: " + total_debito)
}else if(forma_pago == efectivo){
    alert("esta por comprar " + producto + " " + "total a pagar: " + total_efectivo);
}




//Stock. La empresa vende ropa interior de mujer.En el deposito, la misma está separada por tipo y subdividida por material de confeccion. Se crean los objetos necesarios para clasificar las prendas. 

class Conjuntos_encaje{
    constructor(nombre, talles, precio, color){
        this.nombre = nombre;
        this.talles = talles;
        this.precio = precio;
        this.color = color;
    }
}

let conjunto_berlin= new Conjuntos_encaje("Berlin", 85-100, 1000, "Negro");
let conjunto_malaga= new Conjuntos_encaje("Malaga", 90-100, 1500, "Rojo");
let conjunto_venecia = new Conjuntos_encaje("Venecia", 85-105, 1400, "Blanco");

console.log(Conjuntos_encaje);

class Conjuntos_algodon{
    constructor(nombre, talles, precio, color){
        this.nombre = nombre;
        this.talles = talles;
        this.precio = precio;
        this.color = color;
    }
}

let conjunto_texas= new Conjuntos_algodon("Texas", 85-95, 1300, "Rojo");
let bombacha_newyork= new Conjuntos_algodon("New York", 90-105, 2350, "Blanco");

console.log(Conjuntos_algodon);

// se crea el arreglo para unificar la categoria "conjuntos"

let conjuntos = [{Conjuntos_algodon}, {Conjuntos_encaje}];
console.log(conjuntos);

// ingreso de nuevos productos. Se realizan los mismos pasos que antes.

class Bodys_algodon{
    constructor(nombre, talle, precio, color){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.color = color;
    }
}

let body_bsas= new Bodys_algodon("Buenos aires", 2, 1850, "Rojo");
let body_rosario= new Bodys_algodon("Rosario", 3, 1450, "Negro");

console.log(Bodys_algodon);

class Bodys_encaje{
    constructor(nombre, talle, precio, color){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.color = color;
    }
}

let body_pampa= new Bodys_encaje("Pampa", 3, 1350, "Bordo");
let body_tandil= new Bodys_encaje("Tandil", 3, 1350, "Bordo");

console.log(Bodys_encaje);

let bodys = [{Bodys_algodon}, {Bodys_encaje}];
console.log(bodys);

// se agrega el nuevo producto a la variable "deposito"

let stock = conjuntos.concat(bodys);
console.log(stock);