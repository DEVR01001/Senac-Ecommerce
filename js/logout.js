


const BtnSair  = document.getElementById('btn-sair')



BtnSair.addEventListener('click', () =>{

    sessionStorage.clear()
    window.location.href = "login.html";
    
})
