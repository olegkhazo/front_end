import { UI_ELEMENTS } from "./view.js";
import { getCurrentCity, getFavoriteCities, saveFavoriteCities } from "./storage.js";


const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const FORECAST_SERVER_URL = `http://api.openweathermap.org/data/2.5/forecast`;


const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';

const CITY_COLLECTION = [];
const USER_CITY_COLLECTION = CITY_COLLECTION.concat(getFavoriteCities());


getFavoriteCities();
if (localStorage.getItem("current") !== null) showWeatherInfo(localStorage.getItem("current"));


showSelectedCities(USER_CITY_COLLECTION);
addNewSeatyToCollection(USER_CITY_COLLECTION);


UI_ELEMENTS.FORM.addEventListener("submit", showWeatherInfo);


function addNewSeatyToCollection(cities) {
    UI_ELEMENTS.HEART_BUTTON.addEventListener("click", function () {
        if (!cities.includes(UI_ELEMENTS.CURRENT_CITY.textContent)) {
            cities.push(UI_ELEMENTS.CURRENT_CITY.textContent);
            saveFavoriteCities(UI_ELEMENTS.CURRENT_CITY.textContent);

            showSelectedCities(cities);
            return;
        }

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
    USER_CITY_COLLECTION.splice(USER_CITY_COLLECTION.indexOf(removingCity), 1);
    this.parentNode.remove();
    localStorage.removeItem(removingCity);

    return USER_CITY_COLLECTION;
}

function millisecondsToTime(duration) {
    const date = new Date(duration * 1000);
    return date.getHours() + ":" + date.getMinutes() + 0;
}


function showWeatherInfo(event) {
    let cityName = "";

    if (event.type !== "submit" && event.type !== "click") {
        cityName = event;
    }
    else if (event.type === "submit") {
        cityName = UI_ELEMENTS.INPUT.value;
    } else {
        cityName = this.textContent;
    }

    getCurrentCity(cityName);

    const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;


    fetch(url)
        .then(response => response.json())
        .then(response => new Promise((resolve, reject) => {

            if (response.cod === '404') throw new Error("No such city in the world!");
            const data = {
                city: response.name,
                img: response.weather[0].icon,
                temp: Math.round(response.main.temp),
                feels: Math.round(response.main.feels_like),
                clouds: response.weather[0].description,
                sunrise: millisecondsToTime(response.sys.sunrise),
                sunset: millisecondsToTime(response.sys.sunset),
            };

            UI_ELEMENTS.showNowInfo(data);
            UI_ELEMENTS.showDetailsInfo(data);
            showForecast(data.city);

        }))
        .catch(function (error) {
            const BROKEN_API = "API has problems, we are working on this problem!";

            if (error.message === "Failed to fetch") throw new Error(BROKEN_API);

            alert(error.message);
        })
        .catch(alert)
        .finally(UI_ELEMENTS.FORM.reset());
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
