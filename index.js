const nombre = 'Jonathan';
let Boolean = true;
let edad = 26;
let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicar = num1 * num2;
let dividir = num1 / num2;
let modulo = num1 % num2;


for (var i = 1; i <= edad; i++) {
    if (edad == i)
        console.log(nombre + ' Tienes ' + i + ' años')

}

if (i >= 18) {
    console.log(nombre + ' eres mayor de edad ')
} else {
    console.log(nombre + ' eres menor de edad ')
}



if (Boolean) {
    console.log(nombre + ' eres vegetariano')
} else {
    console.log(nombre + ' no eres vegetariano')
}



console.log('La suma es: ' + suma)
console.log('La resta es: ' + resta)
console.log('La multiplicación es: ' + multiplicar)
console.log('La división es: ' + dividir)
console.log('La división módulo es: ' + modulo)













