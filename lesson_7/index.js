let regForEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let body = document.body;

// Функция запрашивающая и записывающая данные пациента в массив
function appointment() {
    let name, age, gender, email;

    // Получаем имя с простой проверкой
    do {
        name = prompt("Ваше имя: \nНе более 20 символов и не меньше 2");
    } while (name.length < 2 || name.length > 20);
    
    // Получаем возраст 
    do {
        age = +prompt("Ваш возраст (только цифры): \nМы обслуживаем клиентов от 18 до 100");
    } while (age < 18 || age > 100);
    
    // Получаем пол 
    do {
        gender = prompt("Ваш пол:");
    } while (gender.length == 0 || gender.length > 10);
    
    // Получаем email 
    do {
        email = prompt("Введите ваш имейл: \nНапример info@gmail.com");
    } while (!regForEmail.test(email));

    let clientsData = [];

    // Записываем все данные клиента в массив
    clientsData.push(name, age, gender, email);

    // Заполняем модальное окно на месте
    let modal = document.getElementById("modal");
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "Закрыть";
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    let ul = document.createElement("ul");
    modal.append(ul);

    // Все записи которые сделал человек
    for(let i = 0; i <= clientsData.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = clientsData[i];
        ul.append(li); 
    }         
    modal.append(closeButton);

    showAppointmentInfo(clientsData);

}

// Функция для отображения кнопки показывающей данные
function showAppointmentInfo(data) {
    let showButton = document.getElementById('showButton');
    if(data.length == 4) {
        showButton.style.display = "inline-block";
    }
}

// Функция показывающая и заполняющая модальное окно данными
function showModalWindow() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
} 
