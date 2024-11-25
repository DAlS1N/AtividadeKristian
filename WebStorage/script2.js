fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => console.log(post.title));
  })
  .catch(error => console.error('Erro ao buscar posts:', error));




/////////////////////////


const postId = 23; // Substitua pelo ID do post desejado

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  .then(response => response.json())
  .then(comments => {
    const filteredComments = comments.filter(comment => comment.body.includes('dolor'));
    console.log('Comentários contendo "dolor":', filteredComments);
  })
  .catch(error => console.error('Erro ao buscar comentários:', error));


  ////////////////
 
  const apiKey = '45bd03bc75c98e54c9f31cdb0a964f3d'; // Substitua com sua chave da OpenWeatherMap

  document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
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
  