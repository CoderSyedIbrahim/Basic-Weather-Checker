const city = document.getElementById('cityName')
const btn = document.getElementById('btn')
const display = document.getElementById('display')
let cityName

const getCityName = (e) => {
  cityName = e.target.value
}

const getWeather = async () => {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=333db0046b1e44018cc131847230209&q=${cityName}&aqi=no`)
  const data = await response.json()
  const { current } = data
  display.innerText = `Current Temperature: ${current.temp_c} °C`
}

city.addEventListener('change', getCityName)
btn.addEventListener('click', getWeather)