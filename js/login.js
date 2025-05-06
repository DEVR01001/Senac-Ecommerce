




const BtnLogin = document.getElementById('login')
let MsgSucess = document.getElementById('msg-sucess')
let MsgErro = document.getElementById('msg-erro')


BtnLogin.addEventListener('click', () =>{


    const InputEmail = document.getElementById('email').value
    const InputSenha = document.getElementById('senha').value
    const InputConfSenha = document.getElementById('conf-senha').value


    console.log(InputEmail)


    
    if(InputEmail.value === " " || InputSenha.value === " " || InputConfSenha.value === " " ){

        MsgErro.innerText = 'Preencha todos os campos'

    }else{

        
        let emailAuth= sessionStorage.getItem('email')
        let senhaAuth= sessionStorage.getItem('senha')   
        let IDAuth= sessionStorage.getItem('id')   

        console.log(IDAuth)


        if(InputEmail !=  emailAuth){

            MsgErro.innerText = 'Email não está correto'
        } else if(InputSenha != senhaAuth || InputSenha != InputConfSenha){
            MsgErro.innerText = 'Senhas não estão corretas'
            
        }else{



            fetch('https://fakestoreapi.com/users/1')
            .then( response => response.json())
            .then( data => console.log(data))

            

            MsgSucess.innerText='Login Realizado com Sucesso'
            
            setTimeout(() =>{

                window.location.href = 'home.html'
            }, 2000)



        }

        setTimeout(() =>{

            MsgErro.innerHTML = ''

        }, 2500)


            
        }

})
