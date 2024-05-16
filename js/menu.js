window.onload = function () {
    var ej0 = document.getElementById("Ejemplo0")
    var x = document.getElementById("Ejemplo1")
    var y = document.getElementById("Ejemplo2")
    var z = document.getElementById("Ejemplo3")

    /*Hago que empieze con que ninguno se vea*/
    ej0.style.display = "none"
    x.style.display = "none"
    y.style.display = "none"
    z.style.display = "none"

    
}
function show(parametros_div) {
    var ej0 = document.getElementById("Ejemplo0")
    var x = document.getElementById("Ejemplo1")
    var y = document.getElementById("Ejemplo2")
    var z = document.getElementById("Ejemplo3")

    if(parametros_div =="Ejemplo0") {
        ej0.style.display = "block"
        x.style.display = "none"
        y.style.display = "none"
        z.style.display = "none"
        document.getElementById("MenuCero").className= "desactive"
        document.getElementById('MenuUno').className = "active"
        document.getElementById('MenuDos').className = "desactive"
        document.getElementById('MenuTres').className = "desactive"
    }

    if (parametros_div == "Ejemplo1") {
        ej0.style.display = "none"
        x.style.display = "block"
        y.style.display = "none"
        z.style.display = "none"

        document.getElementById("MenuCero").className= "desactive"
        document.getElementById('MenuUno').className = "active"
        document.getElementById('MenuDos').className = "desactive"
        document.getElementById('MenuTres').className = "desactive"


    } else if (parametros_div == "Ejemplo2") {
        ej0.style.display = "none"
        x.style.display = "none"
        y.style.display = "block"
        z.style.display = "none"

        document.getElementById("MenuCero").className= "desactive"
        document.getElementById('MenuUno').className = "desactive"
        document.getElementById('MenuDos').className = "active"
        document.getElementById('MenuTres').className = "desactive"

    } else {
        ej0.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        z.style.display = "block"

        document.getElementById("MenuCero").className= "desactive"
        document.getElementById('MenuUno').className = "desactive"
        document.getElementById('MenuDos').className = "desactive"
        document.getElementById('MenuTres').className = "active"
    }
}
