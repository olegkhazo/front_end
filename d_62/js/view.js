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
