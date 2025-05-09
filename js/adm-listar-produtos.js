const DivProdutos = document.getElementById('table-id');
const selectCategoria = document.getElementById('categoria');

const componenteTable = (produto) => {
  return `
    <tr class="flex-cart">
      <td scope="row"><img class="img-cart" src="${produto.image}" alt="${produto.title}" width="50" /></td>
      <td>${produto.title}</td>
      <td>R$ ${produto.price}</td>
      <td>${produto.category}</td>
      <td>
        <div class="container-btn-cat">
          <a href="editar-produto-adm.html?id=${produto.id}" title="Editar"><i class="bi bi-wrench"></i></a>
          <a href="#"onclick="deletarProduto(${produto.id})" title="Deletar"><i class="bi bi-trash3"></i></a>
        </div>
      </td>
    </tr>
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

      produtosFiltrados.forEach(produto => {
        DivProdutos.innerHTML += componenteTable(produto);
      });
    });
}


function deletarProduto(id) {
  const confirmar = confirm("Tem certeza que deseja deletar este produto?");
  if (confirmar) {
    alert(`Produto com ID ${id} deletado (simulação).`);
    
    carregarProdutos(selectCategoria.value); 
  }
}

selectCategoria.addEventListener('change', () => {
  const categoriaSelecionada = selectCategoria.value;
  carregarProdutos(categoriaSelecionada);
});

carregarProdutos();
