

function verifcarLogin(){

    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("id"); 
  
    if (!nome || !email || !token) {

        alert("Você precisa estar logado para adicionar o produto no carrinho!");
        window.location.href = "login.html";
  
   
      return false
    }

    return true
  
  }

  

const DivSoloProd= document.getElementById('cont-prod-solo')

const produtos = {}

componenteSoloProd = (data) =>{


    return `

        <div class="conatiner_header">
            <img src="${data.image}" alt="">
            <div class="container_text-prod">
                <div class="cat_prod"> ${data.category} </div>
                <div class="name_prod"> ${data.title} </div>
                <div class="des_prod">  ${data.description} </div>
                <div class="price_prod"> <span> Preço: </span> ${data.price} R$</div>
                <div class='conatiner_btn_prod'> 

                    <button href=""  id='add_cart' class="btn-add-cart">Add <i class="bi bi-cart"></i></button>
                    <a href="" class="btn-favorite"><i class="bi bi-heart"></i></a>
                
                </div>
            </div>
        </div>

    
    `
}








let idUrl = window.location.search;

parametros = new URLSearchParams(idUrl)


id = parametros.getAll(("id"))


fetch(`https://fakestoreapi.com/products/${id[0]}`)
.then(function(response){
    return response.json()
})
.then( function(produto){
    DivSoloProd.innerHTML = componenteSoloProd(produto)


    const BtnAddCart =  document.getElementById('add_cart')
    BtnAddCart.addEventListener('click', () =>{

        if(!verifcarLogin()){
        }else{

            var prod = {

                'id' : `${produto.id}`,
                'image' : `${produto.image}`,
                'nome' : `${produto.title}`,
                'price' : `${produto.price}`,
                'quantidade' : `${1}`
            }
        

            AddCart(prod)

        }

    

    })
    
})


function AddCart (ObjectProd){

    if(getCart().length <= 0){


        let cart = getCart()
        
        cart.push(ObjectProd)

        sessionStorage.setItem('cart', JSON.stringify(cart))

    }else{

        var catObject = getCart()


        catObject.push(ObjectProd)

    }

}



function getCart(){

    return JSON.parse(sessionStorage.getItem('cart') || '[]')
}



