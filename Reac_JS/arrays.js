const numeros = [12,2,25,40,43]
let alumnos = [
    {nombre:"Francisco",n1:10,n2:15},
    {nombre:"JArturo",n1:30,n2:20},
    {nombre:"Cesar",n1:15,n2:23},
    {nombre:"Luis",n1:46,n2:12},
    {nombre:"Joshue",n1:32,n2:15},
    {nombre:"Javier",n1:15,n2:44}
]
console.clear()
//console.log(numeros,alumnos)

for (let index = 0; index < alumnos.length; index++)
    //console.log("alumnos -->",alumnos[index].nombre)

alumnos.forEach(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});
alumnos.map(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});

const item = alumnos.map(alumno => {
    prom = (alumno.n1+alumno.n2)/2
    return [alumno.nombre,prom]
});

//console.log(item)

const items = alumnos.filter(alumno => alumno.nombre!="Joshue");

alumnos=[...items]
console.log(items)