function logar() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  let userStorage = localStorage.getItem("usuario");
  let passStorage = localStorage.getItem("senha");

  if (usuario === userStorage && senha === passStorage) {
    mensagem.style.color = "green";
    mensagem.innerText = "Login realizado com sucesso!";
    setTimeout(() => {
      window.location.href = "voluntarios.html";
    }, 1000);
  } else {
    mensagem.style.color = "red";
    mensagem.innerText = "Usuário ou senha incorretos!";
  }
}
