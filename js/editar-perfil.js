
function verifcarLogin(){

    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("id"); 
  
    if (!nome || !email || !token) {
        alert("Você precisa estar logado para editar seu perfil");
      window.location.href = "login.html";
    }
  
  }


verifcarLogin()

const Username = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const BtnEditar = document.getElementById('btn-editar')


let userSession = sessionStorage.getItem('nome')
let emailSession = sessionStorage.getItem('email')
let senhaSession = sessionStorage.getItem('senha')



Username.value = userSession
email.value = emailSession
senha.value = senhaSession



BtnEditar.addEventListener('click', () =>{

    sessionStorage.setItem('nome', `${Username.value}`)
    sessionStorage.setItem('email', `${email.value}`)
    sessionStorage.setItem('senha', `${senha.value}`)

      
    MsgSucess.innerText='Perfil editado com sucesso'


    setTimeout(() =>{

         window.location.href = "perfil.html";

    }, 2000)

})




