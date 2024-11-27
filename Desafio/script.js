const apiKey = '706e6c2535844f60b8b192311242511'; // Substitua com sua chave da OpenWeatherMap

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`;
  const icon = `https://www.weatherapi.com/docs/weather_conditions.json`

  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error('Cidade não encontrada');
      return response.json();
    })
    .then(data => {
      const temperature = data.current.temp_c;
      const sensacaoTermica = data.current.windchill_c;
      const humidade = data.current.humidity;
      const vento = data.current.wind_kph;
      const icone = data.current.condition.icon;
      const condicao= data.current.condition.text;

      document.getElementById('result').innerHTML = `
      <img src="https:${icone}" alt="${condicao}" />
      \nDados da Cidade: ${city} 
      \nTemperatura atual: ${temperature}°C.
      \nSensação termica: ${sensacaoTermica}°C.
      \nHumidade: ${humidade}%.
      \nVento: ${vento}km/h.
      `
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro: ${error.message}`;
    });
});
