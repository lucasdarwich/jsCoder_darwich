let operacion = prompt("Indicar tipo de operación (USD para convertir a Dolares - ARS para convertir a Pesos)").toUpperCase();

if (operacion === "usd".toUpperCase()) {
    let pesos = parseFloat(prompt("Ingresar el Monto en pesos "));
    let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
    montoDolares(pesos, tc);
} else if (operacion === "ars".toUpperCase()) {
    let dolares = parseFloat(prompt("Ingresar el Monto en Dolares "));
    let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
    montoPesos(dolares,tc);
}


function montoDolares(montoPesos, tasaCambio) {
    let dolares = montoPesos / tasaCambio;
    console.log("El monto ingresado ($ " + montoPesos + ") es igual a " + dolares + " USD");
}

function montoPesos(montoDolares, tasaCambio) {
    let pesos = montoDolares * tasaCambio;
    console.log("El monto ingresado (USD " + montoDolares + ") es igual a " + pesos + " ARS");
}

/* function divisa(operacion) {
    switch (operacion) {
        case "usd".toUpperCase():

            break;
        case "ARS":
        default:
            return 0;
            break;
    }
}


console.log(divisa(operacion)); */