import { UI_ELEMENTS } from "./view.js";
import { getCurrentCity, getFavoriteCities, saveFavoriteCities } from "./storage.js";


const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_SERVER_URL = `https://api.openweathermap.org/data/2.5/forecast`;

//This key is individual, and you may need to toggle it toggle it.
const API_KEY = '574999b8b47e40034c812362f8fa8bcc';

const CITY_COLLECTION = new Set();
const USER_CITY_COLLECTION = new Set();
const GET_FAVOURITE_CITIES = getFavoriteCities();
GET_FAVOURITE_CITIES.forEach((city, cities, GET_FAVOURITE_CITIES) => {
    USER_CITY_COLLECTION.add(city);
});


getFavoriteCities();
if (localStorage.getItem("current") !== null) showWeatherInfo(localStorage.getItem("current"));


showSelectedCities(USER_CITY_COLLECTION);
addNewCityToCollection(USER_CITY_COLLECTION);


UI_ELEMENTS.FORM.addEventListener("submit", showWeatherInfo);


function addNewCityToCollection(cities) {
    UI_ELEMENTS.HEART_BUTTON.addEventListener("click", function () {
        cities.add(UI_ELEMENTS.CURRENT_CITY.textContent);
        saveFavoriteCities(UI_ELEMENTS.CURRENT_CITY.textContent);

        showSelectedCities(cities);
        return;
    });
}


function showSelectedCities(cities) {
    UI_ELEMENTS.ADDED_CITIES_BLOCK.innerHTML = "";

    cities.forEach(city => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement("img");

        div.className = "selected_city";
        p.textContent = city;
        p.style.cursor = "pointer";

        img.setAttribute("src", "./img/close-icon.png");

        p.addEventListener("click", showWeatherInfo);
        img.addEventListener("click", removeCity);

        div.append(p);
        div.append(img);
        UI_ELEMENTS.ADDED_CITIES_BLOCK.append(div);
    });
}


function removeCity(event) {
    const removingCity = this.previousSibling.textContent;
    USER_CITY_COLLECTION.delete(removingCity);
    this.parentNode.remove();
    localStorage.removeItem(removingCity);

    return USER_CITY_COLLECTION;
}

function millisecondsToTime(duration) {
    const date = new Date(duration * 1000);
    return date.getHours() + ":" + date.getMinutes() + 0;
}

async function showWeatherInfo(event) {
    let cityName = "";

    if (event.type !== "submit" && event.type !== "click") {
        cityName = event;
    } else if (event.type === "submit") {
        cityName = UI_ELEMENTS.INPUT.value;
    } else {
        cityName = this.textContent;
    }

    getCurrentCity(cityName);

    const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

    let response = await fetch(url);

    if (response.status === '404') throw new Error("No such city in the world!");

    let json = await response.json();

    const data = {
        city: json.name,
        img: json.weather[0].icon,
        temp: Math.round(json.main.temp),
        feels: Math.round(json.main.feels_like),
        clouds: json.weather[0].description,
        sunrise: millisecondsToTime(json.sys.sunrise),
        sunset: millisecondsToTime(json.sys.sunset),
    };

    UI_ELEMENTS.showNowInfo(data);
    UI_ELEMENTS.showDetailsInfo(data);
    showForecast(data.city);

    UI_ELEMENTS.FORM.reset();
}


function showForecast(city) {

    const url = `${FORECAST_SERVER_URL}?q=${city}&cnt=3&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(response => new Promise((resolve, reject) => {
            const data = {
                city: response.city.name,
                data_collection: response.list,
            };

            UI_ELEMENTS.showForecastInfo(data);

        }))
        .catch(alert);

}
