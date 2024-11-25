
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







  const promessa = new Promise((resolve, reject) => {
    const sucesso = Math.random() > 0.3;
  
    setTimeout(() => {
      if (sucesso) {
        resolve("Download concluido");
      } else {
        reject("Falha no download");
      }
    }, 2000);
  });
  
  promessa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    })
    .finally(() => {
      console.log("Processo finalizado.");
    });





  function RealizarDownload() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("download...");
      }, 3000);
    });
  }
  
  RealizarDownload()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });


  //- Crie uma função que retorne uma Promise simulando a verificação de um login:
  //- Se o login for válido, retorne "Login bem-sucedido!".
  // - Se o login falhar, rejeite com "Credenciais inválidas.".





  
  const promessa2 = new Promise((resolve, reject) => {
    const nome = "João"
    const sucesso = dadosUsuario.nome
  
    setTimeout(() => {
      if (sucesso == nome) {
        resolve("Login bem-sucedido!");
      } else {
        reject("Credenciais inválidas");
      }
    }, 2000);
  });
  
  promessa2
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    })
    .finally(() => {
      console.log("Processo finalizado.");
    });





  function verificarLogin() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("simulando a verificação de um login:");
      }, 3000);
    });
  }
  
  verificarLogin()
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });



    const apiKey = "50e0e9735b0a2cdf6b0a41de7e1b95e6";
    const cidade = "São Paulo";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
    
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar dados");
        return response.json();
      })
      .then((data) => {
        console.log(`A temperatura em ${data.name} é de ${data.main.temp}°C`);
      })
      .catch((error) => console.error("Erro:", error));


      //////////////////////




  fetch("https://api.exemplo.com/novo-dado", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    nome: "João",
    idade: 30,
  }),
})
  .then((response) => {
    if (!response.ok) throw new Error("Erro ao enviar dados");
    return response.json();
  })
  .then((data) => console.log("Dados enviados com sucesso:", data))
  .catch((error) => console.error("Erro:", error));
   


//////////////////////////////

fetch("https://api.exemplo.com/dados")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Erro:", error));


  /////////////////////////////
