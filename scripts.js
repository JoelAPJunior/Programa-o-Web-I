document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("webBotao").addEventListener("click", function (event) {
      event.preventDefault(); // Evita que a página recarregue
  
      let nome = document.getElementById("nome").value.trim();
      let dataNascimento = document.getElementById("dataNascimento").value;
      let cpf = document.getElementById("cpf").value.trim();
      let email = document.getElementById("email").value.trim();
      let senha = document.getElementById("senha").value;
      let confirmarSenha = document.getElementById("senha").value;
  
      // Verifica se os campos obrigatórios estão preenchidos
      if (nome === "" || dataNascimento === "" || cpf === "" || email === "" || senha === "") {
        alert("Preencha os campos obrigatórios.");
        return;
      }
  
      // Validação simples de nome (pelo menos 2 palavras)
      if (!/^[A-Za-zÀ-ú]+\s+[A-Za-zÀ-ú]+/.test(nome)) {
        alert("Digite o nome e sobrenome.");
        return;
      }
  
      // Verifica se CPF tem 11 dígitos (sem formatação)
      if (!/^\d{11}$/.test(cpf.replace(/\D/g, ""))) {
        alert("CPF inválido. Deve conter 11 dígitos.");
        return;
      }
      
  
      // Validação de email básica
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Email inválido.");
        return;
      }
  
      // Verifica se senha tem pelo menos 6 caracteres
      if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }
  
      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }
  
      // Verifica idade a partir da data de nascimento
      let idade = calcularIdade(dataNascimento);
      if (idade < 18) {
        alert("Usuário menor de idade. Campos dos pais devem ser preenchidos.");
        
      }
  
      // Se tudo estiver certo
      alert("Cadastro validado com sucesso!");
    });
  
    // Função auxiliar para calcular idade
    function calcularIdade(data) {
        
      let nascimento = new Date(data);
      let hoje = new Date();
      let idade = hoje.getFullYear() - nascimento.getFullYear();
      let mes = hoje.getMonth() - nascimento.getMonth();
  
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
      }
      return idade;
    }
  });
  