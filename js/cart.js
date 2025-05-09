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



const DivCart =  document.getElementById('table-id')




let componenteCartProd = () =>{
  
  
    let cart = getCart()


    atualizarTotal()

    console.log(cart)

    cart.forEach(produto => {

      
      DivCart.innerHTML+= `

            <tr class='flew-cart'>
              <td scope="row"><img class='img-cart' src='${produto.image}'> </img></td>
              <td>${produto.nome}</td>
              <td>${produto.price}</td>
              <td>
                <div class='coantiner-btn-cat'> 
                    <button data-id='${produto.id}' id='add_quant_cart'> <i class="bi bi-plus"></i></button>
                    <span class='quantidade_cart' id='quant-cart'> ${produto.quantidade} </span>
                    <button data-id='${produto.id}' id='sub_quant_cart'> <i class="bi bi-dash"></i></button>
                  </div>
              </td>
              <td><i class="bi bi-x-lg"></i></td>
            </tr>
  
  
      `


      const BtnSomarQuantidade =  document.querySelector('add_quant_cart')
      const BtnSubtrairQuantidade =  document.querySelector('sub_quant_cart')
      const DivQuantidade =  document.querySelector('quant-cart')

      


      





    });

 

}



componenteCartProd()


function getCart() {
  return JSON.parse(sessionStorage.getItem('cart') || '[]');
}


function atualizarTotal() {
  const cart = getCart();
  let total = 0;
  cart.forEach(prod => {
    total += prod.price * prod.quantidade;
  });
  document.getElementById('total-cart').innerText = `R$ ${total.toFixed(2)}`;
}



const BtnFinalizar = document.getElementById('finalizar-pedido')


BtnFinalizar.addEventListener('click', ()=>{

  alert('Pedido Finalizado')

  sessionStorage.removeItem('cart')

  window.location.href= 'home.html'
})