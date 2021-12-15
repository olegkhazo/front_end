let message;
let login = 'Директор';

message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') 
                                 ? 'Здравствуйте' : (login == '')
                                 ? 'Нет логина' : '';

