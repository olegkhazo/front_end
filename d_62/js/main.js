import { UI_ELEMENTS } from "./view.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
// const cityName = 'boston';


UI_ELEMENTS.FORM.addEventListener("submit", function() {
    const cityName = UI_ELEMENTS.INPUT.value; 
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => new Promise((resolve, reject) => {   
        if (response.cod === '404') throw new Error("No such city in the world!"); 
        const data = {
            city: response.name,
            img: response.weather[0].icon,
            temp: Math.round(response.main.temp),
        }

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
    // .finally();

    UI_ELEMENTS.FORM.reset();

});





// const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const cityName = 'boston';
// const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
// const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

// {"coord":{"lon":-71.0598,"lat":42.3584},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations",
// "main":{"temp":286.26,"feels_like":285.74,"temp_min":283.99,"temp_max":288.21,"pressure":1016,"humidity":81},"visibility":10000,
// "wind":{"speed":3.13,"deg":274,"gust":6.71},"clouds":{"all":90},"dt":1639672780,"sys":{"type":2,"id":2013408,"country":"US","sunrise":1639656444,
// "sunset":1639689163},"timezone":-18000,"id":4930956,"name":"Boston","cod":200}