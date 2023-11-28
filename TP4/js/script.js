"use strict";
// carga del loading
let loading_container = document.querySelector("#loading-container");
if(loading_container != null){
    document.addEventListener("DOMContentLoaded", function() {
        const loader = document.querySelector(".loader");
        const progress = document.querySelector(".progress");
        const pageContent = document.querySelector(".page-content");
    
        let porcentaje = 0;
    
        const interval = setInterval(() => {
            porcentaje += 1;
            loader.style.transform = `rotate(${porcentaje * 3.6}deg)`;
            progress.textContent = `${porcentaje}%`;
    
            if (porcentaje === 100) {
                clearInterval(interval);
                document.querySelector(".loading-container").style.display = "none";
                pageContent.style.display = "block";
            }
        }, 30);
    });
}

let header = document.getElementById("header");
let menu = document.querySelector(".menu");
let logo = document.querySelector(".logo");
let duende = document.getElementById("duende");
let section6 = document.getElementById("section-6");
let section8 = document.getElementById("section-8");
let imgSection5 = document.getElementById("img-section-5");

// menú hamburguesa se convierte en cruz agregandole estas clases
menu.addEventListener("click", () => {
    let rect1 = menu.querySelector(".rect1");
    let rect2 = menu.querySelector(".rect2");
    let rect3 = menu.querySelector(".rect3");
    rect1.classList.toggle("rotate");
    rect3.classList.toggle("-rotate");
    rect2.classList.toggle("none");
})

// cuando se detecta el scroll en la página
window.onscroll = () => {
    let y = window.scrollY;
    punto5y6(y);
    punto4entregable(y);
    punto7entregable(y);
    punto11entregable(y);
    punto9entregable(y);
    punto12entregable(y);
};
// PUNTO 5 Y 6, Al scrollear, el header cambia su tamaño y se vuelve sticky, al igual que el logo
// haciéndose más chico.
function punto5y6(y) {
    // Cuando el scroll está entre 30 y 120 le cambiamos el tamaño al header y removemos las clases si las tiene
    // para evitar el "salto" ó "golpe" que hace el logo al cambiar de tamaño el header.
    if(30 <= y && y <= 120){
        header.style.height = "103px";
        header.classList.remove("sticky");
        logo.classList.remove("sticky");
    }
    // si 120 es menor a la pos del scroll, le agregamos las clases sticky para que quede fijo ó "pegajoso"
    else if(120 < y) {
        header.classList.add("sticky");
        logo.classList.add("sticky");
        // punto 6, el duende se mueve a destiempo del scroll, multiplicando x 0.03 el "scroll".
        // se puede hacer con % (15.63) * 0.03, sino con px (132) * 0.5.
        duende.style.top = 15.63 - y * 0.03 + "%";
    }
    else {
        header.classList.remove("sticky");
        logo.classList.remove("sticky");
        header.style.height = "227px";
    }
}
// PUNTO 4 animación de la seccion de las 2 columnas (imagen y texto)
function punto4entregable(y) {
    // seleccionamos todas las imagenes y todos los textos.
    let img1 = document.getElementById("section-6-img-1");
    let img2 = document.getElementById("section-6-img-2");
    let img3 = document.getElementById("section-6-img-3");
    let img4 = document.getElementById("section-6-img-4");
    let text1 = document.getElementById("section-6-text-1");
    let text2 = document.getElementById("section-6-text-2");
    let text3 = document.getElementById("section-6-text-3");
    let text4 = document.getElementById("section-6-text-4");
    // si el scroll es mayor a 3900px y menor a 4050px, se visualiza la primer img y el primer texto
    // a medida que se va srolleando, el texto se va aclarando cambiando la opacidad.
    if (3900 < y && y < 4050){
        img1.style.top = (y - 3900 + 392) + "px";
        text1.style.top = (3900 - y) + "px";
        text1.style.opacity = Math.max(0, 1 - (y - 3900) / 300);
        img1.style.opacity = 1;
        img2.style.opacity = 0;
        text2.style.opacity = 0;
    }
    // cuando el scroll esté entre 4050px y 4350px, la img1 e img3 desaparece con opacity 0 y aparece
    // la segunda img visible con su respectivo texto que también tiene el efecto de la opacidad.
    else if(4050 <= y && y <= 4350){
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;
        img2.style.top = (y - 3900 + 392) + "px";
        text2.style.top = (4050 - y) + "px";
        text1.style.opacity = 0;
        text2.style.opacity = Math.max(0, 1 - (y - 4050) / 800);
        text3.style.opacity = 0;
    }
    // nuevamente, si el scroll se encuentra en estos pixeles (4350, 4750), en este caso,
    // la img2 e img4 desaparecen cambiando la opacidad a 0 y aparece la img3 con opacidad 1,
    // el texto al hacer scroll también va cambiando su top y disminuyendo la opacidad.
    else if (4350 <= y && y <= 4750){
        img2.style.opacity = 0;
        img3.style.opacity = 1;
        img4.style.opacity = 0;
        img3.style.top = (y - 3900 + 392) + "px";
        text3.style.top = (4350 - y) + "px";
        text3.style.opacity = Math.max(0, 1 - (y - 4350) / 800);
        text4.style.opacity = 0;
    }
    // para este ultimo caso, si el scroll está situado entre 4750px y 5300px, se "esconden" las
    // img2 e img3 cambiando la opacidad y se hace visible la img4, con un top fijo y al texto
    // cambiandole su top para que haga el efecto de "irse" mientras se le va cambiando su opacidad.
    else if (4750 <= y && y <= 5300){
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        img4.style.opacity = 1;
        img4.style.top = (y - 3900 + 392) + "px";
        text4.style.top = (4750 - y) + "px";
        text3.style.opacity = 0;
        text4.style.opacity = Math.max(0, 1 - (y - 4750) / 800);
    }
    // si no se cumple nada de lo anterior, se reestablece todo.
    else {
        img1.style.top = (392) + "px";
        img1.style.opacity = 1;
        text1.style.top = 0;
        img2.style.opacity = 0;
        text2.style.opacity = 0;
        img3.style.opacity = 0;
        text3.style.opacity = 0;
        img4.style.opacity = 0;
        text4.style.opacity = 0;
    }
}

