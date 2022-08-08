// Objeto + Array
const proyectos = [{
        nro: "404",
        expediente: "EX-2020-42118092-APN-DNFYD#ENACOM",
        proponente: "Tancacha",
        tipoRed: "FTTH",
        financiamiento: 23436417.90
    },
    {
        nro: "989",
        expediente: "EX-2020-42456903-APN-DNFYD#ENACOM",
        proponente: "Cumbrecita",
        tipoRed: "FTTH",
        financiamiento: 11523273.08
    },
    {
        nro: "315",
        expediente: "EX-2020-42402494-APN-DNFYD#ENACOM",
        proponente: "Santa Clara",
        tipoRed: "FTTH",
        financiamiento: 21902422.66
    },
    {
        nro: "885",
        expediente: "EX-2020-42118092-APN-DNFYD#ENACOM",
        proponente: "Lavalle",
        tipoRed: "FTTH",
        financiamiento: 32552057.15
    }
];

//Funciones
const montoDolares = (montoPesos, tasaCambio) => montoPesos / tasaCambio;
const montoPesos = (montoDolares, tasaCambio) => montoDolares * tasaCambio;

const ingresarProyecto = (nuevoNro, nuevoExpediente, nuevoProponente, nuevoTipoRed, nuevoFinanciamiento) => [
    proyectos.push({
        nro: nuevoNro,
        expediente: nuevoExpediente,
        proponente: nuevoProponente,
        tipoRed: nuevoTipoRed,
        financiamiento: nuevoFinanciamiento
    })
];

//App - Sistema

let sistema = parseInt(prompt("Que desea realizar? \n 1 Conversor de Divisas escribir \n 2 Buscador de Proyectos \n 3 Agregar Proyecto \n 4 Eliminar Proyecto"));

switch (sistema) {
    case 1:
        let operacion = prompt("Indicar tipo de operación (USD para convertir a Dolares - ARS para convertir a Pesos)").toUpperCase();
        if (operacion == "USD") {
            let pesos = parseFloat(prompt("Ingresar el Monto en pesos "));
            let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
            let resultado = montoDolares(pesos, tc);
            console.log(`El monto ingresado: ${pesos} equivale a USD: ${resultado}`);
        } else if (operacion == "ARS") {
            let dolares = parseFloat(prompt("Ingresar el Monto en Dolares "));
            let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
            let resultado = montoPesos(dolares, tc);
            console.log(`El monto ingresado: ${dolares} equivale a ARS: ${resultado}`);
        } else {
            alert("Opción incorrecta. Intentar nuevamente");
        }
        break;
    case 2:
        let nroProyecto = prompt("Ingresar número de proycto a buscar");
        let proyectoEncontrado;
        for (const proyecto of proyectos) {
            if (proyecto.nro == nroProyecto) {
                alert("Proyecto encontrado:");
                let aString = "Numero de Proyecto: " + proyecto.nro + "\nExpediente: " + proyecto.expediente + "\nProponente: " + proyecto.proponente + "\nTipo de Red: " + proyecto.tipoRed + "\nMonto: " + proyecto.financiamiento;
                alert(aString);
                proyectoEncontrado = proyecto;
            } 
        }
        console.log(`El proyecto se encuentra en el indice: ${proyectos.indexOf(proyectoEncontrado)}`);
        break;
    case 3:
        let newNumber = prompt("Ingresar Numero de Proyecto");
        let newExpediente = prompt("Ingresar Numero de Expediente");
        let newProponente = prompt("Ingrese el Nombre del Proponente");
        let newRed = prompt("Ingrese el tipo de Red");
        let newFinanciamiento = parseFloat(prompt("Ingrese el Monto del Proyecto"));
        ingresarProyecto(newNumber, newExpediente, newProponente, newRed, newFinanciamiento);
        console.table(proyectos);
        break;
    case 4:
        let suprProyecto = prompt("Ingresar número de proycto a eliminar");
        let existe;
        for (const proyecto of proyectos) {
            if (proyecto.nro == suprProyecto) {
                alert("Datos del Proyecto:");
                let aString = "Numero de Proyecto: " + proyecto.nro + "\nExpediente: " + proyecto.expediente + "\nProponente: " + proyecto.proponente + "\nTipo de Red: " + proyecto.tipoRed + "\nMonto: " + proyecto.financiamiento;
                alert(aString);
                existe = proyecto;
                proyectos.splice(proyectos.indexOf(existe), 1);
                alert(`Proyecto Eliminado con Éxito!`);
            } 
        }
        console.table(proyectos);
        break;
    default:
        alert(`${sistema} no se corresponde a una opción valida. Intente Nuevamente. `);
        break;
}