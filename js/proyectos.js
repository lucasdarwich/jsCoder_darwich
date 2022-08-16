class Proyecto {
    constructor(nro, expediente, cliente, red, monto) {
        this.nro = nro;
        this.expediente = expediente;
        this.cliente = cliente;
        this.red = red;
        this.monto = monto;
    }
}

const proyectos = [];

let formulario = document.getElementById("agregarForm");
let campoAgregarNro = document.getElementById("agregarNro");
let campoAgregarExp = document.getElementById("agregarExp");
let campoAgregarCliente = document.getElementById("agregarClient");
let campoAgregarRed = document.getElementById("agregarRed");
let campoAgregarMonto = document.getElementById("agregarMonto");

campoAgregarNro.onchange = () => {
    agregarNro = campoAgregarNro.value;
}
campoAgregarExp.onchange = () => {
    agregarExp = campoAgregarExp.value;
}
campoAgregarCliente.onchange = () => {
    agregarClient = campoAgregarCliente.value;
}
campoAgregarRed.onchange = () => {
    agregarRed = campoAgregarRed.value;
}

campoAgregarMonto.onchange = () => {
    agregarMonto = campoAgregarMonto.value;
}

function cargarPproyectos() {
    proyectos.push(new Proyecto(agregarNro, agregarExp, agregarClient, agregarRed, agregarMonto));
}

let botonAgregar = document.getElementById("agregarP");

botonAgregar.onmouseover = () => {
    botonAgregar.className = "btn btn-success";
}
botonAgregar.onmouseout = () => {
    botonAgregar.className = "btn btn-primary";
}

botonAgregar.onclick = () => {
    console.log("Agregaste un proyecto");
    cargarPproyectos();
    dibujarTabla();
    console.table(proyectos); 
}  

function dibujarTabla() {
    let tablaBody = document.getElementById("items");
    tablaBody.innerHTML = "";
    proyectos.forEach(
        (proyecto) => {
            tablaBody.innerHTML += `
            <tr>
            <td id="proyecto-id-${proyecto.nro}">${proyecto.nro}</td>
            <td id="proyecto-exp-${proyecto.expediente}">${proyecto.expediente}</td>
            <td id="proyecto-cliente-${proyecto.cliente}">${proyecto.cliente}</td>
            <td id="proyecto-red-${proyecto.red}">${proyecto.red}</td>
            <td id="proyecto-monto-${proyecto.monto}">${proyecto.monto}</td>
            </tr>
        `;
        }
    );
}

let botonEliminar = document.getElementById("eliminarP");

botonEliminar.onmouseover = () => {
    botonEliminar.className = "btn btn-danger";
}
botonEliminar.onmouseout = () => {
    botonEliminar.className = "btn btn-primary";
}