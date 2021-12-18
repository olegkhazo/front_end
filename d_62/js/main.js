import { UI_ELEMENTS } from "./view.js";

const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';

let CITY_COLLECTION = ["Amur", "Samara", "Bali", "Dane", "Kilo", "Nur-Sultan", "Boston", "Nebraska"];

showSelectedCities(CITY_COLLECTION);
addNewSeatyToCollection(CITY_COLLECTION);


UI_ELEMENTS.FORM.addEventListener("submit", showWeatherInfo);


UI_ELEMENTS.BUTTONS.forEach(element => {
    element.addEventListener("click", function () {
        UI_ELEMENTS.BUTTONS.forEach(element => {
            element.classList.remove("active")
        })
        this.classList.add("active");
        activeTab(this.dataset.show);
    });
});

function activeTab(tabName) {
    UI_ELEMENTS.BLOCKS.forEach(element => {
        element.classList.contains(tabName) ? element.classList.add("active") : element.classList.remove("active")
    })
}

function addNewSeatyToCollection(cities) {
    UI_ELEMENTS.HEART_BUTTON.addEventListener("click", function () {
        if (!cities.includes(UI_ELEMENTS.CURRENT_CITY.textContent)) {
            cities.push(UI_ELEMENTS.CURRENT_CITY.textContent);
            showSelectedCities(cities);
            // this.src = './img/red_shape.png';
            return;
        }
        CITY_COLLECTION.splice(CITY_COLLECTION.indexOf(UI_ELEMENTS.CURRENT_CITY.textContent), 1);
        this.parentNode.remove();
        showSelectedCities(cities);
        // this.src = './img/shape.png';

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
    CITY_COLLECTION.splice(CITY_COLLECTION.indexOf(removingCity), 1);
    this.parentNode.remove();
    
    return CITY_COLLECTION;
}



function showWeatherInfo(event) {
    let cityName = "";  
    (event.type === "submit") ? cityName = UI_ELEMENTS.INPUT.value : cityName = this.textContent;
    
    const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => new Promise((resolve, reject) => {   
        if (response.cod === '404') throw new Error("No such city in the world!"); 
        const data = {
            city: response.name,
            img: response.weather[0].icon,
            temp: Math.round(response.main.temp),
        }

        // if (CITY_COLLECTION.includes(data.city)) {
        //     UI_ELEMENTS.HEART_BUTTON.src = "./img/red_shape.png";
        // } 
        // UI_ELEMENTS.HEART_BUTTON.src = "./img/shape.png";
        
        
        UI_ELEMENTS.TEMPERETURE.innerHTML = `<p>${data.temp}<span>°</span></p>`;
        UI_ELEMENTS.WEATHER_ICON.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.img}@2x.png" alt="sky">`;
        UI_ELEMENTS.CURRENT_CITY.innerHTML = `<p>${data.city}</p>`;
        
        
    }))
    .catch(function(error) {
        const BROKEN_API = "API has problems, we are working on this problem!";
        if(error.message === "Failed to fetch") throw new Error(BROKEN_API);

        alert(error.message);
    })
    .catch(function(error) {
        alert(error.message);
    })
    .finally(UI_ELEMENTS.FORM.reset());

}