// PUNTO 7
// dar sensación de profundidad al scrollear.
function punto7entregable(y){
    // seleccionamos las img de fondo, los personajes y las telarañas.
    let eFondo1 = document.getElementById("eFondo-1");
    let eFondo2 = document.getElementById("eFondo-2");
    let eFondo3 = document.getElementById("eFondo-3");
    let spidey1 = document.getElementById("spidey1");
    let spidey2 = document.getElementById("spidey2");
    let spidey3 = document.getElementById("spidey3");
    let tela1 = document.querySelector(".tela1");
    let tela2 = document.querySelector(".tela2");
    // cuando se detecte scroll le cambiamos las posiciones a las capas con "translateX()" ó
    // "translateY()" dependiendo el caso.
    if(y > 10){
        eFondo1.style.transform = "translateX(-30px)";
        eFondo2.style.transform = "scale(1.15)";
        eFondo3.style.transform = "translateX(30px)";
        spidey1.style.transform = "translateX(-60px)";
        spidey2.style.transform = "translateY(-30px)";
        spidey3.style.transform = "translateX(60px)";
        tela1.style.transform = "translateY(-30px)";
        tela2.style.transform = "translateX(60px)";
    }
    // si el scroll es menor a 10, se vuelve a reestablecer todo a su posición original
    else {
        eFondo1.style.transform = "translateX(0)";
        eFondo2.style.transform = "scale(1)";
        eFondo3.style.transform = "translateX(0)";
        spidey1.style.transform = "translateX(0)";
        spidey2.style.transform = "translateY(0)";
        spidey3.style.transform = "translateX(0)";
        tela1.style.transform = "translateY(0)";
        tela2.style.transform = "translateX(0)";
    }
}
// PUNTO 11
// las cards de "ghost spider" se trasladan a destiempo del scroll cambiandole su "translateY()".
function punto11entregable(y){
    let test1 = document.getElementById("test-1");
    let test2 = document.getElementById("test-2");
    let test3 = document.getElementById("test-3");
    // si el scroll está situado entre 1500px y 2300px le cambiamos la posicion en Y a las 3 cards.
    if(1500 <= y && y <= 2300){
        let translateY = 2300 - y + "px";
        test1.style.transform = `translateY(${translateY})`;
        test2.style.transform = `translateY(${translateY})`;
        test3.style.transform = `translateY(${translateY})`;
    }
}
// PUNTO 9
// Les agrega/remueva a las 3 cards de los personajes las clases appear para que aparezcan con un
// tiempo de delay diferente cada uno. 
function punto9entregable(y){
    let peter = document.getElementById("card-1");
    let miles = document.getElementById("card-2");
    let gwen = document.getElementById("card-3");
    if(y >= 1200){
        gwen.classList.add("appear");
        peter.classList.add("appear");
        miles.classList.add("appear");
    }
    else {
        gwen.classList.remove("appear");
        peter.classList.remove("appear");
        miles.classList.remove("appear");
    }
}
// PUNTO 12
// también le agregamos las clases appear para que aparezcan los 3 personajes con delay distinto
// cada uno, además se realizó el OPCIONAL 5 a cada personaje con "mouseenter" "mouseleave"
// simulando un "hover" de css.
function punto12entregable(y) {
    // seleccionamos los personajes
    let gwen = document.getElementById("gwen");
    let peter = document.getElementById("peter");
    let miles = document.getElementById("miles");
    // seleccionamos las descripciones de los personajes
    let imgGwen = document.getElementById("img-gwen-stacy");
    let imgPeter = document.getElementById("img-peter-parker");
    let imgMiles = document.getElementById("img-miles-morales");
    // si el scroll se sitúa entre estos pixeles (5700 | 6500) se les agrega la clase appear
    if(5700 <= y && y <= 6500){
        gwen.classList.add("appear");
        peter.classList.add("appear");
        miles.classList.add("appear");
    }
    else {
        gwen.classList.remove("appear");
        peter.classList.remove("appear");
        miles.classList.remove("appear");
    }
    // simulacion de "hover" al personaje gwen, se agrega la clase hoverGwen a cada personaje,
    // gwen cambia su tamaño y posicion top/left y los dos restantes igual, mientras que también
    // a estos dos últimos, se le agrega un filter blur en 5px para que se vean difuminados.
    gwen.addEventListener('mouseenter', () => {
        gwen.classList.add("hoverGwen");
        peter.classList.add("hoverGwen");
        miles.classList.add("hoverGwen");
        section8.style.background = "url(./img/img-rosa-sect8-2.png)";
    });
    // mouseleave para que cuando se detecte que no está el mouse posicionado sobre el personaje
    // gwen, se les remuevan las clases y vuelva a la imagen original de fondo.
    gwen.addEventListener('mouseleave', () => {
        gwen.classList.remove("hoverGwen");
        peter.classList.remove("hoverGwen");
        miles.classList.remove("hoverGwen");
        section8.style.background = "url(./img/fondo-section8-3.svg)";
    })
    // simulacion de "hover" al personaje peter, se agrega la clase hoverPeter a cada personaje,
    // peter cambia su tamaño y posicion top/left y los dos restantes igual, mientras que también
    // a estos dos últimos, se le agrega un filter blur en 5px para que se vean difuminados.
    peter.addEventListener('mouseenter', () => {
        gwen.classList.add("hoverPeter");
        peter.classList.add("hoverPeter");
        miles.classList.add("hoverPeter");
        section8.style.background = "url(./img/img-azul-sect8.png)";
    });
    peter.addEventListener('mouseleave', () => {
        gwen.classList.remove("hoverPeter");
        peter.classList.remove("hoverPeter");
        miles.classList.remove("hoverPeter");
        section8.style.background = "url(./img/fondo-section8-3.svg)";
    })
    // simulacion de "hover" al personaje miles, se agrega la clase hoverMiles a cada personaje,
    // miles cambia su tamaño y posicion top/left y los dos restantes igual mientras que también
    // a estos dos últimos, se le agrega un filter blur en 5px para que se vean difuminados.
    miles.addEventListener('mouseenter', () => {
        gwen.classList.add("hoverMiles");
        peter.classList.add("hoverMiles");
        miles.classList.add("hoverMiles");
        section8.style.background = "url(./img/img-azulOsc-sect8.png)";
    });
    miles.addEventListener('mouseleave', () => {
        gwen.classList.remove("hoverMiles");
        peter.classList.remove("hoverMiles");
        miles.classList.remove("hoverMiles");
        section8.style.background = "url(./img/fondo-section8-3.svg)";
    })
    // le agregamos el evento click a los personajes para abrir el "popUp" de la
    // descripción de cada uno.
    gwen.addEventListener("click", () => {
        imgGwen.style.display = "block";
        imgPeter.style.display = "none";
        imgMiles.style.display = "none";
        // llamamos a la funcion de cerrar la descripcion cuando se detecta un click en la imagen
        imgGwen.addEventListener("click", function(event) {
            cerrarImg(event, imgGwen);
        });
    })
    peter.addEventListener("click", () => {
        imgPeter.style.display = "block";
        imgGwen.style.display = "none";
        imgMiles.style.display = "none";
        // llamamos a la funcion de cerrar la descripcion cuando se detecta un click en la imagen
        imgPeter.addEventListener("click", function(event) {
            cerrarImg(event, imgPeter);
        });
    })
    miles.addEventListener("click", () => {
        imgMiles.style.display = "block";
        imgPeter.style.display = "none";
        imgGwen.style.display = "none";
        // llamamos a la funcion de cerrar la descripcion cuando se detecta un click en la imagen
        imgMiles.addEventListener("click", function(event) {
            cerrarImg(event, imgMiles);
        });
    })
}
// la siguiente funcion, recibe por parametro el event y la img de la descripción de cada personaje.
// capturamos la pos del mouse, la pos del circulo en X dentro de la img y la pos en Y dentro de la img
// luego, calculamos el radio del circulo así como también la distancia entre el "click" y el
// centro del circulo, y si esa distancia es menor al radio del circulo, le aplicamos display none a la img.
function cerrarImg(event, img){
    let x = event.offsetX;
    let y = event.offsetY;
    let circuloX = 767;
    let circuloY = 44;
    let radioCirculo = 30;

    // calcula la distancia entre el click y el centro del círculo
    let distancia = Math.sqrt(Math.pow(x - circuloX, 2) + Math.pow(y - circuloY, 2));

    // comprueba si el click está dentro del círculo de cierre
    if (distancia <= radioCirculo) {
        img.style.display = 'none';
    }
}

