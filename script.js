// Função para alternar entre as telas de Login e Cadastro
function trocarTela() {
    const login = document.getElementById('area-login');
    const cadastro = document.getElementById('area-cadastro');
    
    if (login.style.display === 'none') {
        login.style.display = 'block';
        cadastro.style.display = 'none';
    } else {
        login.style.display = 'none';
        cadastro.style.display = 'block';
    }
}

// Função de CADASTRO
function cadastrar() {
    const user = document.getElementById('cad-user').value;
    const pass = document.getElementById('cad-pass').value;

    if (user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Salvando no localStorage (o "banco de dados" do navegador)
    localStorage.setItem('usuarioSalvo', user);
    localStorage.setItem('senhaSalva', pass);

    alert("Cadastro realizado com sucesso! Agora faça login.");
    trocarTela();
}

// Função de LOGIN
function fazerLogin() {
    const userDigitado = document.getElementById('login-user').value;
    const passDigitado = document.getElementById('login-pass').value;

    // Pegando o que está guardado
    const userNoBanco = localStorage.getItem('usuarioSalvo');
    const passNoBanco = localStorage.getItem('senhaSalva');

    if (userDigitado === userNoBanco && passDigitado === passNoBanco) {
        alert("Login realizado! Bem-vindo ao Game.");
        // Aqui você mandaria o aluno para a página do ranking
        // window.location.href = "dashboard.html"; 
    } else {
        alert("Usuário ou senha incorretos.");
    }
}