// Obtener elementos para el mensaje de bienvenida
let userNameInput = document.getElementById("nombre")
let message = document.getElementById("mensaje")

// Obtener elementos para el contador
let calificacion = document.getElementById("calificacion")

// Calificación inicial
const calificacionInicial = 4;

// Función para mostrar mensaje de bienvenida
const mostrarMensaje = () => {
    let msg ="";
    if (userNameInput.value != "") {
        msg = `¡Bienvenido/a ${userNameInput.value}!`;
        if (userNameInput.value==="Sebastian"){
            message.innerHTML = `<b style="color: blue">${msg}</b>`;
        }
        else{
            message.innerText = `${msg}`;
        }
        calificacion.innerText = calificacionInicial; //Se reestablece calificacion para el usuario
    }    
    else{
        msg = "Nombre no valido";
        alert(msg);
    }

};

// Función para aumentar la calificación
const aumentarCalificacion = () => {
    let actualValue = parseFloat(calificacion.innerText);
    
    if(actualValue<7){
        actualValue = Math.round((actualValue+0.1)*10)/10
        calificacion.innerText = actualValue;
    }

    else{
        const alerta = "No se puede calificar más de 7.";
        alert(alerta);
    }
};

// Función para disminuir la calificación
const disminuirCalificacion = () => {
    let actualValue = parseFloat(calificacion.innerText);
    if(actualValue>1){
        actualValue = Math.round((actualValue-0.1)*10)/10
        calificacion.innerText = actualValue;
    }

    else{
        const alerta = "No se puede calificar menos de 1.";
        alert(alerta);
    }
};


// Asignar eventos

let sendBtn = document.getElementById("btn-enviar");
sendBtn.addEventListener("click", mostrarMensaje);

let decreaseBtn = document.getElementById("btn-disminuir");
decreaseBtn.addEventListener("click",disminuirCalificacion)

let increaseBtn = document.getElementById("btn-aumentar");
increaseBtn.addEventListener("click",aumentarCalificacion)