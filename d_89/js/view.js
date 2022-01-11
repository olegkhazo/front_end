export const UI_ELEMENTS = {
    BUTTONS: document.querySelectorAll(".tab__item"),
    BLOCKS: document.querySelectorAll(".tabs__block"),
    FORM: document.querySelector(".form"),
    INPUT: document.querySelector(".input"),

    TEMPERATURE: document.querySelector(".temperature"),
    CURRENT_CITY: document.querySelector(".currentCity"),
    WEATHER_ICON: document.querySelector(".precipitation"),
    ADDED_CITIES_BLOCK: document.querySelector(".cities"),
    HEART_BUTTON: document.querySelector(".heard_btn"),

    DETAILS: document.querySelector(".details"),
    DETAILS_TEMPERATURE: document.querySelector(".details_temperature"),
    DETAILS_FEELS: document.querySelector(".details_feels"),
    DETAILS_CLOUDS: document.querySelector(".details_clouds"),
    DETAILS_SUNRISE: document.querySelector(".details_sunrise"),
    DETAILS_SUNSET: document.querySelector(".details_sunset"),

    FORECAST: document.querySelector(".forecast"),
    
    
    showNowInfo(data) {
        this.TEMPERATURE.childNodes[1].textContent = `${data.temp}°`;
        this.WEATHER_ICON.childNodes[1].setAttribute("src", `http://openweathermap.org/img/wn/${data.img}@2x.png`);
        this.CURRENT_CITY.childNodes[1].textContent = `${data.city}`;
    },

    showDetailsInfo(data) {
        this.DETAILS.childNodes[1].textContent = `${data.city}`;
        this.DETAILS_TEMPERATURE.textContent = `Temperature: ${data.temp}°`;
        this.DETAILS_FEELS.textContent = `Feels like: ${data.feels}°`;
        this.DETAILS_CLOUDS.textContent = `Weather: ${data.clouds}`;
        this.DETAILS_SUNRISE.textContent = `Sunrise: ${data.sunrise}`;
        this.DETAILS_SUNSET.textContent = `Sunset: ${data.sunset}`;
    },

    showForecastInfo(data) {

        if (this.FORECAST.childNodes.length >= 3) this.FORECAST.textContent = "";  
        
        let city_name = document.createElement("p");
        city_name.className = "cityName";
        this.FORECAST.append(city_name);
        
        for(let i = 0; i < data.data_collection.length; i++) {
            let oneDayBlock = document.createElement('div');
            let topInfo = document.createElement("div");
            let day = document.createElement("div");
            let time = document.createElement("div");
            let bottomInfo = document.createElement("div");
            let degrees = document.createElement("div");
            let fallout = document.createElement("div");
            
            let main_temperature = document.createElement("p");
            let feels_like = document.createElement("p");
            let fallout_info = document.createElement("p");
    
            let fallout_img = document.createElement("img");
            
            oneDayBlock.className = "oneDayBlock";
            topInfo.className = "topInfo";
            day.className = "day";
            time.className = "time";
            bottomInfo.className = "bottomInfo";
            degrees.className = "degrees";
            fallout.className = "fallout";
    
            city_name.textContent = data.city;
            day.textContent = new Date(data.data_collection[i].dt * 1000).getDate() + " " + " " + new Date(data.data_collection[i].dt * 1000).toLocaleString('en-us', { month: 'long' });
            time.textContent = new Date(data.data_collection[i].dt * 1000).getHours() + ":" + new Date(data.data_collection[i].dt * 1000).getMinutes()+0;
    
            main_temperature.textContent = `Temperature: ${Math.round(data.data_collection[i].main.temp)}°`;
            feels_like.textContent =`Feels like: ${Math.round(data.data_collection[i].main.feels_like)}°`;
            fallout_info.textContent = data.data_collection[i].weather[0].main;
            fallout_img.setAttribute("src", `http://openweathermap.org/img/wn/${data.data_collection[i].weather[0].icon}.png`);
    
            topInfo.append(day);
            topInfo.append(time);
    
            bottomInfo.append(degrees);
            bottomInfo.append(fallout);
    
            degrees.append(main_temperature);
            degrees.append(feels_like);
    
            fallout.append(fallout_info);
            fallout.append(fallout_img);
    
            oneDayBlock.append(topInfo);
            oneDayBlock.append(bottomInfo);

            this.FORECAST.append(oneDayBlock);
        }
    }, 

};


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
