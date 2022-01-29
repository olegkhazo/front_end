export const UI_ELEMENTS = {
    INPUT: document.querySelector(".current__date"),
    BUTTON: document.querySelector(".button"),
    RESULT: document.querySelector(".result__text"),
};

export function creatingHandlers(element, action, func) {
    element.addEventListener(action, func);
}



