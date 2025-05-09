function verifcarLogin() {
  const nome = sessionStorage.getItem("nome");
  const email = sessionStorage.getItem("email");
  const token = sessionStorage.getItem("id");

  if (!nome || !email || !token) {
    alert("Você precisa estar logado para ver os favoritos");
    window.location.href = "login.html";
  }
}

verifcarLogin();

const DivProdutos = document.getElementById('lista-prod');

function getFavorite() {
  return JSON.parse(sessionStorage.getItem('favorite') || '[]');
}

function setFavorite(lista) {
  sessionStorage.setItem('favorite', JSON.stringify(lista));
}

const componenteCard = (produto) => {
  return `
    <div class='card-prod' data-id='${produto.id}'> 
        <button class='btn-retirar-favorite' data-id='${produto.id}'><i class="bi bi-x-lg iconx"></i></button>
        <img class='card-img' src='${produto.image}' />
        <h6 class='card-text'> ${produto.nome} </h6>
        <span class='price-card'> Preço: ${produto.price} R$</span>
        <a class='btn-ver' href='../produto-solo.html?id=${produto.id}'>Ver Produto</a>
    </div>
  `;
};

function carregarProdutos() {
  const favoritos = getFavorite();

  DivProdutos.innerHTML = '';

  if (favoritos.length === 0) {
    DivProdutos.innerHTML = '<p>Nenhum produto adicionado aos favoritos ainda.</p>';
  } else {
    favoritos.forEach(item => {
      DivProdutos.innerHTML += componenteCard(item);
    });

  
    const botoesRemover = document.querySelectorAll('.btn-retirar-favorite');

    botoesRemover.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        removerDosFavoritos(id);
      });
    });
  }
}

function removerDosFavoritos(id) {
  let favoritos = getFavorite();
  const novaLista = favoritos.filter(prod => prod.id !== id);
  setFavorite(novaLista);
  alert('Produto removido dos favoritos');
  carregarProdutos(); 
}

carregarProdutos();
