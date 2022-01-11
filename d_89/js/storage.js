// import { UI_ELEMENTS } from "./view.js";

export function getCurrentCity(city) {
    localStorage.setItem("current", city);
}

export function saveFavoriteCities(city) {
    
    localStorage.setItem(city, city);

}

export function getFavoriteCities() {
    const favorite = new Set();
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key === "current") continue;
        favorite.add(`${localStorage.getItem(key)}`);
    }

    return favorite;
}
