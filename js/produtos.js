const DivProdutos = document.getElementById('lista-prod');
const selectCategoria = document.getElementById('categoria'); 






const componenteCard = (produto) => {
  return `
    <div class='card-prod'> 
        <img class='card-img' src='${produto.image}' />
        <h6 class='card-text'> ${produto.title} </h6>
        <span class='price-card'> Preço: ${produto.price} R$</span>
        <a class='btn-ver' href='../produto-solo.html?id=${produto.id}'>Ver Produto</a>
    </div>
  `;
};


function carregarProdutos(categoria = '') {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(produtos => {


      let produtosFiltrados;

      if (categoria) {
     
        produtosFiltrados = produtos.filter(function(produto) {
          return produto.category.toLowerCase() === categoria.toLowerCase();
        });
      } else {
     
        produtosFiltrados = produtos;
      }
      
      
      DivProdutos.innerHTML = ''; 

      produtosFiltrados.forEach(item => {
        DivProdutos.innerHTML += componenteCard(item);
      });
    });
}


selectCategoria.addEventListener('change', () => {
  const categoriaSelecionada = selectCategoria.value;
  carregarProdutos(categoriaSelecionada); 
});


carregarProdutos();
