// REGISTRO DE USUARIOS: se crea la clase registrarme con los datos que aparecen en el formulario de registro. 

class Registrarme{
    constructor (nombre, apellido, edad, email, password){
        this.nombre= nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email= email;
        this.password= password;
    }
}

// a traves de la función se capturaran los datos del registro y se guardaran en el arreglo creado

let datos_usuarios_registrados =[];


function registro_de_datos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let edad = document.getElementById('inputEdad').value;
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    let nuevo_usuario = new Registrarme(nombre, apellido, edad,email, password);
    datos_usuarios_registrados.push(nuevo_usuario);
    localStorage.setItem("datos_usuarios_registrados", JSON.stringify(datos_usuarios_registrados));
}

// por cada vez que ingrese se registre un nuevo usuario, se guarden datos en datos_usuarios_registrados.

for (let nuevo_registro_usuario of datos_usuarios_registrados){
    nuevo_registro_usuario= datos_usuarios_registrados.push(nuevo_registro_usuario);
    localStorage.setItem("datos_nuevo_usuario_registrado", JSON.stringify(datos_usuarios_registrados));
}



// los datos de registro se guardaran al hacer click en finalizar registro.

let finalizar_registro = document.getElementById('btn_registrarme');
finalizar_registro.addEventListener("click", registro_de_datos);
console.log(finalizar_registro);


//INICIAR SESION: capturar datos ingresados en formulario al hacer click en iniciar sesion. A partir de la captura confirmar si es o no usuario. De serlo aparecera un alerta de ya puede comprar, sino debe registrarse. 

// SE CREA UNA FUNCION INICIAR_SESION DONDE A PARTIR DE LA CAPTURA DE LOS VALORES DE LOS DATOS INGRESADOS EN LOS INPUTS, CON EL EVENTO CLICK, BUSQUE SI HAY COINCIDENCIA CON LOS USUARIOS REGISTRADOS EN EL ARRAY datos_usuarios_resgistrados Y DE PERMISO PARA LA COMPRA O INDIQUE QUE DEBE INICIAR SEISON.

function iniciar_sesion(){
    let input_email = document.getElementById('input_email').value;
    let input_password = document.getElementById('input_password').value;
    if(input_email == datos_usuarios_registrados && input_password == datos_usuarios_registrados){
        alert("puede ir a la sección productos para iniciar su compra");
    }else{
        alert("usuario no registrado. Por favor, registrese para poder comprar");
    }
}

let usuario_iniciar_sesion = document.getElementById('btn_ingresar');
usuario_iniciar_sesion.addEventListener("click", iniciar_sesion);

console.log(usuario_iniciar_sesion);





