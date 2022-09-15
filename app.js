const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");
const APIKEY = "aecc5d608d6e04ebfaf220bbc970f79e";
const weatherInput = document.querySelector(".weather-input");
const weatherInputBtn = document.querySelector(".weather-input-btn");
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const form = document.querySelector(".form");
const errorDisplay = document.querySelector(".display-error");
const formPassword = document.getElementById("password");
const formConfirmationPassword = document.getElementById("confrim-password");
//navigation
const hamburgerToggle = () => {
  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-toggle");
    console.log("confirm");
  });
};
hamburgerToggle();

//weather api
weatherInputBtn.addEventListener("click", searchWeather);

function searchWeather(e) {
  getResults(weatherInput.value);
  console.log(weatherInput.value);
}
function getResults(querry) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${querry}&units=metric&appid=${APIKEY}`
  )
    .then((data) => {
      return data.json();
    })
    .then(displayInfo);
}

function displayInfo(data) {
  console.log(data);
  let location = document.querySelector(".location-display");
  location.innerText = `${data.name},${data.sys.country}`;
  let weather = document.querySelector(".weather-display");
  weather.innerText = `current temperature  ${Math.round(data.main.temp)} °`;
  let weatherDiscription = document.querySelector(
    ".weather-discription-display"
  );
  weatherDiscription.innerHTML = `${data.weather[0].description} <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
}
//form

form.addEventListener("submit", (e) => {
  let errorMessages = [];
  if (formPassword.value.length <= 5) {
    errorMessages.push("Password must be longer than 5 characters");
  }
  if (formPassword.value.length >= 12) {
    errorMessages.push("Password must be less than 12 characters");
  }

  if (formPassword.value !== formConfirmationPassword.value) {
    errorMessages.push("passwords must match");
  }
  if (errorMessages.length > 0) {
    e.preventDefault();
    form.classList.add("form-error");
    errorDisplay.innerText = errorMessages;
  }
});
