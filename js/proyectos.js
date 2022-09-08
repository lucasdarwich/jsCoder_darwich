class Proyecto {
    constructor(nro, expediente, cliente, red, monto, nombreApellido, telefono, correo) {
        this.nro = nro;
        this.expediente = expediente;
        this.cliente = cliente;
        this.red = red;
        this.monto = monto;
        this.nombreApellido = nombreApellido;
        this.telefono = telefono;
        this.correo = correo;
    }
}

const proyectos = [{
        nro: "1",
        expediente: "EX-2020-42118092-APN-DNFYD#ENACOM",
        cliente: "TANCACHA",
        red: "FTTH",
        monto: 23436417.90.toFixed(2),
        nombreApellido: "Juan Perez",
        telefono: 3513888888,
        correo: "juanperez@gmail.com"
    },
    {
        nro: "2",
        expediente: "EX-2020-42456903-APN-DNFYD#ENACOM",
        cliente: "CUMBRECITA",
        red: "FTTH",
        monto: 11523273.08.toFixed(2),
        nombreApellido: "Esteban Quito",
        telefono: 3513888889,
        correo: "estebanquito@gmail.com"
    },
    {
        nro: "3",
        expediente: "EX-2020-42402494-APN-DNFYD#ENACOM",
        cliente: "SANTA CLARA",
        red: "FTTH",
        monto: 21902422.66.toFixed(2),
        nombreApellido: "Anibal Guerrero",
        telefono: 3513888887,
        correo: "aguerrero@gmail.com"
    },
    {
        nro: "4",
        expediente: "EX-2020-42118092-APN-DNFYD#ENACOM",
        cliente: "LAVALLE",
        red: "FTTH",
        monto: 32552057.15.toFixed(2),
        nombreApellido: "Roberto Perez",
        telefono: 3513667886,
        correo: "robperez@gmail.com"
    },
    {
        nro: "5",
        expediente: "EX-2020-32123494-APN-DNFYD#ENACOM",
        cliente: "USHUAIA",
        red: "FTTH",
        monto: 55478965.66.toFixed(2),
        nombreApellido: "Juan Lopez",
        telefono: 3513231887,
        correo: "juanplopez@gmail.com"
    },
    {
        nro: "6",
        expediente: "EX-2021-55423494-APN-DNFYD#ENACOM",
        cliente: "HERNANDO",
        red: "FTTH",
        monto: 55414365.66.toFixed(2),
        nombreApellido: "Fernando Caro",
        telefono: 35155431887,
        correo: "fercaro@gmail.com"
    },
    {
        nro: "7",
        expediente: "EX-2021-55423494-APN-DNFYD#ENACOM",
        cliente: "TORTUGUITAS",
        red: "FTTH",
        monto: 51114365.66.toFixed(2),
        nombreApellido: "Gastón Purch",
        telefono: 35122431887,
        correo: "gpurch@gmail.com"
    },
    {
        nro: "8",
        expediente: "EX-2022-22425494-APN-DNFYD#ENACOM",
        cliente: "OBISPO TREJO",
        red: "FTTH",
        monto: 58884365.23.toFixed(2),
        nombreApellido: "Pablo Petro",
        telefono: 35127361887,
        correo: "pabpetro@gmail.com"
    }
];

dibujarTabla();
dibujarModal();
dibujarModalEncargado();

//Función de carga de proyectos

function cargarPproyectos() {
    proyectos.push(new Proyecto(agregarNro, agregarExp, agregarClient, agregarRed, agregarMonto, agregarIng, agregarTel, agregarCorreo));
}

let btnArgegarModal = document.getElementById("btn-modal-agregar");

//Eventos

btnArgegarModal.onmouseover = () => {
    btnArgegarModal.className = "btn btn-success";
}
btnArgegarModal.onmouseout = () => {
    btnArgegarModal.className = "btn btn-primary";
}

