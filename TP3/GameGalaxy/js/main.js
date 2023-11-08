"use strict";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
/** @type {CanvasRenderingContext2D} */
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tableroX = 193, tableroY = 100;
const tableroWidth = 700, tableroHeight = 420;
const select = document.getElementById("dimensionGame");
const btnPlay = document.getElementById("btn-play");
const btnConfirmGame = document.getElementById("btn-confirm-game");
const contentGame = document.getElementById("game-content");
const chooseGame = document.getElementById("choose-game");
const restartGame = document.getElementById("restart-game");
const shiftGame = document.getElementById("shift-game");
const timerGame = document.getElementById("timer-game");
const winnerGame = document.getElementById("winner-game");



canvas.style.display = "none";
timerGame.style.display = "none";
restartGame.style.display = "none";
btnPlay.addEventListener("click", () => {
    chooseGame.style.display = "flex";
})
btnConfirmGame.addEventListener("click", (e) => {
    e.preventDefault();
    contentGame.style.display = "none";
    canvas.style.display = "block";
    timerGame.style.display = "block";
    shiftGame.style.display = "block";
    restartGame.style.display = "block";
    configurarJugadores();
    shiftGame.innerHTML = "Turno de " + nombreJugadores[jugadorActual -1];
    if(jugadorActual === 1){
        shiftGame.innerHTML += `<img class="img-turno-ficha" src='${ficha1}'>`;
    }
    else {
        shiftGame.innerHTML += `<img class="img-turno-ficha" src='${ficha2}'>`;
    }
    reiniciar();
    clearInterval(temporizador);
    contador = duracionTotal;
    temporizador = setInterval(actualizarTemporizador, 1000);
})
restartGame.addEventListener("click", () => {
    contentGame.style.display = "block";
    chooseGame.style.display = "flex";
    canvas.style.display = "none";
    timerGame.style.display = "none";
    shiftGame.style.display = "none";
    restartGame.style.display = "none";
    winnerGame.style.display = "none";
})

let nombreJugadores= [];
let fichas = [];

let lastClickedFicha = null;
let isMouseDown = false;
let tablero;
let flecha;
let filas = 6;
let columnas = 7;
let cant_fichas = 21;
let radio = 0;
let hayGanador;
let jugadorActual;
let jugador1 = "";
let jugador2 = "";
let offsetX = 0;
let offsetY = 0;
let ficha1 = "./img/gral/messi.png";
let ficha2 = "./img/gral/van-gaal.png";

//  JUGADOR 1
document.getElementById("messi").addEventListener("click", (e) => {
    e.preventDefault();
    ficha1 = "./img/gral/messi.png";
});  
document.getElementById("mateo").addEventListener("click", (e) => {
    e.preventDefault();
    ficha1 = "./img/gral/mateo.png";
});
document.getElementById("thiago").addEventListener("click", (e) => {
    e.preventDefault();
    ficha1 = "./img/gral/thiago.png";
});

//  JUGADOR 2
document.getElementById("gaal").addEventListener("click", (e) => {
    e.preventDefault();
    ficha2 = "./img/gral/van-gaal.png";
});
document.getElementById("ribery").addEventListener("click", (e) => {
    e.preventDefault();
    ficha2 = "./img/gral/ribery.png";
});
document.getElementById("robben").addEventListener("click", (e) => {
    e.preventDefault();
    ficha2 = "./img/gral/robben.png";
});

