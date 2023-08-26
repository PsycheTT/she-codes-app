function formatDate() {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    hours = `0${minutes}`;
  }
  let forecast = document.getElementById("forecast").innerHTML;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  return `${day} ${hours}:${minutes} ${forecast}`;
}

let localWeather = document.querySelector(".cityforecast");
localWeather.innerHTML = formatDate();

function showForecast(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let degreeCelsius = document.querySelector("#temperature");
  degreeCelsius.innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
  let city = document.querySelector("#search-box").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);
}

let submitSearch = document.querySelector(".citysearch");
submitSearch.addEventListener("submit", search);

function showPosition(position) {
  let apiKey = "f3887e262c88d1158f7e2ef4998e234c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(console.log(showForecast));
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

//Bonus Feature
//function celsius(event) {
//event.preventDefault();
//let degreeCelsius = document.querySelector("#temperature");
//degreeCelsius.innerHTML = "19";
//}

//let convertCelsius = document.querySelector("#convert-celsius");
//convertCelsius.addEventListener("click", showForecast);

//function fahrenheit(event) {
//event.preventDefault();
//let degreeFahrenheit = document.querySelector("#temperature");
//degreeFahrenheit.innerHTML = "66";
//}

//let convertFahrenheit = document.querySelector("#convert-fahrenheit");
//convertFahrenheit.addEventListener("click", showForecast);
