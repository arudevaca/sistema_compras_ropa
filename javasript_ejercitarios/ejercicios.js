// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    let result = 10 >= 9;
    // Tu código aquí...
    console.log("La afirmación de que 10 es mayor o igual que 9 es", result);
}
compareTenAndNine();

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    let result2 = 0 === 0;
    console.log("La afirmación de que 0 es igual a 0 es", result2);
    // Tu código aquí...
}
compareZeroAndZero();

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    let result3 = 7 > 8 && 7 < 10;
    console.log("La afirmación de que 7 es mayor que 8 y menor que 10 es", result3); 
    // Tu código aquí...
}
compareSeven();

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
        const precioInicial = 1500;
        const descuento = 0.25; 
        const dineroDisponible = 1150;
    
        // Calcula el precio con descuento
        const precioConDescuento = precioInicial * (1 - descuento);
    
        // Verifica si puedes comprar el producto
        if (dineroDisponible >= precioConDescuento) {
            console.log("Puedes comprar el producto.");
        } else {
            console.log("No puedes comprar el producto.");
        }
    }
    
    canBuyProduct();
    // Tu código aquí...

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
    // Tu código aquí...
}
createMessageVariable();

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2 + 3;
    console.log("La suma de 2 y 3 es", resultado);
    // Tu código aquí...
}
createSumVariable();

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    let IS_DISABLED = true;
    console.log("La constante IS_DISABLED es",IS_DISABLED);
    // Tu código aquí...
}
createDisabledConstant();

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    let capacidad = 'null';
    console.log("La variable capacidad es", capacidad);
    // Tu código aquí...
}
createNullVariable();

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    let dinero = "undefined";
    console.log("La variable dinero es", dinero);
    // Tu código aquí...
}
createUndefinedVariable();

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "HelloMotto"; // valor para la variable userName
    console.log("El tipo de dato de user name es", typeof userName); 
    // Tu código aquí...
}
checkUserNameType();

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    // Tu código aquí...
    let dogId = 'Doggo';
    console.log("El tipo de dato de dogId es", typeof dogId);
}
checkDogIdIsString();

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    let message = "Hola Mundo";
    console.log(message);
    // Tu código aquí...
}
logMessage();

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30;
    console.log("La edad es", edad);
    // Tu código aquí...
}
logAge();

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    let version = '2024';
    console.log('La versión de JavaScript es ' + version);
    // Tu código aquí...
}
logVersion();

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};