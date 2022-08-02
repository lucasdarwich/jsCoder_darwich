let operacion = prompt("Indicar tipo de operación (USD para convertir a Dolares - ARS para convertir a Pesos)").toUpperCase();

//Funcion Flecha
const montoDolares = (montoPesos, tasaCambio) => montoPesos / tasaCambio;
const montoPesos = (montoDolares, tasaCambio) => montoDolares * tasaCambio;

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



// Funciones (se hicieron primero para luego pasarlas a funciones flecha)

/* //función para convertir de ARS a USD
function montoDolares(montoPesos, tasaCambio) {
    let dolares = montoPesos / tasaCambio;
    console.log("El monto ingresado ($ " + montoPesos + ") es igual a " + dolares + " USD");
} */ 

/* //función para convertir de USD a ARS
function montoPesos(montoDolares, tasaCambio) {
    let pesos = montoDolares * tasaCambio;
    console.log("El monto ingresado (USD " + montoDolares + ") es igual a " + pesos + " ARS");
}  */