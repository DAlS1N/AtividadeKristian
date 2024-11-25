const apiKey = "706e6c2535844f60b8b192311242511";
const cidade = "São Paulo";
const url = `http://api.weatherapi.com/v1/current.json?key=&q=${cidade}&aqi=yes`;

fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("Erro ao buscar dados");
    return response.json();
  })
  .then((data) => {
    console.log(`A temperatura em ${data.name} é de ${data.main.temp}°C`);
  })
  .catch((error) => console.error("Erro:", error));