
async function getWeather() {
  let rawData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kristianstad&units=metric&appid=d2d6493bb7858fdc92502ea095a3a961')
  let weather = await rawData.json()
  
    let html = `
    <article>
    <h3>The weather in ${weather.name}</h3>
    <p>${weather.main.temp} degrees celsius</p>
    <p>Wind speed = ${weather.wind.speed} m/s</p>
    </article>
    `
  console.log(weather)

  document.querySelector('.weather').innerHTML = html
}

getWeather();
