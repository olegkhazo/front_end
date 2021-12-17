export const UI_ELEMENTS = {
    BUTTONS: document.querySelectorAll(".tab__item"),
    BLOCKS: document.querySelectorAll(".tabs__block"),
    FORM: document.querySelector(".form"),
    INPUT: document.querySelector(".input"),

    TEMPERETURE: document.querySelector(".tempereture"),
    CURRENT_CITY: document.querySelector(".currentCity"),
    WEATHER_ICON: document.querySelector(".precipitation")
};


UI_ELEMENTS.BUTTONS.forEach(element => {
    element.addEventListener("click", function() {
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
