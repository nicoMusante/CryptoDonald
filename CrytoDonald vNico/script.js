let balance = 0
let nivel = 1
let cantNivelCocina = 10
let maxNivel = 5 //Cocineros

let cantidadJefe = 0
let valorJefe = 50
let Maxjefe = 1 //Gerentes
let nivelJefe = 0
let tiempo = 1100
let cantComida = 0
let tipoDistrib = "NINGUNA"
let cantUniDistrib = 0
let tiempoVenta = 0


function clickear1() {
    if (nivel == 1) {
        cantComida = (cantComida + 1)
    } if (nivel == 2) {
        cantComida = cantComida + 2
    } if (nivel == 3) {
        cantComida = cantComida + 3
    }
    if (nivel == 4) {
        cantComida = cantComida + 4
    }
    if (nivel == 5) {
        cantComida = cantComida + 5
    }
    document.getElementById("comida").innerHTML = cantComida
    return cantComida
}


function clickear1Jefe() {
    if (nivelJefe == 1) {
        cantComida = cantComida + nivelJefe 
    } if (nivelJefe == 2) {
        cantComida = cantComida + nivelJefe 
    } if (nivelJefe == 3) {
        cantComida = cantComida + nivelJefe 
    }
    if (nivelJefe == 4) {
        cantComida = cantComida + nivelJefe 
    }
    if (nivelJefe == 5) {
        cantComida = cantComida + nivelJefe 
    }
    document.getElementById("comida").innerHTML = cantComida
    return cantComida
}


function subirNivel1() {
    if (balance >= cantNivelCocina && nivel < maxNivel) {
        nivel = nivel + 1
        balance = balance - cantNivelCocina
        cantNivelCocina = cantNivelCocina * 2
        document.getElementById("saldo").innerHTML = balance + "$"
        document.getElementById("nivelCocina").innerHTML = nivel}
    else 
        if(nivel == maxNivel)
            alert("La cocina está a nivel maximo") 
        else
            alert("Se requiere " + cantNivelCocina + " de saldo para subir el nivel de la cocina")
    
    return balance, cantNivelCocina
}

function contratarJefe1() {
    if (balance >= valorJefe & cantidadJefe < Maxjefe) {
        cantidadJefe = cantidadJefe + 1
        balance = balance - valorJefe
        document.getElementById("saldo").innerHTML = balance + "$"
        subirNivelJefe1()} 
    else 
        if (cantidadJefe == Maxjefe){
            alert("Ya se han contratado la cantidad maxima de jefes")
        }
        else    
            alert("Se necesita " + valorJefe + " de saldo para contratar un jefe")
    return cantidadJefe, balance
}


//function gananciasJefe1() {
//  console.log(tiempo)
//setInterval(clickear1, tiempo);
//}



function subirNivelJefe1() {
    if (cantidadJefe!=0){
    if(nivelJefe<5){
        nivelJefe = nivelJefe + 1
        tiempo = tiempo - 100
        setInterval(clickear1Jefe, tiempo);
        document.getElementById("NivelDeJefe").innerHTML = nivelJefe   
        return tiempo, nivelJefe
    }
    alert("Nivel máximo de jefe alcanzado")
    return}
    alert("No se ha contratado ningun jefe")
}

function venderComida1() {
    if (cantComida>0){
        cantComida=cantComida-1
        balance=balance+5
        document.getElementById("saldo").innerHTML = balance + "$"
        document.getElementById("comida").innerHTML = cantComida    
    }
    return cantComida, balance
}

function contratarDistrib1(){
    if (tipoDistrib=="NINGUNA" && balance>=100){
        balance=balance-100
        tipoDistrib = "SKATERS"
        cantUniDistrib=1
        tiempoVenta=6000}
    else 
        if(cantUniDistrib==3){
            switch (tipoDistrib) {
                case "SKATERS":if (balance>=200){
                    tipoDistrib="BICIS"
                    balance=balance-200
                    cantUniDistrib=0
                    tiempoVenta=4000}
                    else
                        alert("Se necsita 200 de saldo para contratar un nuevo tipo de distribución")
                break;
                case "BICIS":if (balance>=400){
                    tipoDistrib="MOTOS"
                    balance=balance-400
                    cantUniDistrib=0
                    tiempoVenta=3000}
                    else
                        alert("Se necsita 400 de saldo para contratar un nuevo tipo de distribución")
                break;
                case "MOTOS":if (balance>=800){
                    tipoDistrib="DRONS"
                    balance=balance-800
                    cantUniDistrib=0
                    tiempoVenta=2000}
                    else
                    alert("Se necesita 800 de saldo para contratar un nuevo tipo de distribución")
                break;
                default: alert("Ya está contratada la mejor forma de distribución posible")}
        }
        else    
            alert("Para contratarse un nuevo tipo de distribución es necesario poseer 3 unidades del tipo de distribucion actual")
    setInterval(venderComida1, tiempoVenta);
    document.getElementById("cantUniDistrib").innerHTML = cantUniDistrib
    document.getElementById("saldo").innerHTML = balance + "$"
    document.getElementById("tipoDistrib").innerHTML = tipoDistrib
    return balance, tipoDistrib, cantUniDistrib, tiempoVenta
}

function aumenUniDistrib1(){
    if (tipoDistrib!="NINGUNA"){
        if (cantUniDistrib<3){
            switch (tipoDistrib){
                case "SKATERS": if(balance>=75){
                    balance=balance-75
                }
                break;
                case "BICIS": if(balance>=150){
                    balance=balance-150
                }
                break;
                case "MOTOS": if(balance>=300){
                    balance=balance-300
                }
                break;
                case "DRONS": if(balance>=600){
                    balance=balance-600
                }
                break;
                default: console.log("Ya no pueden aumentarse las unidades de " + tipoDistrib)
                return balance, tipoDistrib, cantUniDistrib, tiempo
                }
            cantUniDistrib=cantUniDistrib+1
            tiempoVenta=tiempoVenta*0.75
            setInterval(venderComida1, tiempoVenta)
            document.getElementById("saldo").innerHTML = balance + "$"
            document.getElementById("cantUniDistrib").innerHTML = cantUniDistrib 
            return balance, tipoDistrib, cantUniDistrib, tiempoVenta}
        else  
            alert("Ya no pueden aumentarse las unidades de " + tipoDistrib)}
    else    
       alert("No se ha contratado ninguna tipo de distribucion de comida")         
}

function subirNivelDistrib(){
    
}





























































function verificar() {
    console.log("BALANCE: " + balance)
    console.log("NIVEL DE COCINA: " + nivel)
    console.log("JEFES: " + cantidadJefe)
    console.log("NIVEL DE JEFE: " + nivelJefe)
    console.log("CANTIDAD DE COMIDA: " + cantComida)
    console.log("TIPO DE DISTRIBUCION: " + tipoDistrib)
    console.log("CANTIDAD DE UNIDADES DE DISTRIBUCION: " + cantUniDistrib)
}