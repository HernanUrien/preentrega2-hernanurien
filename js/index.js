const listaProductos = [
    { nombre:"head", precio: 96000, codigo: "a" },
    { nombre:"babolat", precio: 99999, codigo: "b" },
    { nombre:"wilson por staff", precio: 105000, codigo: "c" },
    { nombre:"wilson hammer", precio: 90199, codigo: "d" },
    { nombre:"prince", precio: 87600, codigo: "e" }
];

const listaNuevo = "¿Que raqueta te gusta? \n" +
    "a - Head \n" +
    "b - Babolat \n" +
    "c - Wilson Pro Staff \n" +
    "d - Wilson Hammer \n" +
    "e - Prince \n"

function eleccionProducto() {
    let eleccion = prompt(listaNuevo).trim().toLowerCase();
    console.log(listaProductos.filter((producto) => producto.nombre === eleccion || producto.codigo === eleccion))
}


let consulta = true

function consultarPrecio() {
    while (consulta) {
        eleccionProducto()
        consulta = confirm("Queres saber el valor de alguna otra raqueta?")
    }
}

let carrito = [];

function comprarProducto() {
    let agregarProducto = true
    while (agregarProducto) {
    let eleccionCompra = prompt(listaNuevo).trim().toLowerCase();
    for (let i = 0; i < listaProductos.length; i++)
    if (eleccionCompra === listaProductos[i].nombre) {
        carrito.push(listaProductos[i])
        agregarProducto = confirm("¿Queres agregar otro producto")
    } if (eleccionCompra === "" || eleccionCompra === null){
        alert ("Eleccion inexistente!")
        agregarProducto = confirm("¿Queres intentar de nuevo")
    }
}
console.log(carrito)
}

let signup = true
let login = true

while (signup === true) {
    let usuario1 = prompt("Ingresa un nombre de usuario").trim();
    let contraseñaUsuario1 = prompt("Crea tu contraseña").trim();
    if (usuario1.trim() === "" || contraseñaUsuario1.trim() === "") {
        alert("Es necesario crea un cuenta")
    } else {
        alert("Completa el login para poder acceder al sitio")
        signup = false
        do {
            let usuario = prompt("Ingresa tu nombre de usuario").trim();
            let contraseña = prompt("🔐Ingresa tu contraseña")
            if (usuario === usuario1 && contraseña === contraseñaUsuario1) {
                alert("✅Bienvenido, " + usuario1.toUpperCase())
                login = false
            } else {
                alert("❌Nombre de usuario o contraseña incorrecta")
                login = true
            }
        } while (login === true);
    }
}