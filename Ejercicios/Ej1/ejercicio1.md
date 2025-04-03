# Ejercicio 1

**Nombre**: Sebastián Vásquez

---

## Pregunta 1 (6 puntos)

# 1.1 (3 puntos)
Explique por que el realizar validaciones del input del usuario en el front-end es una facilidad pero no una medida de seguridad. 

**Respuesta**:
Es una facilidad, pues es rápido, pues peticiones con inputs inválidos pueden no ser mandados como petición al servidor, pero no es una medida de seguridad, pues las validaciones en el front-end pueden ser eludidas con facilidad manipulandolas desde las herramientas del navegador. Por otro lado, se sabe de la existencia de inyecciones, con las cuales un usuario mal intencionado puede atacar bases de datos, pues estas peticiones podrían cumplir el formato pedido en el front-end, pero seguir siendo peligrosas, con lo cual se hacen necesarias validaciones en el back-end.


# 1.2 (3 puntos)
Explique en detalle el rol de **HTML, CSS y JavaScript** en la creación del front-end de una aplicación web. Especifique la función de cada tecnología y cómo se combinan para construir una interfaz interactiva y visualmente atractiva.

**Respuesta:**:
- El HTML es el esqueleto de lo que se muestra al usuario en una página web, siendo entonces el contenido plano que se muestra de forma estructurada.
- El CSS se encarga de darle estilo a los documentos HTML, siendo entonces el componente visual de la página web.
- El JavaScript sirve para darle reactividad (interacciones con usuario) al HTML, lo cual añade dinamismo al sitio web.


## Pregunta 2 (6 puntos)
A continuación, se presentan dos tareas prácticas:  

1. **(3 puntos)** Implementar un código que reciba un nombre ingresado por el usuario y muestre un mensaje de bienvenida.  
   - Si el usuario se llama **Sebastian**, debe mostrarse un mensaje especial en negrita y en color azul.  
   - El contenido debe actualizarse sin recargar la página.  

2. **(3 puntos)** Implementar un contador de calificación con dos botones para aumentar y disminuir la nota actual.  
   - La calificación debe tener valores apropiados.  
   - La calificación debe actualizarse sin recargar la página.  

### Código HTML:
```html
<div>
    <h3>Parte 1: Mensaje de Bienvenida</h3>
    <label for="nombre">Ingrese su nombre:</label>
    <input type="text" id="nombre">
    <button type="button" id="btn-enviar">Enviar</button>
    <p id="mensaje"></p>
</div>

<hr>

<div>
    <h3>Parte 2: Contador de Calificación</h3>
    <p>Nota actual: <span id="calificacion">1</span></p>
    <button type="button" id="btn-disminuir">Disminuir</button>
    <button type="button" id="btn-aumentar">Aumentar</button>
</div>
```

Implemente un sistema para modificar la nota actual, utilizando la plantilla disponible más abajo, y programe únicamente donde se le indica. Se espera que tras apretar un botón, la nota se actualice sin la necesidad de recargar la página. No está permitido modificar el HTML.

**Respuesta**:
```js
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
        actualValue = Math.round((actualValue+0.1)*10)/10;
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
        actualValue = Math.round((actualValue-0.1)*10)/10;
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
```
