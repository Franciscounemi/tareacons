const datos = {
    imagen: 'https://i.blogs.es/ec46d6/eye-3246419_1920/1366_521.jpg',
    correo: 'fpinargotic@unemi.edu.ec'
}
console.log(datos)

const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
const mostrarDatos1 = (avatar) =>{
    const {imagen,correo} = avatar
    return(
        `
        <img src=${imagen} alt=${correo}/>        
        `
    )
}
const mostrarDatos2 = ({imagen:img,correo}) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructuring</h3>"
$root.innerHTML += mostrarDatos2(datos)