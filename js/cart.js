function verifcarLogin(){

    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("id"); 
  
    if (!nome || !email || !token) {
        alert("Você precisa estar logado para ver o carrinho");
      window.location.href = "login.html";
    }
  
  }


verifcarLogin()



const DivCart =  document.getElementById('cart_cont')










let componenteCartProd = () =>{
  
    let cart = getCart()

    console.log(cart)

    cart.forEach(produto => {

      
      DivCart.innerHTML+= `

        <tbody>
            <tr class='flew-cart'>
              <th scope="row"><img class='img-cart' hrfe='${produto.image}'> </img></th>
              <td>${produto.nome}</td>
              <td>${produto.price}</td>
              <td>
                  <button id='add_quant_cart'> <i class="bi bi-plus"></i></button>
                  <span class='quantidade_cart' id='quant-cart'> </span>
                   <button id='remove_quant_cart'> <i class="bi bi-dash"></i></button>
              </td>
              <td><i class="bi bi-x-lg"></i></td>
            </tr>
        </tbody>
  
  
      `


    });

 

}



componenteCartProd()


function getCart() {
  return JSON.parse(sessionStorage.getItem('cart') || '[]');
}

