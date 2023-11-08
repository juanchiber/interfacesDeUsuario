class Ficha {
    constructor(posX, posY, context, radius, image, jugador){
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.image = new Image();
        this.image.src = image;
        this.radius = radius;
        this.resaltado = false;
        this.colorResaltado = '#0000FF';
        this.colocada = false;
        this.jugador= jugador;
        this.posXInicial = posX;
        this.posYInicial = posY;
    }

    setPosition(x, y) {
        this.posX= x;
        this.posY= y;
    }
    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }
    getPosXInicial() {
        return this.posXInicial;
    }
    getPosYInicial() {
        return this.posYInicial;
    }
    getPosX() {
        return this.posX;
    }
    getPosY() {
        return this.posY;
    }
    getRadius() {
        return this.radius;
    }
    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }
    setColorResaltado(color){
        this.colorResaltado= color;
    }
    setColocada(colodada){
        this.colocada = colodada;
    }
    getColocada(){
        return this.colocada;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.context.closePath();
        this.context.fill();

        if(this.resaltado === true){
            this.context.strokeStyle= this.colorResaltado;
            this.context.lineWidth = 5;
            this.context.stroke();
        }

        this.context.save();
        this.context.clip();
        this.context.drawImage(this.image, this.posX - this.radius, this.posY - this.radius, this.radius * 2, this.radius * 2);
        this.context.restore();
    }
    isPointInside(x, y) {
        let _x= this.posX - x;
        let _y= this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }
    getJugador(){
        return this.jugador;
    }
}