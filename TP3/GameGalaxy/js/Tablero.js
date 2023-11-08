class Tablero {
    constructor(posX, posY, width, height, fill, context, filas, columnas, radio) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.context = context;
        this.borderRadius = 20;
        this.radius = radio;
        this.columnas = columnas;
        this.filas = filas;
        this.casillas = [];
        this.initCasillas();
        this.espacioX = this.width / this.columnas;
        this.espacioY = this.height / this.filas;
        this.ganadorEncontrado = false;
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    initCasillas() {
        for (let fila = 0; fila < this.filas; fila++) {
            this.casillas[fila] = [];
            for (let columna = 0; columna < this.columnas; columna++) {
                this.casillas[fila][columna] = null;
            }
        }
    }
    draw() {
        this.context.fillStyle = this.fill;
        this.context.fillRect(this.posX, this.posY, this.width, this.height);
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                const posX = this.posX + columna * this.espacioX + this.espacioX / 2;
                const posY = this.posY + fila * this.espacioY + this.espacioY / 2;
                this.context.beginPath();
                this.context.fillStyle = "#3F9AF7";
                this.context.arc(posX, posY, this.radius, 0, 2 * Math.PI);
                this.context.fill();
                this.context.lineWidth = 5;
                this.context.strokeStyle = "#2F72C1";
                this.context.stroke();
                this.context.closePath();

            }
        }
    }
    colocarFicha(ficha) {
        let mitadAncho = this.espacioX / 2;
        let mitadAlto = this.espacioY / 2;
        let columna = Math.floor((ficha.getPosX() - this.posX) / this.espacioX);
        for (let fila = this.filas - 1; fila >= 0; fila--) {
            if (this.casillas[fila][columna] == null) {
                this.casillas[fila][columna] = ficha;
                ficha.setColocada(true);
                this.corroborarGanador(ficha, fila, columna);
                ficha.setPosition(this.posX + (columna * this.espacioX) + mitadAncho, 
                    this.posY + fila * this.espacioY + mitadAlto);
                
                break;
            }
        }
        if(this.corroborarGanador(ficha)){
            console.log("ganador " + ficha.getJugador())
            return true;
        }
    }
    tableroCompleto() {
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                if (this.casillas[fila][columna] == null) {
                    // Si encuentra una casilla vacía, retorna false
                    return false;
                }
            }
        }
        // Si recorrió todo el tablero y no encontró casillas vacías, retorna true
        return true;
    }
    obtenerFichaEn(fila, columna) {
        return this.casillas[fila][columna];
    }
    corroborarGanador(ficha, fila, columna) {        
        if (this.verificarHorizontal(ficha, fila, columna)) {
            console.log("Horizontal- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setResaltado(true);
            ficha.setColorResaltado('#FFFF00');
        } else if (this.verificarVertical(ficha, fila, columna)) {
            console.log("Vertical- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setResaltado(true);
            ficha.setColorResaltado('#FFFF00');
        } else if (this.verificarDiagonal(ficha, fila, columna)) {
            console.log("Diagonal- Gano el: " + ficha.getJugador());
            this.ganadorEncontrado = true;
            ficha.setResaltado(true);
            ficha.setColorResaltado('#FFFF00');
        }
        return this.ganadorEncontrado
    }
    verificarHorizontal(ficha, fila, columna) {
        let jugador = ficha.getJugador();
        let contador = 1;
        let ganadoras = [];
        // verifica hacia la izquierda
        for (let i = columna - 1; i >= 0; i--) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(fila, i);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila, columna: i });
                } else {
                    break;
                }
            }
        }
    
        // verifica hacia la derecha
        for (let i = columna + 1; i < this.columnas; i++) {
            if (fila >= 0 && fila < this.filas) {
                let fichaNueva = this.obtenerFichaEn(fila, i);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila, columna: i });
                } else {
                    break;
                }
            }
        }
    
        if (contador >= this.columnas - 3) {
            for (let i = 0; i < ganadoras.length; i++) {
                let coordenadas = ganadoras[i];
                let fichaGanadora = this.obtenerFichaEn(coordenadas.fila, coordenadas.columna);
                fichaGanadora.setResaltado(true);
                fichaGanadora.setColorResaltado('#FFFF00');
            }
            return true;
        }
    
        return false;
    }
    verificarVertical(ficha, fila, columna) {
        let jugador = ficha.getJugador();
        let contador = 1;
        let ganadoras = [];

        //verifica para arriba
        for (let i = fila - 1; i >= 0; i--) {
            if (i >= 0 && i < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, columna);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: i, columna: columna });
                }
                else {
                    break;
                }
            }
        }

        //verifica para abajo
        for (let i = fila + 1; i <= this.filas; i++) {
            if (i >= 0 && i < this.filas) {
                let fichaNueva = this.obtenerFichaEn(i, columna);
                if (fichaNueva != null && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: i, columna: columna });
                }
                else {
                    break;
                }
            }
        }

        if (contador >= this.filas - 2) {
            for (let i = 0; i < ganadoras.length; i++) {
                let coordenadas = ganadoras[i];
                let fichaGanadora = this.obtenerFichaEn(coordenadas.fila, coordenadas.columna);
                fichaGanadora.setResaltado(true);
                fichaGanadora.setColorResaltado('#FFFF00');
            }
            return true;
        }
        return false;
    }
    verificarDiagonal(ficha, fila, columna) {
        const jugador = ficha.getJugador();
        let contador = 1;
        let ganadoras = [];
    
        // Comprobar hacia arriba y hacia la izquierda
        for (let i = 1; i <= this.columnas - 3; i++) {
            if (fila - i >= 0 && columna - i >= 0) {
                const fichaNueva = this.obtenerFichaEn(fila - i, columna - i);
                if (fichaNueva && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila - i, columna: columna - i });
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    
        // Comprobar hacia abajo y hacia la derecha
        for (let i = 1; i <= this.columnas - 3; i++) {
            if (fila + i < this.filas && columna + i < this.columnas) {
                const fichaNueva = this.obtenerFichaEn(fila + i, columna + i);
                if (fichaNueva && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila + i, columna: columna + i });
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    
        if (contador >= this.columnas - 3) {
            // Marcar las fichas ganadoras
            for (let i = 0; i < ganadoras.length; i++) {
                let coordenadas = ganadoras[i];
                let fichaGanadora = this.obtenerFichaEn(coordenadas.fila, coordenadas.columna);
                fichaGanadora.setResaltado(true);
                fichaGanadora.setColorResaltado('#FFFF00');
            }
            return true;
        }
    
        contador = 1;
        ganadoras = [];
    
        // Comprobar hacia arriba y hacia la derecha
        for (let i = 1; i <= this.columnas - 3; i++) {
            if (fila - i >= 0 && columna + i < this.columnas) {
                const fichaNueva = this.obtenerFichaEn(fila - i, columna + i);
                if (fichaNueva && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila - i, columna: columna + i });
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    
        // Comprobar hacia abajo y hacia la izquierda
        for (let i = 1; i <= this.columnas - 3; i++) {
            if (fila + i < this.filas && columna - i >= 0) {
                const fichaNueva = this.obtenerFichaEn(fila + i, columna - i);
                if (fichaNueva && fichaNueva.getJugador() === jugador) {
                    contador++;
                    ganadoras.push({ fila: fila + i, columna: columna - i });
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        if (contador >= this.columnas - 3) {
            // Marcar las fichas ganadoras
            for (let i = 0; i < ganadoras.length; i++) {
                let coordenadas = ganadoras[i];
                let fichaGanadora = this.obtenerFichaEn(coordenadas.fila, coordenadas.columna);
                fichaGanadora.setResaltado(true);
                fichaGanadora.setColorResaltado('#FFFF00');
            }
            return true;
        }
    
        return false;
    }
}