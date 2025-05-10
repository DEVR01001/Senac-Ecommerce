const componenteEditProduto = ({ title, description, price, image, category }) => {
  return `
    <form id="form-edit">

      <div class="row my-5 g-5">
        <div class="col-6">
          <input value='${title}' id="nome-produto" type="text" class="form-control form-control-lg" placeholder="Nome Produto">
        </div>
        <div class="col-6">
          <select id="categoria" class="form-control form-control-lg">
            <option value="">Categoria</option>
            <option value="men's clothing" ${category === "men's clothing" ? "selected" : ""}>Roupa Masculina</option>
            <option value="women's clothing" ${category === "women's clothing" ? "selected" : ""}>Roupa Feminina</option>
            <option value="electronics" ${category === "electronics" ? "selected" : ""}>Eletrônicos</option>
            <option value="jewelery" ${category === "jewelery" ? "selected" : ""}>Joias</option>
          </select>
        </div>
        <div class="col-12">
          <textarea id="descricao" class="form-control form-control-lg" placeholder="Descrição Produto">${description}</textarea>
        </div>
        <div class="col-12">
          <input value='${price}' id="preco" type="number" class="form-control form-control-lg" placeholder="Preço do Produto">
        </div>
        <div class="col-12">
          <input id="imagem" type="file"  class="form-control form-control-lg" placeholder="URL da Imagem">
        </div>
      </div>
      <div class="col-12">
        <button id="btn-editar" type="button" class="btn btn-primary btn-lg my-2">Editar Produto</button>
      </div>

    </form>
  `;
};

const DivEdit = document.getElementById('cont-edit');

let idUrl = window.location.search;
const parametros = new URLSearchParams(idUrl);
const id = parametros.get("id");

fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(produto => {
    DivEdit.innerHTML = componenteEditProduto(produto);

    const BtnEditar = document.getElementById('btn-editar');

    BtnEditar.addEventListener('click', () => {
    
      const nome = document.getElementById('nome-produto').value;
      const descricao = document.getElementById('descricao').value;
      const preco = document.getElementById('preco').value;
      const imagem = document.getElementById('imagem').value;
      const categoria = document.getElementById('categoria').value;

  
      alert('Produto editado com sucesso');
      window.location.href = 'listar_produto.html';
    });
  });
