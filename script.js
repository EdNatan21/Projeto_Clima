const apiKey = '13d7f4e57fdbc7c9ccc08a5916bc3ee4';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector('.erro').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'imagens/clouds.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'imagens/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'imagens/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'imagens/mist.png';
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'imagens/clear.png';
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'imagens/snow.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.erro').style.display = 'none';
  }
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});
