"use strict";

/* MENÚES */
const menu = document.getElementById('menu');
const userProfile = document.getElementById('user-profile');
const navbarMenu = document.getElementById('navbar-menu');
const navbarProfile = document.getElementById('navbar-profile');
/* CARRUSELES */
const highlightsWeekCarousel = document.getElementById('carouselHighlights');
const sportsCarousel = document.getElementById('carouselSports');
const careerCarousel = document.getElementById('carouselCareer');
const strategyCarousel = document.getElementById('carouselStrategy');
const payCarousel = document.getElementById('carouselPay');
/* BOTONES CARRUSELES */
const prevButton = document.querySelectorAll('.prevButton');
const nextButton = document.querySelectorAll('.nextButton');
/* CATEGORÍAS CARRUSELES */
let sectionHighlights = "Highlights";
let sectionSports = "Sports";
let sectionCareer = "Career";
let sectionStrategy = "Strategy";
let sectionPay = "Pay";


if (menu) {
    menu.addEventListener("click", () => {
        if (navbarProfile.classList.contains('show')) {
            navbarProfile.classList.remove('show');
        }
        navbarMenu.classList.toggle('show');
    });
}
if (userProfile) {
    userProfile.addEventListener("click", () => {
    if (navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
    }
    navbarProfile.classList.toggle('show');
    });
}
if(highlightsWeekCarousel, sportsCarousel, careerCarousel, strategyCarousel, payCarousel){
    createCarouselByCategory(highlightsWeekCarousel, sectionHighlights);
    createCarouselByCategory(sportsCarousel, sectionSports);
    createCarouselByCategory(careerCarousel, sectionCareer);
    createCarouselByCategory(strategyCarousel, sectionStrategy);
    createCarouselByCategory(payCarousel, sectionPay);

    function createCarouselByCategory(container, category) {
        games.forEach((game) => {
            if (game.category === category) {
                createAndAppendGames(container, game, category);
            }
        });
    }
    function createAndAppendGames(container, game, category) {
        const article = document.createElement("article");
        article.className = `article category${category}`;
        article.id = `${game.id}`;
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${game.image}" class="img-game" alt="${game.name}">
            <div class="text-container">
                <div>
                    <span class="name-game">${game.name}</span>
                    <img src="${game.iconHeart}" class="icon-heart" alt="icon-heart">
                </div>
                <a class="gameLink">
                    <button class="btn btn-game ${game.button === 'Agregar' ? 'addToCart' : ''}" id="${game.id}">
                        <img src="./img/icons/shopping-cart-1.svg" class="icon icon-shopping-cart" alt="icon-cart">
                        <svg>
                            <rect x="0" y="0" rx="20" fill="none"></rect>
                        </svg>
                        <span>${game.button}</span>
                    </button>
                </a>
            </div>`;
        article.appendChild(card);

        if(game.price != 0){

            let iconDollar = document.createElement("img");
            iconDollar.className = "icon icon-dollar";
            iconDollar.src = "./img/icons/money-dollar-circle.svg";
            iconDollar.alt = "icon-dollar";

            let price = document.createElement("p");
            price.className = "priceCard";
            price.id = `${game.id}`;
            price.innerHTML = `$ ${game.price}`;
            article.append(iconDollar, price);
        }
        container.appendChild(article);
    }

    const gameLink = document.querySelectorAll('.gameLink');
    gameLink.forEach((game) => {
        const gameId = game.querySelector('button').id;
        if (gameId == 1)
            game.setAttribute('href', './game.html');
        else
            game.removeAttribute('href');
    })


    prevButton.forEach((prevBtn) =>  {
        prevBtn.addEventListener("click", (event) => {
            const parentElement = event.currentTarget.parentNode.id;
            const carouselData = carouselMap[parentElement];
            if (carouselData) {
                scrollCarousel(carouselData.carousel, carouselData.scroll * -1);
            }
        });
    });
    nextButton.forEach((nextBtn) => {
        nextBtn.addEventListener("click", (event) => {
            const parentElement = event.currentTarget.parentElement;
            const carouselData = carouselMap[parentElement.id];
            if (carouselData) {
                scrollCarousel(carouselData.carousel, carouselData.scroll * 1);
            }
        });
    });
    function scrollCarousel(carousel, amount) {
        carousel.scrollLeft += amount;
    }
    const carouselMap = {
        Highlights: { carousel: highlightsWeekCarousel, scroll: 1000 },
        Sports: { carousel: sportsCarousel, scroll: 1000 },
        Career: { carousel: careerCarousel, scroll: 700 },
        Strategy: { carousel: strategyCarousel, scroll: 700 },
        Pay: { carousel: payCarousel, scroll: 700 },
    };
}

/*  LOADING */
let loading_container = document.querySelector("#loading-container");

if(loading_container != null){
    document.addEventListener("DOMContentLoaded", function() {
        const loader = document.querySelector(".loader");
        const progress = document.querySelector(".progress");
        const pageContent = document.querySelector(".page-content");
    
        let percent = 0;
    
        const interval = setInterval(() => {
            percent += 1;
            loader.style.transform = `rotate(${percent * 3.6}deg)`;
            progress.textContent = `${percent}%`;
    
            if (percent === 100) {
                clearInterval(interval);
                document.querySelector(".loading-container").style.display = "none";
                pageContent.style.display = "block";
            }
        }, 30);
    });
}



let addCart = document.querySelectorAll(".addToCart");
addCart.forEach((btnAdd) => {
    btnAdd.addEventListener("click", (event) => {
        let gameId = event.currentTarget.id;
        let btn = event.currentTarget;
        btn.classList.remove('addToCart');
        btn.innerHTML = `
            <img src="./img/icons/shopping-cart-1.svg" class="icon icon-shopping-cart" alt="icon-cart">
            <span>Agregado</span>`;
        btn.classList.add('btn-added', 'add');
        addToCart(gameId, event);
    });
});
function addToCart(id, event) {
    let exists = cart.some((exists) => exists.id == id);
    if(!exists) {
        let game = games.find((game) => game.id == id);
        cart.push(game);
    }
    let article = event.currentTarget.closest('.article');
    let priceCard = article.querySelector('.priceCard');
    priceCard.classList.add('add');
}
function removeFromCartById(event) {
    let deleteIdCart = event.currentTarget.id;    
    let buttons = document.querySelectorAll(".btn-added");
    buttons.forEach((button) => {
        if (button.id == deleteIdCart) {
            button.classList.remove("btn-added", "add");
            button.classList.add("addToCart");
            button.innerHTML = `
                <img src="./img/icons/shopping-cart-1.svg" class="icon icon-shopping-cart" alt="icon-cart">
                <span>Agregar</span>`;
            let article = button.closest('.article');
            let priceCard = article.querySelector('.priceCard');
            if (priceCard) {
                priceCard.classList.remove('add');
            }
        }
    });
}
function removeFromCart(){
    let buttons = document.querySelectorAll(".btn-added");
    buttons.forEach((button) => {
        button.classList.remove("btn-added", "add");
        button.classList.add("addToCart");
        button.innerHTML = `
            <img src="./img/icons/shopping-cart-1.svg" class="icon icon-shopping-cart" alt="icon-cart">
            <span>Agregar</span>`;
        let article = button.closest('.article');
        let priceCard = article.querySelector('.priceCard');
        if (priceCard) {
            priceCard.classList.remove('add');
        }
    });
}

    /* BOTON ANIMADO JUGAR  */

let animateButton = function(e) {

    e.preventDefault();
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
let bubblyButtons = document.getElementsByClassName("btn-play");
for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

let sectionShare = document.getElementById("share-section");
let shareBtn = document.getElementById("share-btn");
if(shareBtn) {
    shareBtn.addEventListener("click", () => {
        document.querySelector(".share").classList.toggle("show");
    })
}

if(sectionShare){
    let share = document.createElement("div");
    share.className = "share";
    share.innerHTML = `
        <a href="https://whatsapp.com/" target="_black"><img src="./img/icons/whatsapp.svg" alt="icon-whatsapp"></a>
        <a href="https://facebook.com/" target="_black"><img src="./img/icons/facebook.svg" alt="icon-facebook"></a>
        <a href="https://instagram.com/" target="_black"><img src="img/icons/instagram.svg" alt="icon-instagram"></a>
    `;

    sectionShare.appendChild(share);
}


let contenedorCards = document.getElementById('carouselHighlights');
if(contenedorCards){
let desplazamiento = 800;
let btnDerecha = contenedorCards.querySelector(".nextButton");
let btnIzquierda = contenedorCards.querySelector(".prevButton");

btnDerecha.addEventListener("click", () => {
    let article = contenedorCards.querySelectorAll('.article');
    for (let i = article.length - 1; i >= 0; i--) {
        let card = article[i];
        setTimeout(function () {
            card.classList.add('cardEfecto');
            setTimeout(function () {
                card.classList.remove('cardEfecto');
            }, 500);
        }, (article.length - i) * 100);
    }
    contenedorCards.scrollLeft += desplazamiento;
});

btnIzquierda.addEventListener("click", () => {
    let article = contenedorCards.querySelectorAll('.article');
    article.forEach(function (card, index) {
        setTimeout(function () {
            card.classList.add('cardEfecto');
            setTimeout(function () {
                card.classList.remove('cardEfecto');
            }, 500);
        }, index * 100);
    });
    contenedorCards.scrollLeft -= desplazamiento;
});
}


/* ANIMACION BOTON REGISTRARSE O LOGIN */

let btnReg = document.querySelectorAll(".btn-reg");
btnReg.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        const confirmSession = document.getElementById("confirm-session");
        confirmSession.classList.add("show");

        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
        
    })
})


/* ITERACION DE JUEGOS DEBAJO DE LAS PUBLICIDADES EN EL GAME */

const sectionChangeGame = document.getElementById("img-games");
if(sectionChangeGame){
    changeGame.forEach((game) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${game.image}" class="card-img" alt="${game.name}">
            <div class="text-container">
                <div class="inner-content">
                    <span class="name-game">${game.name}</span>
                    <button class="btn-game" id="">${game.button}</button>
                </div>
            </div>`;
        sectionChangeGame.appendChild(card);
    });
}