// PUNTO 8, OPCIONAL 4
// cuando el mouse se mueve dentro de la imagen
imgSection5.addEventListener("mousemove", (event) => {
    // seleccionamos las distintas imágenes
    let fondo = document.getElementById("img-section-5-fondo");
    let capa1 = document.getElementById("img-section-5-capa1");
    let capa2 = document.getElementById("img-section-5-capa2");
    let mrMarvel = document.getElementById("image-1");
    let panteraNegra = document.getElementById("image-2");
    let hulk = document.getElementById("image-3");
    // capturamos el 0 0 del contenedor de las imagenes y la pos del mouse
    const rect = fondo.getBoundingClientRect();
    let _mouseX = event.clientX - rect.left;
    let _mouseY = event.clientY - rect.top;
    // obtengo el centro de la imagen:
    let _w = 1078/2; // Ancho del contenedor de la imagen ( 1078 )
    let _h = 528/2; // Alto del contenedor de la imagen ( 528 )

    // calculamos para cada capa, una distancia distinta de movimiento con el mouse
    let _moveCapa1 = `${1 - (_mouseX - _w) * 0.02}px, ${1 - (_mouseY - _h) * 0.02}px`;  
    let _moveCapa2 = `${2 - (_mouseX - _w) * 0.05}px, ${2 - (_mouseY - _h) * 0.05}px`;
    let _moveMrMarvel = `${1 - (_mouseX - _w) * 0.2}px, ${1 - (_mouseY - _h) * 0.2}px`;
    let _movePantera = `${2 - (_mouseX - _w) * 0.2}px, ${2 - (_mouseY - _h) * 0.2}px`;
    let _moveHulk = `${2 - (_mouseX - _w) * 0.2}px, ${2 - (_mouseY - _h) * 0.2}px`; 


    // le agregamos a cada img un translate con lo calculado arriba y a las capa1 y capa2
    // le agregamos un "scale()" para que, al mover el mouse hacía un lado o otro, no se vea
    // el fondo del cielo celeste.
    capa1.style.transform = `translate(${_moveCapa1}) scale(1.1)`;
    capa2.style.transform = `translate(${_moveCapa2}) scale(1.05)`;
    mrMarvel.style.transform = `translate(${_moveMrMarvel})`;
    panteraNegra.style.transform = `translate(${_movePantera})`;
    hulk.style.transform = `translate(${_moveHulk})`;
    capa1.style.transition = `transform 0s ease-in-out`;
    capa2.style.transition = `transform 0s ease-in-out`;
    mrMarvel.style.transition = `transform 0s ease-in-out`;
    panteraNegra.style.transition = `transform 0s ease-in-out`;
    hulk.style.transition = `transform 0s ease-in-out`;
});
// cuando el mouse se va del contenedor de las imagenes, devolvemos las imagenes a sus posiciones
// originales y lo hacemos con una "transition" para que sea una transición suave.
imgSection5.addEventListener("mouseleave", () => {
    let fondo = document.getElementById("img-section-5-fondo");
    let capa1 = document.getElementById("img-section-5-capa1");
    let capa2 = document.getElementById("img-section-5-capa2");
    let mrMarvel = document.getElementById("image-1");
    let panteraNegra = document.getElementById("image-2");
    let hulk = document.getElementById("image-3");

    capa1.style.transform = `translate(0) scale(1.1)`;
    capa2.style.transform = `translate(0) scale(1.05)`;
    mrMarvel.style.transform = `translate(0)`;
    panteraNegra.style.transform = `translate(0)`;
    hulk.style.transform = `translate(0)`;
    capa1.style.transition = `transform 1s ease-in-out`;
    capa2.style.transition = `transform 1s ease-in-out`;
    mrMarvel.style.transition = `transform 1s ease-in-out`;
    panteraNegra.style.transition = `transform 1s ease-in-out`;
    hulk.style.transition = `transform 1s ease-in-out`;
})