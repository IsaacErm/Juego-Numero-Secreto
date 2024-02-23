let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function VerificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        } else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos ++;
        limpiarNumero();
    }
    return;
}

function limpiarNumero(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionDeInicio(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarNumero();
    condicionDeInicio();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } 
    else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } 
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionDeInicio();



