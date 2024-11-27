const apiKey = '706e6c2535844f60b8b192311242511'; // Substitua com sua chave da OpenWeatherMap

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`;


  
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
      <div>
      <img src="https:${icone}" alt="${condicao}"/>
      <p>${condicao}</p>
      </div>
      <h2>Dados da Cidade: ${city}</h2>
      <p>Temperatura atual: ${temperature}°C<p>
      <p>Sensação termica: ${sensacaoTermica}°C<p>
      <p>Humidade: ${humidade}%<p>
      <p>Vento: ${vento}km/h<p>
      `
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro: ${error.message}`;
    });
});
