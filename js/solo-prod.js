

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

                    <a href=""  id='add_cart' class="btn-add-cart">Add <i class="bi bi-cart"></i></a>
                    <a href="" class="btn-add-cart"><i class="bi bi-heart"></i></a>
                
                </div>
            </div>
        </div>

    
    `
}




function AddCart (idProd){


    console.log( produtos['produto'] = idProd)
    console.log( produtos['quantidade'] += 1)

    JSON.stringify(produtos)


    sessionStorage.setItem("cart", `${produtos}`)

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
            AddCart(id[0])
        }

        



    })
    
})



console.log(sessionStorage.getItem('cart'))