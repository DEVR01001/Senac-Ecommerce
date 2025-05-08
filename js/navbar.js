


const DivNav = document.getElementById('nav-section')

componenteNav = () =>{


    return `

        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
            <div class="container-fluid" style="background-color: rgb(255, 255, 255);">
            <a class="navbar-brand" href="#">
                <img src="src/ab (500 x 500 px).png" height="100px" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 justify-content-start">
                <li class="nav-item mx-4">
                    <a class="nav-link fs-5" style="font-weight: 500;" aria-current="page" href="home.html">Home</a>
                </li>
                <li class="nav-item mx-4">
                    <a class="nav-link fs-5" style="font-weight: 500;" href="favoritos.html">Favoritos</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link fs-5" style="font-weight: 500;" href="cart.html">
                    <i class="bi bi-cart" style="font-size: 1.3rem;"></i>
                    Carrinho
                    </a>
                </li>

                <li class="nav-item dropdown  ms-auto mx-5">
                    <button class="btn btn-dark dropdown-toggle mx-1 fs-10" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person" style="font-size: 1rem;"></i>Perfil
                    </button>
                    <ul class="dropdown-menu  dropdown-menu-dark">
                        <li><a class="dropdown-item fs-10" href="perfil.html">Editar Perfil</a></li>
                        <li><a id='btn-sair' class="dropdown-item fs-10" >Sair</a></li>
                    </ul>
                    
                </li>
                </ul>
            </div>
            </div>
        </nav>
    
    `
}



DivNav.innerHTML = componenteNav()



