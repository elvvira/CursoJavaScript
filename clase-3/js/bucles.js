// ## Bucles Determinados

// - Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const countDown = (number) => {
    for (let index = number; index >= 0; index--){
       console.log(index) 
    }
}
countDown(9)

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumaArray = (array) => {
    let resultado = 0
    for (const number of array) {
        resultado = resultado + number;
    }
    console.log(resultado)
}

sumaArray([1,2,3,4,5,6,7,8,9,10])

// - Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

// 4 x 0 = 0
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

const tablaMultiplicar = (number) => {
    for (let index = 0; index <= 10; index++) {
        console.log(`${number} x ${index} = ${number * index}`)
    }
}
tablaMultiplicar(4)

// - Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

// 4 x 10 = 40
// 4 x 9 = 36
// 4 x 8 = 32
// 4 x 7 = 28
// 4 x 6 = 24
// 4 x 5 = 20
// 4 x 4 = 16
// 4 x 3 = 12
// 4 x 2 = 8
// 4 x 1 = 4
// 4 x 0 = 0

const tablaInversa = (number) =>{
    for (let index = 10; index >= 0; index--) {
        console.log(`${number} x ${index} = ${number*index}`)
    }
}
tablaInversa(4)

// - Crea una función que reciba un año y tu edad, la función debe imprimir:

//   - "naciste en el año X"
//   - "En el año X cumpliste 1 año"
//   - "En el año X cumpliste 2 años"
//   - "En el año X cumpliste 3 años"

const calculateAge = (year, age) => {
    console.log(`naciste en el año ${year - age}`)
    
    for (let index = 1; index <= age; index++) {
        if(index===1){
            console.log(`En el año ${index+(year-age)} cumpliste ${index} año`)
        } else{
            console.log(`En el año ${index+(year-age)} cumpliste ${index} años`)
        }
    }
}
calculateAge(2022, 22)

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const pares = (a, b) => {
    for (let index = a; index <= b; index++) {
        if (index%2===0){
            console.log(index)
        }
    }
}
pares(2, 12)

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const repeatValues = () => {
    const array1 = [];
    const array2 = [];
    
    for (let index = 0; index < 5; index++) {
        const randomNumber1 = Math.floor(Math.random()*10)
        const randomNumber2 = Math.floor(Math.random()*10)
        array1.push(randomNumber1)
        array2.push(randomNumber2)
        
        if(randomNumber1===randomNumber2){
            console.log(`se repite el numero ${randomNumber1}`)
        } 
    }
    
    console.log(array1)
    console.log(array2)
}
repeatValues()

// - Crea una función que reciba un número y te diga si es primo o no.

const primo = (number) => {
    for (let index = 2; index < number; index++) {
        if(number%index===0){
            return(`${number} no es primo`)
        }
    }
    return(`${number} es primo`)
}
console.log(primo (112))


// - Crea una función que reciba un número entero e imprima un lista de números impares como ésta:
//   Si recibe un 6 imprimirá esta lista.
//   1
//   3 1
//   5 3 1
//   7 5 3 1
//   9 7 5 3 1
//   11 9 7 5 3 1                                                                                               


// const printList = (number) => {
//     let contador = 0;
//     for (let index = 0; index <= number; index++) {
//         // console.log(index)
//         for (let j = 0; j < number*2; j++) {
//             if(j%2===1){
//                 console.log(j)
//             }
//         }
//     }
// }
// printList(6)

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)


const pirntArray = (array) =>{
    for (let index = 1; index <= array.length; index++) {
        console.log(`Número: ${index} - Cuadrado: ${index*index} - Cubo: ${index*index*index}`)
    }
    
}
pirntArray([1,2,3,4,5,6,7,8,9,10])

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const printWord = (word) => {
    let vocals = ['a','e','i','o','u']
    for (let index = 0; index < word.length; index++) {
        if (vocals.indexOf(word[index])!== -1){
            
            console.log(word[index].toUpperCase())
        }else{
            console.log(word[index])
        }
    }
    
}
printWord('buenos dias')

// - Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal

const countVocals = (frase) => {
    let vocals = 'aeiouAEIOU';
    let contador = 0;
    for (let index = 0; index < frase.length; index++) {
        if (vocals.indexOf(frase[index])!== -1){
            
            contador= contador +1;
        }
        
    }
    console.log(`Hay ${contador} vocales`);
}
countVocals('hola me llamo elvira')

console.clear()
// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const intercalado = (a, b) => {

}
intercalado('hola', 'adios')

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"