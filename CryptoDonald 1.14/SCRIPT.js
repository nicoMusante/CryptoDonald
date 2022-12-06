let espacioAlmacen = 10000
let precioMejoraAlmacen = 100

let comida = 0
let valorEmpresa = 300
let tiempoComida = 1000
let empresaVentaComida = 0

let balance = 1000
let nivel = 1
const maxNivel = 10 //Cocineros

let cantidadJefe = 0
let valorJefe = 50
let MaxNivjefe = 5 //Gerente
let tiempo = 1000

let donacion = 0

let nivel1 = 1
let nivel2 = 1
let nivel3 = 1
let nivel4 = 1
let nivel5 = 1
let nivel6 = 1
let nivel7 = 1
let nivel8 = 1
let nivel9 = 1
let nivel10 = 1

let cantNecesNivel1 = 10
let cantNecesNivel2 = 10
let cantNecesNivel3 = 10
let cantNecesNivel4 = 10
let cantNecesNivel5 = 10
let cantNecesNivel6 = 10
let cantNecesNivel7 = 10
let cantNecesNivel8 = 10
let cantNecesNivel9 = 10
let cantNecesNivel10 = 10

let nivelJefe1 = 0
let nivelJefe2 = 0
let nivelJefe3 = 0
let nivelJefe4 = 0
let nivelJefe5 = 0
let nivelJefe6 = 0
let nivelJefe7 = 0
let nivelJefe8 = 0
let nivelJefe9 = 0
let nivelJefe10 = 0

let valorNivelJefe1 = 100
let valorNivelJefe2 = 100
let valorNivelJefe3 = 100
let valorNivelJefe4 = 100
let valorNivelJefe5 = 100
let valorNivelJefe6 = 100
let valorNivelJefe7 = 100
let valorNivelJefe8 = 100
let valorNivelJefe9 = 100
let valorNivelJefe10 = 100

let tiempoJefe1 = 1100
let tiempoJefe2 = 1000
let tiempoJefe3 = 1000
let tiempoJefe4 = 1000
let tiempoJefe5 = 1000
let tiempoJefe6 = 1000
let tiempoJefe7 = 1000
let tiempoJefe8 = 1000
let tiempoJefe9 = 1000
let tiempoJefe10 = 1000


let temporal = 0

function clickear1(niv, piso) {
    if (comida + (niv * piso) <= espacioAlmacen) {
        comida = comida + (niv * piso) //Acordarse de darle más prioridad al piso que al nivel 

        document.getElementById("comida").innerHTML = comida
    } else { console.log("asd") }
    return comida
}



function subirNivel1(cantNecesNivel, niv) {
    if (balance >= cantNecesNivel && niv < maxNivel) {
        console.log(nivel1)
        niv = niv + 1
        temporal = temporal + 1
        balance = balance - cantNecesNivel
        cantNecesNivel = cantNecesNivel * 2
        document.getElementById("saldo").innerHTML = balance
        document.getElementById("nivel").innerHTML = "COCINA " + niv
    } else {
        alert("Necesitas " + cantNecesNivel + " de saldo O ya sos nivel maximo " + maxNivel)
    }
    return balance, niv
}

//MANUAL
function venderComida() {
    if (comida >= 1) {
        setTimeout(venderComidaAumentarDinero, 1000)
    } else { alert("Necesitas minimo 1 de comida") }
}


function comprarEmpresa() {
    if (balance >= valorEmpresa) {
        setInterval(venderComidaAumentarDinero, tiempoComida)
        empresaVentaComida = 1
        balance = balance - valorEmpresa
        document.getElementById("saldo").innerHTML = balance
    } else { alert("Es necesario tener " + valorEmpresa + " para poder comprar la empresa") }
    return empresaVentaComida
}



function venderComidaAumentarDinero() {
    if (comida >= 1) {
        comida = comida - 1
        balance = balance + 1
        document.getElementById("saldo").innerHTML = balance
        document.getElementById("comida").innerHTML = comida
    }
    return comida, balance
}





function subirNivelvenderComidaAuto() {
    if (empresaVentaComida == 1 && balance >= valorEmpresa * 2) {
        valorEmpresa = valorEmpresa * 2
        balance = balance - valorEmpresa
        document.getElementById("saldo").innerHTML = balance
        tiempoComida = tiempoComida - 100
    } else {
        alert("Necesitas tener la empresa de venta de comidad comprada y tener " + valorEmpresa * 2)
    }
    return tiempoComida, balance, valorEmpresa
}


