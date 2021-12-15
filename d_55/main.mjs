import data from './data.json';

let dataInString = JSON.stringify(data);

let dataInObject = JSON.parse(dataInString);

// console.log(typeof dataInObject);

console.log(dataInObject.users[1]);

// for(let i = 0; i < dataInObject.users.length; i++) {
//     console.log(dataInObject.users[i].firstName);
// }

// for(let i = 0; i < dataInObject.users.length; i++) {
//     console.log(dataInObject.users[i].knowsAs);
// }

for(let i = 0; i < dataInObject.users.length; i++) {
    console.log(` ${dataInObject.users[i].firstName}, born at ${dataInObject.users[i].dateOfBirth}, ${dataInObject.users[i].knowsAs}`);
}

// Dennis, born at September 9, 1941 - created the C programming language