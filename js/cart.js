function verifcarLogin() {
  const nome = sessionStorage.getItem("nome");
  const email = sessionStorage.getItem("email");
  const token = sessionStorage.getItem("id"); 

  if (!nome || !email || !token) {
    alert("Você precisa estar logado para ver o carrinho");
    window.location.href = "login.html";
  }
}

verifcarLogin();

const DivCart = document.getElementById('table-id');

let componenteCartProd = () => {
  let cart = getCart();

  atualizarTotal();
  DivCart.innerHTML = ''; 

  cart.forEach(produto => {
    DivCart.innerHTML += `
      <tr class='flew-cart'>
        <td><img class='img-cart' src='${produto.image}'></td>
        <td>${produto.nome}</td>
        <td>R$ ${produto.price.toFixed(2)}</td>
        <td>
          <div class='coantiner-btn-cat'> 
            <button class='btn-add' data-id='${produto.id}'><i class="bi bi-plus"></i></button>
            <span class='quantidade_cart'>${produto.quantidade}</span>
            <button class='btn-sub' data-id='${produto.id}'><i class="bi bi-dash"></i></button>
          </div>
        </td>
        <td><button class='btn-remove' data-id='${produto.id}'><i class="bi bi-x-lg"></i></button></td>
      </tr>
    `;
  });

 
  document.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => {
      alterarQuantidade(btn.dataset.id, 1);
    });
  });

  document.querySelectorAll('.btn-sub').forEach(btn => {
    btn.addEventListener('click', () => {
      alterarQuantidade(btn.dataset.id, -1);
    });
  });

  document.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removerProduto(btn.dataset.id);
    });
  });
};

function getCart() {
  return JSON.parse(sessionStorage.getItem('cart') || '[]');
}

function setCart(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

function alterarQuantidade(id, delta) {
  let cart = getCart();
  cart = cart.map(prod => {
    if (prod.id == id) {
      prod.quantidade += delta;
      if (prod.quantidade < 1) prod.quantidade = 1;
    }
    return prod;
  });
  setCart(cart);
  componenteCartProd();
}

function removerProduto(id) {
  let cart = getCart();
  cart = cart.filter(prod => prod.id != id);
  setCart(cart);
  componenteCartProd();
}

function atualizarTotal() {
  const cart = getCart();
  let total = 0;
  cart.forEach(prod => {
    total += prod.price * prod.quantidade;
  });
  document.getElementById('total-cart').innerText = `R$ ${total.toFixed(2)}`;
}

const BtnFinalizar = document.getElementById('finalizar-pedido');
BtnFinalizar.addEventListener('click', () => {
  alert('Pedido Finalizado');
  sessionStorage.removeItem('cart');
  window.location.href = 'home.html';
});

componenteCartProd();
