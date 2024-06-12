// Variável global para armazenar os itens no carrinho
let cartItems = [];

// Função para abrir o carrinho
function openCart() {
    document.querySelector('.cart-sidebar').style.width = '250px';
}

// Função para fechar o carrinho
function closeCart() {
    document.querySelector('.cart-sidebar').style.width = '0';
}

// Função para adicionar item ao carrinho
function addItemToCart(item, event) {
    // Adiciona o item ao array de itens do carrinho
    cartItems.push(item);

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Abre o carrinho automaticamente após adicionar um item
    openCart();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();

    // Impede a propagação do evento para evitar recarregar a página
    event.stopPropagation();
}

// Função para remover item do carrinho
function removeItemFromCart(index) {
    // Remove o item do array de itens do carrinho pelo índice
    cartItems.splice(index, 1);

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();
}

// Função para cancelar e esvaziar o carrinho
function cancelAndClearCart() {
    cartItems = []; // Esvazia o array de itens do carrinho

    // Atualiza a exibição do carrinho
    updateCartUI();

    // Fecha o carrinho
    closeCart();

    // Atualiza a contagem de itens no navbar
    updateNavbarCartCount();
}


// Função para atualizar a exibição do carrinho
function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Limpa o conteúdo atual do carrinho
    cartItemsContainer.innerHTML = '';

    // Atualiza a lista de itens do carrinho
    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <div class="item-details">
                <div class="item-image">
                    <img src="${item.image}" width="50px" alt="${item.name}">
                </div>
                <span class="item-name">${item.name}</span>
                <span class="item-price">R$ ${item.price.toFixed(2)}</span>
            </div>
            <button class="delete-item-btn" onclick="removeItemFromCart(${index})"><img src="./IMG/botao-fechar-carrinho.png" width="20px"></button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Calcula e exibe o total do carrinho
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para continuar comprando (ir para outra página HTML)
function continueShopping() {
    window.location.href = 'outra_pagina.html';
}


function cancelAndCloseCart() {
    cancelAndClearCart(); // Chama a função para cancelar e esvaziar o carrinho
}

// Função para atualizar a contagem de itens no navbar
function updateNavbarCartCount() {
    document.getElementById('cart-item-count').textContent = cartItems.length;
}

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão
        // Adicione aqui o código para adicionar o item ao carrinho
    });
});