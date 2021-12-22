import { UI_ELEMENTS } from "./view.js";

// storage.saveFavoriteCities(favoriteCities);

// const favoriteCities = storage.getFavoriteCities();

// const currentCity = storage.getCurrentCity();

export function getCurrentCity(city) {
    localStorage.setItem("current", city);
}

export function saveFavoriteCities(city) {
    
    localStorage.setItem(city, city);

}

export function getFavoriteCities() {
    const favorite = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "current") continue;
        favorite.push(`${localStorage.getItem(key)}`);
    }

    return favorite;
    // console.log(favorite);
}
