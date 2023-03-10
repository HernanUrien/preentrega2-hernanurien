const listaNuevo = "¿Que raqueta te gusta? \n" +
    "a - Head \n" +
    "b - Babolat \n" +
    "c - Wilson \n" +
    "d - Yonex \n" +
    "e - Prince \n"


function eleccionProducto() {
    let eleccion = prompt(listaNuevo)
    if (eleccion !== "a" && eleccion !== "b" && eleccion !== "c" && eleccion !== "d" && eleccion !== "e" || eleccion === null) {
        alert("❌Eleccion no valida❌")
    } else {
        switch (eleccion) {
            case "a":
                mensajeValor = "Head $96.000"
                break
            case "b":
                mensajeValor = "Babolat $99.999"
                break
            case "c":
                mensajeValor = "Wilson $105.000"
                break
            case "d":
                mensajeValor = "Yonex $90.199"
                break
            case "e":
                mensajeValor = "Prince $87.600"
                break
            default:
                console.error("Ups, algo salio mal")
        }
        alert(mensajeValor)
    }
}

let consulta = true

function consultarPrecio() {
    while (consulta) {
        eleccionProducto()
        consulta = confirm("Queres saber el valor de alguna otra raqueta?")
    }
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