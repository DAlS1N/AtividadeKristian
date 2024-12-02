const apiKey = '706e6c2535844f60b8b192311242511'; // Substitua com sua chave da OpenWeatherMap

document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const city = document.getElementById('city').value;
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=pt`;
  const foreUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=yes&alerts=yes&lang=pt`

  
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
      <div id ="ajuste">
      <img src="https:${icone}" alt="${condicao}"/>
      <h2>${condicao}</h2>
      </div>
      <h2>Dados da Cidade: ${city}</h2>
      <p>Temperatura atual: ${temperature}°C<p>
      <p>Sensação termica: ${sensacaoTermica}°C<p>
      <p>Humidade: ${humidade}%<p>
      <p>Vento: ${vento}km/h<p>
      </div>
      `
    })
    .catch(error => {
      document.getElementById('result').innerText = `Erro: ${error.message}`;
    });


fetch(foreUrl)
.then(response => {
  if (!response.ok) throw new Error('Cidade não encontrada');
  return response.json();
})
.then(data => {
  const forecastDays = data.forecast.forecastday;
  let forecastHtml = ``;

  const contador = 0;


  
  forecastDays.slice(1).forEach(day => {
    const date = day.date;
    const { maxtemp_c, mintemp_c, condition, maxwind_kph } = day.day;
    const icone = condition.icon;
    const condicao = condition.text;

    forecastHtml += `
      <div>
      <div id = "Centralizado"> 
        <h3>${date}</h3>
        <img src="https:${icone}" alt="${condicao}" />
        <p>Condição: ${condicao}</p>
       </div>
        <p>Temperatura Máxima: ${maxtemp_c}°C</p>
        <p>Temperatura Mínima: ${mintemp_c}°C</p>
        <p>Vento Máximo: ${maxwind_kph} km/h</p>
      </div>
    `;
  });

  document.getElementById('resultDeOutrosDias').innerHTML = forecastHtml;
})
.catch(error => {
  document.getElementById('resultDeOutrosDias').innerText = `Erro: ${error.message}`;
});
});