function mejorarAlmacen() {
    if (balance >= precioMejoraAlmacen * 2) {
        espacioAlmacen = espacioAlmacen * 2
        precioMejoraAlmacen = precioMejoraAlmacen * 2
        balance = balance - precioMejoraAlmacen
        document.getElementById("saldo").innerHTML = balance
    } else { alert("Necesitas " + precioMejoraAlmacen * 2 + " Para mejorar el almacen") }
    return espacioAlmacen, precioMejoraAlmacen, balance
}


//COMPRAR COCINA2

function comprarCocina2() {


    if (balance >= 300) {
        document.getElementById("titulo2").innerHTML = "PISO 2"


        let cocina2 = document.getElementById("cocina2")

        const button = document.createElement('button');
        button.innerText = 'Cocina2';
        cocina2.appendChild(button)
        button.setAttribute("onclick", "clickear1(" + nivel2 + "," + 2 + ")");
        button.setAttribute("id", "clickear2");

        const button2 = document.createElement('button');
        button2.innerText = 'Subir Nivel';
        cocina2.appendChild(button2)
        button2.setAttribute("onclick", "subir2()");

        const br = document.createElement('br');
        cocina2.appendChild(br)

        const button3 = document.createElement('button');
        button3.innerText = 'Contratar JEFE';
        cocina2.appendChild(button3)

        const button4 = document.createElement('button');
        button4.innerText = 'Subir Nivel JEFE';
        cocina2.appendChild(button4)

        const button5 = document.getElementById('botonCompra');
        cocina2.removeChild(button5)


        const button6 = document.createElement('button');
        button6.innerText = 'COMPRAR PISO 3';
        button6.setAttribute("id", "botonCompra2");
        button6.setAttribute("onclick", "comprarCocina3()");
        cocina3.appendChild(button6)



        balance = balance - 300
        document.getElementById("saldo").innerHTML = balance
    } else {
        alert("Necesitas 300$")
    }
    return balance
}






//COMPRAR COCINA 3


function comprarCocina3() {


    if (balance >= 600) {

        document.getElementById("titulo3").innerHTML = "PISO 3"


        let cocina3 = document.getElementById("cocina3")

        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'Cocina3';
        cocina3.appendChild(button)
        button.setAttribute("onclick", "clickear1(" + nivel3 + "," + 3 + ")");

        const button2 = document.createElement('button');
        button2.type = 'button';
        button2.innerText = 'Subir Nivel';
        cocina3.appendChild(button2)
        button2.setAttribute("onclick", "subir3()");

        const br = document.createElement('br');
        cocina3.appendChild(br)

        const button3 = document.createElement('button');
        button3.type = 'button';
        button3.innerText = 'Contratar JEFE';
        cocina3.appendChild(button3)

        const button4 = document.createElement('button');
        button4.type = 'button';
        button4.innerText = 'Subir Nivel JEFE';
        cocina3.appendChild(button4)

        const button5 = document.getElementById('botonCompra2');
        cocina3.removeChild(button5)

        balance = balance - 600
        document.getElementById("saldo").innerHTML = balance

    } else {
        alert("Necesitas 600$")
    }
    return balance

}










var width = 0;


function update() {
    var element = document.getElementById("myprogressBar");
    var identity = setInterval(scene, 100);
    function scene() {
        if (width == 100) {
            alert("LLEGASTE A 100%!!!!!")
            clearInterval(identity);
        } else if (comida == 0 || width >= 100) {
            clearInterval(identity);
        } else if (comida >= 1) {
            comida = comida - 1
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
        }
    }
    return comida, width
}



//Nico

function clickear1Jefe(niv, piso, nivJefe) {
    if (nivJefe >= 1) {
        clickear1(1, 1)
        console.log("asd")
    }
    else
        alert("No se ha contratado ningun jefe")

    document.getElementById("saldo").innerHTML = balance
    return balance
}


function contratarJefe1() {
    if (balance >= valorJefe) {
        balance = balance - valorJefe
        document.getElementById("saldo").innerHTML = balance + "$"
        document.getElementById("subirJefe").innerHTML = "Subir Nivel JEFE"
        nivelJefe1 = 1
        console.log("asddd")
        subirNivelJefe1()
    }
    else
        alert("Se necesita " + valorJefe + " de saldo para contratar un jefe")

    return nivelJefe1, balance, comida
}

function contratarJefe2(nivJefe) {
    if (balance >= valorJefe) {
        balance = balance - valorJefe
        document.getElementById("saldo").innerHTML = balance + "$"
        document.getElementById("subirJefe").innerHTML = "Subir Nivel JEFE"

        nivelJefe2 = 1
    }
    else
        alert("Se necesita " + valorJefe + " de saldo para contratar un jefe")

    return nivJefe, balance
}

