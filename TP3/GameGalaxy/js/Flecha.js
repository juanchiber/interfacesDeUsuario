class Flecha {
    constructor(posX, posY, context, radio, anchoTablero,altoTablero,columnas) {
        this.posX = posX;
        this.posY = posY;
        this.context = context;
        this.radio=radio;
        this.image = new Image();
        this.image.src = "./img/gral/flecha.png";
        this.altoTablero=altoTablero;
        this.anchoTablero=anchoTablero;
   
        this.columnas=columnas;
        this.espacioX=this.anchoTablero/this.columnas;

    }

    draw(){
        for (let c = 0; c < this.columnas; c++) {
        const posX= this.posX + c * this.espacioX ;
        this.context.drawImage(this.image, posX, this.posY - this.radio, this.radio * 2, this.radio * 2);
    }

    }
    
}