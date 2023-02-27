// capturar datos ingresados en formulario al hacer click en iniciar sesion. A partir de la captura confirmar si es o no usuario. De serlo podra realizar la compra, sino debe registrarse. Para registrarse se abre un formulario flotante, la condicion es que el usuario sea mayor de edad. 


// ** se crea la funcion capturar datos para usarla con el addeventlistener click

function capturar_datos(){
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("password", inputPassword);
}

let btn_ingresar = document.getElementById("btn_ingresar");
btn_ingresar.addEventListener("click", capturar_datos);

console.log(btn_ingresar);


let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
email !== ""  && password !=="" ? alert("puede iniciar compra") : alert("no se encontro usuario");


