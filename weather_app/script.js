const apiKEY = "368b8627dcb9c0f29f3b920abc9e5c78";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weather_icon = document.querySelector(".weather-icon");

async function checkWeather(cityname) {
  const response = await fetch(apiURL + `&q=${cityname}&appid=${apiKEY}`);
  const data = await response.json();
  console.log(data);

  searchbox.value = "";

  if (response.status === 404 || response.status === 400) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    return;
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  weather_icon.src = `images/${data.weather[0].main}.png`;

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(searchbox.value);
});

// checkWeather("thailand");
