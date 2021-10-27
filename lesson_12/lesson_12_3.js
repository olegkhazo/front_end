let user = prompt('Кто там', '');

if (user == 'Админ') {
    let pass = prompt('Password?', '');

    if (pass == 'Я главный') {
        alert('Здравствуйте');
    } else if (pass == '' || pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (user == '' || user == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
