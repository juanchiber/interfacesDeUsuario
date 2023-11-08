"use strict";

const games = [
    {
        id : 1,
        name : 'Junta 4 Fichita Bobo',
        image : './img/games/highlights/junta-4.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 2,
        name : 'Pokemon',
        image : './img/games/highlights/pokemon.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 3,
        name : 'Uno',
        image : './img/games/highlights/uno.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 4,
        name : 'Free fire',
        image : './img/games/highlights/free-fire.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 5,
        name : 'Super Mario',
        image : './img/games/highlights/mario-bros.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 6,
        name : 'Conecta 4',
        image : './img/games/highlights/conecta-4.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },

    // Sports
    {
        id : 7,
        name : 'Head Soccer',
        image : './img/games/sport/head-soccer.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 8,
        name : 'Free Kick 3D',
        image : './img/games/sport/free-kick.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 9,
        name : 'Minigolf 3D',
        image : './img/games/sport/minigolf.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 10,
        name : 'Motocross',
        image : './img/games/sport/motocross.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 11,
        name : 'Pool Live Pro',
        image : './img/games/sport/pool-live-pro.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 12,
        name : 'Fast Horse',
        image : './img/games/sport/fast-horse.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 13,
        name : 'Billards',
        image : './img/games/sport/billards.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 14,
        name : 'NBA 2K24',
        image : './img/games/sport/nba-2k24.jpg',
        category : "Sports",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    
    // Career
    {
        id : 15,
        name : 'Rocket League',
        image : './img/games/career/rocket-league.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 16,
        name : 'Real Racing',
        image : './img/games/career/real-racing.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 17,
        name : 'Dirt 3',
        image : './img/games/career/dirt-3.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 18,
        name : 'Dirt Bike',
        image : './img/games/career/dirt-bike.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 19,
        name : 'F1 23',
        image : './img/games/career/f1-23.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 20,
        name : 'Gran Turismo',
        image : './img/games/career/gran-turismo.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 21,
        name : 'Need for Speed',
        image : './img/games/career/nfs.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 22,
        name : 'Subway Surfers',
        image : './img/games/career/subway-surfers.jpg',
        category : "Career",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },

    // strategy
    {
        id : 23,
        name : 'Slither.io',
        image : './img/games/strategy/slither-io.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 24,
        name : 'Pac Man',
        image : './img/games/strategy/pac-man.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 25,
        name : 'Stumble Guys',
        image : './img/games/strategy/stumble-guys.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 26,
        name : 'Plants vs Zombies',
        image : './img/games/strategy/plants-zombies.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 27,
        name : 'Conecta-4',
        image : './img/games/strategy/conecta-4.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 28,
        name : 'Dynamons 5',
        image : './img/games/strategy/dynamons-5.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 29,
        name : 'Uno',
        image : './img/games/strategy/uno.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 30,
        name : 'Minecraft',
        image : './img/games/strategy/minecraft.jpg',
        category : "Strategy",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },

    // pay

    {
        id : 31,
        name : 'Fifa 24',
        image : './img/games/pay/fifa-24.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 2499.99
    },
    {
        id : 32,
        name : 'Cyber Punk 2077',
        image : './img/games/pay/cyberpunk-2077.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 3199.99
    },
    {
        id : 33,
        name : 'The Last Of Us',
        image : './img/games/pay/the-last-of-us.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 2099.99
    },
    {
        id : 34,
        name : 'Forza',
        image : './img/games/pay/forza.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 2999.99
    },
    {
        id : 35,
        name : 'Spider-man',
        image : './img/games/pay/spider-man.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 3299.99
    },
    {
        id : 36,
        name : 'God of War',
        image : './img/games/pay/god-of-war.jpg',
        category : "Pay",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Agregar",
        price : 3299.99
    },
];

const changeGame = [
    {
        id : 1,
        name : 'Dynamons 5',
        image : './img/games/strategy/dynamons-5.jpg',
        category : "Strategy",
        button : "Jugar",
        price : 0
    },
    {
        id : 2,
        name : 'Fortnite',
        image : './img/games/strategy/fortnite.jpg',
        category : "Strategy",
        button : "Jugar",
        price : 0
    },
    {
        id : 3,
        name : 'Slither.io',
        image : './img/games/strategy/slither-io.jpg',
        category : "Strategy",
        button : "Jugar",
        price : 0
    },
    {
        id : 4,
        name : 'Free fire',
        image : './img/games/highlights/free-fire.jpg',
        category : "Highlights",
        favorite : false,
        iconHeart : "./img/icons/heart.svg",
        button : "Jugar",
        price : 0
    },
    {
        id : 5,
        name : 'Pac Man',
        image : './img/games/strategy/pac-man.jpg',
        category : "Strategy",
        button : "Jugar",
        price : 0
    },
    {
        id : 6,
        name : 'Plants vs Zombies',
        image : './img/games/strategy/plants-zombies.jpg',
        category : "Strategy",
        button : "Jugar",
        price : 0
    },
    {
        id : 7,
        name : 'Conecta 4',
        image : './img/games/highlights/conecta-4.jpg',
        category : "Highlights",
        button : "Jugar",
        price : 0
    },
    {
        id : 8,
        name : 'Gran Turismo',
        image : './img/games/career/gran-turismo.jpg',
        category : "Career",
        button : "Jugar",
        price : 0
    },
    {
        id : 9,
        name : 'Uno',
        image : './img/games/highlights/uno.jpg',
        category : "Highlights",
        button : "Jugar",
        price : 0
    },
    {
        id : 10,
        name : 'Minigolf 3D',
        image : './img/games/sport/minigolf.jpg',
        category : "Sports",
        button : "Jugar",
        price : 0
    },
];