//  Reinicia el juego
function reiniciar(){
    fichas = [];
    lastClickedFicha = null;
    isMouseDown= false;
    tablero;
    flecha;
    hayGanador = false;
    jugadorActual = 1;
    clearCanvas();
    addTablero();
    addFicha();
    drawFicha();
}
//  Dibuja y limpia el tablero y las fichas constantemente durante el juego a muchos fps
// lo que lo hace imperceptible al ojo
function drawFicha(){
    clearCanvas();
    addFlechas();
    tablero.draw();
    for(let i = 0; i < fichas.length; i++){
        fichas[i].draw(context);
    }
}
//  Coloca las flechas encima de cada columna del tablero
function addFlechas(){
    let posX = tableroX + radio;
    let posY = tableroY/2;
    flecha = new Flecha(posX, posY, context, radio, tableroWidth, tableroHeight, columnas);
    
    flecha.draw();
}
//  Depende de la dimension elegida por el usuario, se dibuja el tablero en el canvas
function addTablero(){
    radio = 25;
    if(cant_fichas > 30)
        radio = 20;
    const gradient = context.createLinearGradient(tableroX, tableroY, tableroX, tableroY + canvasHeight);
    gradient.addColorStop(0, "#3080DF");
    gradient.addColorStop(1, "#0B4AE3");
    tablero = new Tablero(tableroX, tableroY, tableroWidth, tableroHeight, gradient, context, filas, columnas, radio);
    tablero.draw();
}
//  Depende de la dimension elegida por el usuario, se dibujan las fichas necesarias para cada jugador
function addFicha() {
    let columnas = 3;
    let fichasPorColumna = Math.round(cant_fichas / columnas);
    let espacioX = tableroX;
    let espacioY = canvasHeight;
    radio = 25;
    if(cant_fichas > 30)
        radio = 20;
    let espacioEntreColumnas = espacioX / columnas;
    let espacioEntreFilas = (espacioY / fichasPorColumna);

    for (let col = 0; col < columnas; col++) {
        for (let fila = 0; fila < fichasPorColumna; fila++) {
            // ficha 1
            let posX = col * espacioEntreColumnas + espacioEntreColumnas / 2;
            let posY = fila * espacioEntreFilas + espacioEntreFilas / 2;
            let imgSrc = ficha1;
            let fichaMessi = new Ficha(posX, posY, context, radio, imgSrc, jugador1);
            fichas.push(fichaMessi);
            // ficha 2
            posX = tableroX + tableroWidth + col * espacioEntreColumnas + espacioEntreColumnas / 2;
            imgSrc = ficha2;

            let fichaGaal = new Ficha(posX, posY, context, radio, imgSrc, jugador2);
            fichas.push(fichaGaal);
        }
    }
}
//  Limpia completamente el canvas, dejandolo sin tablero y sin fichas, solo con la imagen de fondo
function clearCanvas() {
    let image = new Image();
    image.src = './img/gral/fondo-canvas.jpg';
    context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
}
//  Escucha los nombres que el usuario le asigna a los jugadores (por defecto Jugador 1 y Jugador 2)
function configurarJugadores(){
    let inputJugador1= document.getElementById('player1').value;
    if(inputJugador1==""){
        inputJugador1="Jugador 1";
    }
    jugador1=inputJugador1;
    nombreJugadores.push(jugador1);
    let inputJugador2= document.getElementById('player2').value;
    if(inputJugador1==inputJugador2 || inputJugador2==""){
        jugador2= "Jugador 2";
        nombreJugadores.push(jugador2);
    }
    else{
        jugador2=inputJugador2;
        nombreJugadores.push(jugador2);
    }
}
//  Obtiene la posicion exacta del cursor dentro del canva
function obtenerPosCanva(e){
    const rect = canvas.getBoundingClientRect();
    return { 
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}
//  Funcion que se activa cuando el usuario hace click en algun lugar del canvas.
//  Mas precisamente se encarga de la interaccion del usuario con las fichas,
// destacando la ficha seleccionada y permitiendo arrastrarla.
function onMouseDown(e){
    isMouseDown = true;
    let pos = obtenerPosCanva(e);
    let clickFicha= findClickedFicha(pos.x, pos.y);

    if(lastClickedFicha != null  && !hayGanador) {
        lastClickedFicha.setResaltado(false);
        lastClickedFicha= null;
    }
    if(clickFicha != null && !hayGanador){ 
        clickFicha.setResaltado(true);  
        lastClickedFicha = clickFicha;
        offsetX = e.layerX - clickFicha.getPosX();
        offsetY = e.layerY - clickFicha.getPosY();
    }
    drawFicha();
}
//  Permite al usuario arrastrar y soltar una ficha en el canvas bajo ciertas condiciones específicas
function onMouseMove(e) {
    let pos = obtenerPosCanva(e);
    if(isMouseDown && !hayGanador && lastClickedFicha != null && !lastClickedFicha.getColocada()
    && lastClickedFicha.getJugador()===(jugadorActual===1 ? jugador1 : jugador2)) {
        lastClickedFicha.setPosition(pos.x, pos.y);
        drawFicha();
    }
}
//  Cambia el turno del jugador despues de colocar una ficha
function cambiarTurno(){
    jugadorActual = jugadorActual === 1 ? 2 : 1;
    shiftGame.innerHTML = "Turno de " + nombreJugadores[jugadorActual - 1];
    if(jugadorActual === 1){
        shiftGame.innerHTML += `<img class="img-turno-ficha" src='${ficha1}'>`;
    }
    else {
        shiftGame.innerHTML += `<img class="img-turno-ficha" src='${ficha2}'>`;
    }
}
//  Permite al usuario soltar/colocar una ficha en el tablero
function onMouseUp(e){
    isMouseDown= false;
    if (lastClickedFicha != null && !lastClickedFicha.getColocada()) {
        let posXTablero = tablero.getPosX();
        let posYTablero= tablero.getPosY();
        let anchoTablero = tablero.getWidth() + posXTablero;
        let fichaPosX = lastClickedFicha.getPosX();
        let fichaPosY = lastClickedFicha.getPosY();
        if(posXTablero < fichaPosX && fichaPosX < anchoTablero
            && canvasHeight > fichaPosY && fichaPosY < posYTablero){
            jugar(lastClickedFicha);
            lastClickedFicha.setColocada(true);
            drawFicha();
        }
        else{
            lastClickedFicha.setPosition(lastClickedFicha.getPosXInicial(), lastClickedFicha.getPosYInicial());
            drawFicha();
        }
    }
}
//  Esta funcion "controla" la logica del juego, se encarga de las jugadas dentro del mismo. 
//  Gestiona los ganadores, si hay empate y tambien se encarga de los cambios de turnos
function jugar(lastClickedFicha){
    let colocar;
    if(lastClickedFicha.getJugador()===(jugadorActual===1 ? jugador1 : jugador2)){
        colocar = tablero.colocarFicha(lastClickedFicha);
        drawFicha();
        cambiarTurno();
    }
    if(colocar){
        shiftGame.style.display = "none";
        winnerGame.style.display = "block";
        winnerGame.innerHTML = "Ganó Jugador: " + lastClickedFicha.getJugador();
        hayGanador = true;
    }
    else if(tablero.tableroCompleto()){
        winnerGame.style.display = "block";
        winnerGame.innerHTML = "Empate, todas las fichas han sido colocadas";
        hayGanador = true;
    }
}
//  Busca la ficha en la que se hizo click en función de las coordenadas x e y
function findClickedFicha(x, y){
    for(let i=0; i<fichas.length; i++) {
        const element= fichas[i];
        if(element.isPointInside(x, y)) {
            return element;
        }
    }
}
//  Resalta la ficha seleccionada por el jugador 1 en el popUp inicial
const buttonsImg1 = document.querySelectorAll(".choose-player-img1");
buttonsImg1.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Desseleccionar todos los botones
        buttonsImg1.forEach((btn) => {
            btn.classList.remove("seleccionado");
        });

        // Seleccionar el botón clicado
        event.target.classList.add("seleccionado");
    });
})
//  Resalta la ficha seleccionada por el jugador 2 en el popUp inicial
const buttonsImg2 = document.querySelectorAll(".choose-player-img2");
buttonsImg2.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Desseleccionar todos los botones
        buttonsImg2.forEach((btn) => {
            btn.classList.remove("seleccionado");
        });

        // Seleccionar el botón clicado
        event.target.classList.add("seleccionado");
    });
})
//  Resalta la dimension del juego elegida por el usuario
const buttons = document.querySelectorAll(".dimensionGame button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        // Desseleccionar todos los botones
        buttons.forEach((btn) => {
            btn.classList.remove("seleccionado");
        });

        // Seleccionar el botón clicado
        event.target.classList.add("seleccionado");

        // Obtener el tamaño del tablero basado en el id del botón clicado
        const size = parseInt(event.target.id);
        if (size >= 4 && size <= 7) {
            filas = size + 2;
            columnas = size + 3;
            cant_fichas = (filas * columnas) / 2;
            reiniciar();
        }
    });
});

//  Mantiene el timer actualizado, y corta cuando hay algun ganador.
const duracionTotal = 180;
let contador = duracionTotal;
let temporizador;
function actualizarTemporizador() {
    const minutos = Math.floor(contador / 60);
    const segundos = contador % 60;
    
    const minutosFormateados = minutos.toString().padStart(2, "0");
    const segundosFormateados = segundos.toString().padStart(2, "0");
    
    timerGame.textContent = `${minutosFormateados}:${segundosFormateados}`;
    //  Lanza un mensaje cuando finaliza el tiempo, indicando que la partida quedo empatada
    if (contador === 0) {
        clearInterval(temporizador);
        winnerGame.style.display = "block";
        winnerGame.style.bottom = 45 + "%";
        winnerGame.textContent = "Empate, se acabó el tiempo";
        hayGanador = true;
    } else {
        if(!hayGanador)
            contador--;
    }
}

canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mousemove', onMouseMove);