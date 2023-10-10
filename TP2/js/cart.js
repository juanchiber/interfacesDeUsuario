"use strict";

let cart = [];
let containerCart = document.getElementById("container-Cart");
let cartIcon = document.getElementById("icon-cart");
cartIcon.addEventListener("click", () => {
        containerCart.classList.toggle("show");
        showCart();
})

const showCart = () => {
    containerCart.innerHTML = '';

    const modalCartHeader = document.createElement("header");
    modalCartHeader.className = "modalCartHeader";
    modalCartHeader.innerHTML = `<p>Mi carrito</p>`;
    const modalCartClose = document.createElement("img");
    modalCartClose.src = "./img/icons/close-cart.svg";
    modalCartClose.className = "modalCartClose";
    modalCartHeader.append(modalCartClose);
    containerCart.append(modalCartHeader);

    modalCartClose.addEventListener("click", () => {
        containerCart.classList.toggle("show");
    });
    
    const modalCartFooter = document.createElement("footer");
    modalCartFooter.className = "modalCartFooter";

    if(cart.length == 0){
        let cartEmpty = document.createElement("p");
        cartEmpty.className = "cartEmpty"
        cartEmpty.innerText = "Su carrito está vacío";
        containerCart.append(cartEmpty);
    }
    else {
        cart.forEach((gameCart) => {
            let cartContent = document.createElement("div");
            cartContent.className = "modalCartBody";
            cartContent.innerHTML += `
                <img src="${gameCart.image}" alt="${gameCart.name}" />
                <p>${gameCart.name}</p>
                <p>$${gameCart.price}</p>
                <img src="./img/icons/trash.svg" alt="icon-trash" class="deleteGameById" id="${gameCart.id}">
            `;
            containerCart.appendChild(cartContent);
            
            let deleteById = cartContent.querySelectorAll(".deleteGameById");
            deleteById.forEach((deleteId) => {
                deleteId.addEventListener("click", () => {
                    deleteGameById(event, gameCart.id)
                });
            });
        });
        const total = cart.reduce((acc, el) => acc + el.price, 0).toFixed(2);  
        modalCartFooter.innerHTML = `
            <p> Total a pagar: $${total}</p>
            <button class="emptyCart">Vaciar Carrito</button>
            <button class="buyCart">Comprar</button>`;
        containerCart.append(modalCartFooter);

        let emptyCart = modalCartFooter.querySelector(".emptyCart");
        emptyCart.addEventListener("click", () => {
            empty();
        });
    }
}

const deleteGameById = (event, id) => {
    const gameId = cart.find((game) => game.id === id);
    cart = cart.filter((game) => {
        return game !== gameId;
    });
    showCart();
    removeFromCartById(event);
}

const empty = () => {
    cart = [];
    showCart();
    removeFromCart();
}