let operacion = prompt("Indicar tipo de operación (USD para convertir a Dolares - ARS para convertir a Pesos)").toUpperCase();

if (operacion == "USD") {
    let pesos = parseFloat(prompt("Ingresar el Monto en pesos "));
    let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
    montoDolares(pesos, tc);
} else if (operacion == "ARS") {
    let dolares = parseFloat(prompt("Ingresar el Monto en Dolares "));
    let tc = parseFloat(prompt("Ingresar Tasa de Cambio"));
    montoPesos(dolares, tc);
} else {
    alert("Opción incorrecta. Intentar nuevamente");
}

// función para convertir de ARS a USD
function montoDolares(montoPesos, tasaCambio) {
    let dolares = montoPesos / tasaCambio;
    console.log("El monto ingresado ($ " + montoPesos + ") es igual a " + dolares + " USD");
}

//función para convertir de USD a ARS
function montoPesos(montoDolares, tasaCambio) {
    let pesos = montoDolares * tasaCambio;
    console.log("El monto ingresado (USD " + montoDolares + ") es igual a " + pesos + " ARS");
}