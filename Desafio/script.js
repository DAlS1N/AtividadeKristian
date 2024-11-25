const apiKey = '45bd03bc75c98e54c9f31cdb0a964f3d'; // Substitua com sua chave da OpenWeatherMap

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value;
  const apiUrl = `https://www.weatherapi.com/api-explorer.aspx`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error('Cidade não encontrada');
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      document.getElementById('result').innerText = `A temperatura atual em ${city} é ${temperature}°C.`;
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro: ${error.message}`;
    });
});
