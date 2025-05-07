


const DivProdutos = document.getElementById('lista-prod')



const componenteCard = (produto)=>{

    return `
    
    <div class='card-prod'> 

        <img class='card-img' src='${produto.image}'> </img>
        <h6 class='card-text'> ${produto.title} </h6>
        <span class='price-card'> Preço: ${produto.price} R$</span>
        <a class='btn-ver' href='../produto-solo.html?id=${produto.id}' >Ver Produto</a>

    </div>
    
    `

}

fetch('https://fakestoreapi.com/products')
.then(function(response){

    return response.json()

}).then(function(produto){


    produto.forEach(item => {

        console.log(item)

        DivProdutos.innerHTML += componenteCard(item)
        
    });


})