function contratarJefe3(nivJefe) {
    if (balance >= valorJefe) {
        balance = balance - valorJefe
        document.getElementById("saldo").innerHTML = balance + "$"
        document.getElementById("subirJefe").innerHTML = "Subir Nivel JEFE"
        nivelJefe3 = 1
    }
    else
        alert("Se necesita " + valorJefe + " de saldo para contratar un jefe")

    return nivJefe, balance
}

function subirNivelJefe1() {
    if (nivelJefe1 < MaxNivjefe && balance >= valorNivelJefe1) {
        nivelJefe1 = nivelJefe1 + 1
        valorNivelJefe1 = valorNivelJefe1 * 2
        tiempoJefe1 = tiempoJefe1 - 100
        let intervalo
        clearInterval(intervalo)
        intervalo = setInterval(function () { clickear1(nivel1, 1) }, tiempoJefe1)
        // document.getElementById("NivelDeJefe").innerHTML = nivelJefe
        return tiempoJefe1, nivelJefe1, valorNivelJefe1
    }
    else
        if (nivel == MaxNivjefe)
            alert("Nivel máximo de jefe alcanzado")
        else
            alert("Se nececisita $" + valorNivJefe + " de saldo para subir el nivel del jefe")
    return nivelJefe1
}

function subirNivelJefe2(nivJefe, valorNivJefe, tiempoJ, niv, piso) {
    if (nivJefe < MaxNivjefe && balance >= valorNivJefe) {
        nivelJefe2 = nivelJefe2 + 1
        valorNivJefe = valorNivJefe * 2
        tiempoJ = tiempoJ - 100
        setInterval(clickear1Jefe(niv, piso, nivJefe), tiempoJ);
        // document.getElementById("NivelDeJefe").innerHTML = nivelJefe
        return tiempoJ, nivJefe, valorJefe
    }
    else
        if (nivel == MaxNivjefe)
            alert("Nivel máximo de jefe alcanzado")
        else
            alert("Se nececisita $" + valorNivJefe + " de saldo para subir el nivel del jefe")
    return nivelJefe2
}




function subirNivelJefe3(nivJefe, valorNivJefe, tiempoJ, niv, piso) {
    if (nivJefe < MaxNivjefe && balance >= valorNivJefe) {
        nivelJefe3 = nivelJefe3 + 1
        valorNivJefe = valorNivJefe * 2
        tiempoJ = tiempoJ - 100
        setInterval(clickear1Jefe(niv, piso, nivJefe), tiempoJ);
        // document.getElementById("NivelDeJefe").innerHTML = nivelJefe
        return tiempoJ, nivJefe, valorJefe
    }
    else
        if (nivel == MaxNivjefe)
            alert("Nivel máximo de jefe alcanzado")
        else
            alert("Se nececisita $" + valorNivJefe + " de saldo para subir el nivel del jefe")
    return nivelJefe3
}



//SUBIR JEFE POR NIVELES
function subirJefe1(nivJefe) {
    if (nivJefe == 0) {
        contratarJefe1()

    }
    else
        subirNivelJefe1()

}

function subirJefe2(nivJefe, valorNivJefe, tiempoJ, niv, piso) {
    if (nivelJefe2 == 0)
        contratarJefe2(nivelJefe2)
    else
        subirNivelJefe2(nivJefe, valorNivJefe, tiempoJ, niv, piso)

}


function subirJefe3(nivJefe, valorNivJefe, tiempoJ, niv, piso) {
    if (nivelJefe3 == 0)
        contratarJefe3(nivelJefe3)
    else
        subirNivelJefe3(nivJefe, valorNivJefe, tiempoJ, niv, piso)

}







function piso1() {
    clickear1(nivel1, 1) //de recuerdo bro
}

function subir1() {
    temporal = nivel1
    subirNivel1(cantNecesNivel1, nivel1)
    nivel1 = temporal
    return nivel1
}

function subir2() {
    temporal = nivel2
    subirNivel1(cantNecesNivel1, nivel2)
    nivel2 = temporal
    let cocina2 = document.getElementById("cocina2")
    let nivell = document.getElementById("clickear2")
    const button = document.createElement('button');
    button.innerText = 'Cocina2';
    button.setAttribute("onclick", "clickear1(" + nivel2 + "," + 2 + ")");
    button.setAttribute("id", "clickear2");
    cocina2.replaceChild(button, nivell)
    console.log(nivel2)
    return nivel2
}

function subir3() {
    temporal = nivel1
    subirNivel1(cantNecesNivel1, nivel1)
    nivel1 = temporal
    console.log(nivel1)
    return nivel1
}















function verificar() {
    console.log("BALANCE: " + balance)
    console.log("NIVEL " + nivel)
    console.log("COMIDA " + comida)
    console.log(nivel1)
}