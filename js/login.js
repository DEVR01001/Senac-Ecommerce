const BtnLogin = document.getElementById('login');
let MsgSucess = document.getElementById('msg-sucess');
let MsgErro = document.getElementById('msg-erro');

BtnLogin.addEventListener('click', () => {
  const InputEmail = document.getElementById('email').value.trim();
  const InputSenha = document.getElementById('senha').value.trim();
  const InputConfSenha = document.getElementById('conf-senha').value.trim();


  if (InputEmail === "" || InputSenha === "" || InputConfSenha === "") {
    MsgErro.innerText = 'Preencha todos os campos';
    setTimeout(() => { MsgErro.innerText = ''; }, 2500);
    return;
  }


  if (InputSenha !== InputConfSenha) {
    MsgErro.innerText = 'Senhas não estão corretas';
    setTimeout(() => { MsgErro.innerText = ''; }, 2500);
    return;
  }


  if (InputEmail === 'morrison@gmail.com' && InputSenha === '83r5^_') {
    sessionStorage.setItem('admin', 'true');
    MsgSucess.innerText = 'Login de Administrador realizado com sucesso';

    setTimeout(() => {
      window.location.href = 'listar_produto.html';
    }, 2000);

  } else {
  
    const emailAuth = sessionStorage.getItem('email');
    const senhaAuth = sessionStorage.getItem('senha');
    const IDAuth = sessionStorage.getItem('id');

    if (InputEmail !== emailAuth || InputSenha !== senhaAuth) {
      MsgErro.innerText = 'Email ou senha inválidos';
      setTimeout(() => { MsgErro.innerText = ''; }, 2500);
      return;
    }

    fetch(`https://fakestoreapi.com/users/${IDAuth}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        MsgSucess.innerText = 'Login Realizado com Sucesso';
        sessionStorage.setItem('admin', 'false');

        setTimeout(() => {
          window.location.href = 'home.html';
        }, 2000);
      });
  }
});
