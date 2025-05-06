



const BtnCad = document.getElementById('btn-cadastrar')
let MsgSucess = document.getElementById('msg-sucess')



BtnCad.addEventListener('click', () =>{

    const InputNome = document.getElementById('nome')
    const InputEmail = document.getElementById('email')
    const InputSenha = document.getElementById('senha')



    const user = { username: `${InputNome.value}`, email: `${InputEmail.value}`, password: `${InputSenha.value}` };

    
    const dados = fetch('https://fakestoreapi.com/users', {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log(data))


    const id = fetch('https://fakestoreapi.com/users').then(function(dados){
        return dados.json()
    })



    sessionStorage.setItem("nome", `${InputNome.value}`)
    sessionStorage.setItem("email", `${InputEmail.value}`)
    sessionStorage.setItem("senha", `${InputSenha.value}`)


    console.log(data.id)
    
    MsgSucess.innerText='Cadastro Realizado com Sucesso'


    setTimeout(() =>{

         window.location.href = "login.html?";

    }, 2000)






})