btnArgegarModal.onclick = () => {
    let botonAgregar = document.getElementById("agregarP");

    botonAgregar.onmouseover = () => {
        botonAgregar.className = "btn btn-success";
    }
    botonAgregar.onmouseout = () => {
        botonAgregar.className = "btn btn-primary";
    }
    let campoAgregarNro = document.getElementById("agregarNro");
    let campoAgregarExp = document.getElementById("agregarExp");
    let campoAgregarCliente = document.getElementById("agregarClient");
    let campoAgregarRed = document.getElementById("agregarRed");
    let campoAgregarMonto = document.getElementById("agregarMonto");
    let campoAgregarIng = document.getElementById("agregarIngeniero");
    let campoAgregarTel = document.getElementById("agregarTel");
    let campoAgregarCorreo = document.getElementById("agregarCorreo");

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

    campoAgregarIng.onchange = () => {
        agregarIng = campoAgregarIng.value;
    }

    campoAgregarTel.onchange = () => {
        agregarTel = campoAgregarTel.value;
    }

    campoAgregarCorreo.onchange = () => {
        agregarCorreo = campoAgregarCorreo.value;
    }

    botonAgregar.onclick = () => {

        if ((campoAgregarNro.value == "") || (campoAgregarExp.value == "") || (campoAgregarCliente.value == "") || (campoAgregarRed.value == "") || (campoAgregarMonto.value == "") || (campoAgregarIng.value == "") || (campoAgregarTel.value == "") || (campoAgregarCorreo.value == "")) {
            parrafo = document.getElementById("parrafoAgregarProyecto");
            parrafo.innerText = "Debe completar todos los campos";
            parrafo.style.color = "#FF0000";
            parrafo.style.textTransform = "uppercase";
        } else {
            parrafo = document.getElementById("parrafoAgregarProyecto");
            cerrarModal = document.getElementById("cerrarModal");
            cargarPproyectos();
            console.log("Agregaste un proyecto");
            dibujarTabla();
            dibujarModal();
            dibujarModalEncargado();
            console.table(proyectos);
            document.getElementById('agregarForm').reset();
            parrafo.innerText = "";
            cerrarModal.click();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Proyecto Agregado con Éxito',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

//Función - Dibuja la tabla de proyectos cargados. 

function dibujarTabla() {
    let tablaBody = document.getElementById("items");
    tablaBody.innerHTML = "";
    proyectos.forEach(
        (proyecto) => {
            tablaBody.innerHTML += `
            <tr>
            <td id="proyecto-id-${proyecto.nro}">${proyecto.nro}</td>
            <td id="proyecto-exp-${proyecto.nro}">${proyecto.expediente}</td>
            <td id="proyecto-cliente-${proyecto.nro}">${proyecto.cliente}</td>
            <td id="proyecto-red-${proyecto.nro}">${proyecto.red}</td>
            <td id="proyecto-monto-${proyecto.nro}">${proyecto.monto}</td>
            <td id="proyecto-iconos">
            <i id="${proyecto.nombreApellido}" type="button" data-bs-toggle="modal" data-bs-target="#datosIng" class="btn btn-primary bi bi-person"></i>
            <i id="icono-eliminar-${proyecto.nro}" type="button" data-bs-toggle="modal" data-bs-target="#suprProyectoModal" class="btn btn-primary bi bi-trash3"></i>
            </td>
            </tr> 
            `;
        }
    )
}

let modalCuerpo = document.getElementById("cuerpoModal");
modalCuerpo.innerHTML = "";
let pieModal = document.getElementById("pieModal");
pieModal.innerHTML = "";
let modalIng = document.getElementById("cuerpoModalIng");
modalIng.innerHTML = "";

//Función - Dibuja el modal que muestra los datos del proyecto. 

function dibujarModal() {
    proyectos.forEach(
        (proyecto) => {
            let btnEliminarProy = document.getElementById(`icono-eliminar-${proyecto.nro}`);

            btnEliminarProy.onmouseover = () => {
                btnEliminarProy.className = "btn btn-danger bi bi-trash3"
            }

            btnEliminarProy.onmouseout = () => {
                btnEliminarProy.className = "btn btn-primary bi bi-trash3"
            }

            btnEliminarProy.onclick = () => {
                proyetosRestantes = proyectos.filter(proyecto => proyecto.nro === btnEliminarProy.value);
                modalCuerpo.innerHTML = `
                    <p>Datos del Proyecto<p>
                    <p id="id-${proyecto.nro}">Proyecto Nro: ${proyecto.nro}</p>
                    <p>Expediente: ${proyecto.expediente}</p>
                    <p>Cliente: ${proyecto.cliente}</p>
                    <p>Red: ${proyecto.red}</p>
                    <p>Monto: ${proyecto.monto}</p>
                    `;
                pieModal.innerHTML = `
                <button id="cerrarModalEliminar" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button id="${proyecto.nro}" type="button" class="btn btn-primary">Eliminar</button>
                `;

                btnEliminarModal = document.getElementById(`${proyecto.nro}`);

                btnEliminarModal.onmouseover = () => {
                    btnEliminarModal.className = "btn btn-danger"
                }

                btnEliminarModal.onmouseout = () => {
                    btnEliminarModal.className = "btn btn-primary"
                }

                CerrarModalEliminar = document.getElementById("cerrarModalEliminar");
                btnEliminarModal.onclick = () => {
                    proyetosRestantes = proyectos.filter(proyecto => proyecto.nro != btnEliminarModal.id);
                    proyectos.length = 0;
                    proyetosRestantes.forEach((proyetosRestantes) => proyectos.push(proyetosRestantes));
                    dibujarTabla();
                    dibujarModal();
                    dibujarModalEncargado();
                    cerrarModalEliminar.click();
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Proyecto Eliminado con Éxito',
                        showConfirmButton: false,
                        timer: 1750
                    })
                }
            }
        }
    );
}

//Función - Dibuja el modal que muestra los datos del encargado de la ingenieria del proyecto. 
function dibujarModalEncargado() {
    proyectos.forEach(
        (proyecto) => {
            let btnIng = document.getElementById(`${proyecto.nombreApellido}`);

            btnIng.onmouseover = () => {
                btnIng.className = "btn btn-success bi bi-person"
            }

            btnIng.onmouseout = () => {
                btnIng.className = "btn btn-primary bi bi-person"
            }

            btnIng.onclick = () => {
                let modalIng = document.getElementById("cuerpoModalIng");
                proyetosRestantes = proyectos.find(proyecto => proyecto.nombreApellido != proyecto.nombreApellido);
                modalIng.innerHTML = "";
                modalIng.innerHTML += `
                <p>Nombre y Apellido: ${proyecto.nombreApellido}</p>
                <p>Teléfono: ${proyecto.telefono}</p>
                <p>Correo: ${proyecto.correo}</p> 
                `;
            }
        })
}