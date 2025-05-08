
function verificarLogin() {
    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("id");

    if (!nome || !email || !token) {
        alert("Você precisa estar logado para adicionar o produto no carrinho!");
        window.location.href = "login.html";
        return false;
    }

    return true;
}


const DivSoloProd = document.getElementById('cont-prod-solo');


const componenteSoloProd = (data) => {
    return `
        <div class="conatiner_header">
            <img src="${data.image}" alt="">
            <div class="container_text-prod">
                <div class="cat_prod">${data.category}</div>
                <div class="name_prod">${data.title}</div>
                <div class="des_prod">${data.description}</div>
                <div class="price_prod"><span>Preço:</span> ${data.price} R$</div>
                <div class="conatiner_btn_prod">
                    <button id="add_cart" class="btn-add-cart">Add <i class="bi bi-cart"></i></button>
                    <a href="#" class="btn-favorite"><i class="bi bi-heart"></i></a>
                </div>
            </div>
        </div>
    `;
}


let idUrl = window.location.search;
const parametros = new URLSearchParams(idUrl);
const id = parametros.get("id");

// Faz a requisição para pegar os dados do produto
fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(produto => {
    
        DivSoloProd.innerHTML = componenteSoloProd(produto);

       
        const BtnAddCart = document.getElementById('add_cart');
        BtnAddCart.addEventListener('click', () => {
            if (!verificarLogin()) {
                return; 
            } else {
             
                const prod = {
                    id: `${produto.id}`,
                    image: `${produto.image}`,
                    nome: `${produto.title}`,
                    price: `${produto.price}`,
                    quantidade: 1
                };
                
              
                AddCart(prod);
            }
        });
    });


function AddCart(ObjectProd) {
    let cart = getCart(); 


    const produtoMudar = cart.filter(item => item.id === ObjectProd.id);

    if (produtoMudar.length > 0) {
        produtoMudar[0].quantidade += 1;
        alert('Quantidade adicionada no carrinho')
    } else {

        cart.push(ObjectProd);
        alert('Produto adicionado no carrinho')
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
    
}


function getCart() {
    return JSON.parse(sessionStorage.getItem('cart') || '[]');
}

