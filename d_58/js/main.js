const ELEMENTS = {
    form: document.querySelector('form'),
    name: document.getElementById('name'),
    country: document.getElementById('country'),
    resultGender: document.getElementById('resultGender'),
    resultCountry: document.getElementById('resultCountry'),
    btn: document.getElementById('btn'),
};

const URL = {
    names: 'https://api.genderize.io',
    countries: 'https://api.nationalize.io/'
}

ELEMENTS.form.addEventListener('submit', function () {
    const firstName = ELEMENTS.name.value;
    const genderRequest = `${URL.names}?name=${firstName}`;
    const countryRequest = `${URL.countries}?name=${firstName}`;

    fetch(genderRequest)
        .then(response => response.json())
        .then(answer => ELEMENTS.resultGender.textContent = `${answer.name} is ${answer.gender}`);

    fetch(countryRequest)
        .then(response => response.json())
        .then(answer => {
            ELEMENTS.resultCountry.textContent = `${answer.name} is from`;
            let countries = answer.country.map(item => item.country_id);
            countries.forEach(country => {
                ELEMENTS.resultCountry.textContent += `${country} or `;
            });
            ELEMENTS.resultCountry.textContent = ELEMENTS.resultCountry.textContent.slice(0, -4);
        });

    ELEMENTS.form.reset();
});






// Напишите программу, которая передает на сервер имя и в ответ получает "возможный" пол для этого имени. 

// Вот вам готовая строка с URL (только имя успевайте менять)

// const firstName = 'artem';
// const serverUrl = 'https://api.genderize.io';
// const url = `${serverUrl}?name=${firstName}`;

// Сделайте самый простой интерфейс для этой программы 

// например input (в него введете имя) 
// и кнопку рядом (она будет отправлять это имя на сервер) 
// в alert или в строке ниже показывайте результат вот такого вида
// "Artem is male"

// p.s. помните fetch не работает в nodeJS, а значит вам нужно запускать это в браузере

// Если вам совсем скучно - сделайте 2 запроса.
// Один будет угадывать пол, а другой страну.
// Вот url сервера который по имени отдает массив стран

// 'https://api.nationalize.io'