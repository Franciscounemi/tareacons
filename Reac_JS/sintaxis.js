//variables primitivas
let nombre = "Francisco"
let apellido = "Pinargoti"
let edad = 21
let estado = true
//arreglos
const numeros = [2,45,60,85,10]
//objetos
const articulo = {
    descripcion:'Coca cola',
    precio:2,
    stock:1000
}
const notas = [
    {nombre:"Francisco", promedio:100,
        parciales:[
            {primer:[18,20]},
            {segundo:[10,15]}
        ]
    },
    {nombre:"Arturo", promedio:60,
        parciales:[
            {primer:[23,15]},
            {segundo:[30,13]}
        ]
    },
    {nombre:"Cesar", promedio:100,
        parciales:[
            {primer:[8,16]},
            {segundo:[33,13]}
        ]
    }
]
//if (condicional)
/*if (nombre)
    console.log("nombre:",nombre,"|","edad:",edad)
else
    console.log("No ha ingresado nombre:",nombre)*/

let respuesta = (nombre==undefined) ? "Variable no creada" : nombre
//console.log(respuesta)

//camnbios, presentacion
articulo.precio=30
articulo.estado=true
/* console.log("Articulo:",articulo, "Descripcion:", articulo.descripcion, "Precio:", articulo.precio, "Estado:",articulo.estado)
console.log(notas[1])
console.log(notas[1].nombre)
console.log(notas[1].parciales)*/
//switch
dia = 2 
switch (dia){
    case 1:
        //console.log("Lunes")
        break
    case 2:
        //console.log("Martes")
        break
    default:
        //console.log("Dia no valido")
        break
}
// try and catch
let x=20, y=1
try {
    if (y == 0)
        throw("Division no es pérmitida para 0")
    let resp = x/y
    //console.log(resp)
}catch(error){
    //console.log(error)
}

//Ciclos
const numeross = [2,45,60,85,10,8]/*
let pos=0
while (pos < numeross.length){
    console.log(pos,numeross[pos])
    pos += 1
}
while (pos < numeross.length && numeross[pos]!=85){
    console.log(pos,numeross[pos])
    pos += 1
}*/
//console.log("todo")
for (let index = 0; index < numeross.length; index++) {
        
}

for (let index = 0; index < numeross.length && numeross[index]!=85; index++) {
 
}
for (let index = numeross.length-1; index >= 0; index--) {
}

//funciones
function suma(){
    let n1 =5
    let n2 =20
    //console.log("La suma de",n1, "+",n2,"es igual a:" ,n1+n2)
}
//suma()
function Multiplicar(n1=7,n2=8){
    return n1*n2
}
//console.log(Multiplicar(5,8))

const sum = () => {
    let n1 =5
    let n2 =20
    //console.log(`La suma: ${n1} + ${n2} es igual a: ${n1+n2}`)
}
//sum()

const Mult = (n1=7,n2=9) => {
    n1 = (n1) ? n1 : 2
    n2 = (n2) ? n2 : 7
    return n1*n2
}
//console.log(Mult(5,8))

function resta(n1=9,n2=2){
    //console.log("La resta de",n1, "-",n2,"es igual a:" ,n1-n2)
}
//resta()
const rest =(n1=5,n2=3)=> n1 - n2

//console.log(rest())

function division(n1=6,n2=2){
    respp= n2 ? n1/n2 : 0
    return n1 / n2
}
const div = (n1=5,n2=9) => n2 ? n1/n2 : 0
//console.log(div(10,5))
//console.log(division(7,2)) 
//templates presentacion
const arreglo = [1,35,70,12,42,76]
for (let index = 0; index < numeross.length; index++) {
    console.log(`${index} [ ${numeross[index]} ]`)
}
