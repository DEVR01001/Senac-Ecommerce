function verifcarLogin(){

    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("id"); 
  
    if (!nome || !email || !token) {
        alert("Você precisa estar logado para ver os favoritos");
      window.location.href = "login.html";
    }
  
  }


verifcarLogin()