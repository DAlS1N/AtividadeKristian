document.getElementById('cepForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const cep = document.getElementById('cep').value; // Obtém o valor do CEP inserido
    const url = `https://viacep.com.br/ws/${cep}/json/`; // URL da API ViaCEP
  
    try {
      const response = await fetch(url); // Faz a requisição à API
  
      if (!response.ok) {
        throw new Error('Erro ao buscar o CEP'); // Lança erro se a resposta não for OK
      }
  
      const data = await response.json(); // Converte a resposta para JSON
  
      if (data.erro) {
        alert('CEP não encontrado!');
        return;
      }
  
      // Atualiza os elementos no HTML com os dados do CEP
      document.getElementById('logradouro').textContent = `Logradouro: ${data.logradouro}`;
      document.getElementById('bairro').textContent = `Bairro: ${data.bairro}`;
      document.getElementById('localidade').textContent = `Localidade: ${data.localidade}`;
      document.getElementById('uf').textContent = `UF: ${data.uf}`;
    } catch (error) {
      // Corrige o erro na chamada ao alert
      alert(`Ocorreu um erro: ${error.message}`);
    }
  });
  