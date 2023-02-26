

function capturar_datos(){
    console.log(localStorage.setItem("email", inputEmail));
    console.log(localStorage.setItem("password", inputPassword));
}

let btn_ingresar = document.getElementById("btn_ingresar");
btn_ingresar.addEventListener("click", capturar_datos);

console.log(btn_ingresar);


let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
email !== ""  && password !=="" ? alert("puede iniciar compra") : alert("no se encontro usuario");


