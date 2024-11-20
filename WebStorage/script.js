
const usuario = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
  };
  






  let cont = localStorage.getItem("Vezes Entrando:") || 0; // Recuperar contador salvo, ou iniciar em 0
  cont = parseInt(cont, 10) + 1; // Incrementar o contador
  localStorage.setItem("Vezes Entrando:", cont);
  console.log(cont);







  localStorage.setItem("usuario", JSON.stringify(usuario));
  
  // Recuperando e convertendo de volta para objeto
  const dadosUsuario = JSON.parse(localStorage.getItem("usuario"));
  let nomeUsuario = dadosUsuario.nome;


  const mensagem = cont == 1 ? " Vez" : " Vezes";

  
  alert("boas-vindas " + nomeUsuario +" é bom ter você aqui. Você já entrou aqui: " + cont + mensagem)
 


  // Função para alterar o tema
function alterarTema(tema) {
    document.body.className = tema;
    localStorage.setItem("tema", tema);
  }
  
  // Recuperar tema ao carregar a página
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo) {
    document.body.className = temaSalvo;
  }
  

  // Aplicar tema ao clicar em botões
  document.querySelector("#claro").addEventListener("click", () => alterarTema("claro"));
  document.querySelector("#escuro").addEventListener("click", () => alterarTema("escuro"));

