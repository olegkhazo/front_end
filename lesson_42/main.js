const numbers = document.getElementsByClassName("num");
const operands = document.getElementsByClassName("operand");
const deleteOne = document.getElementById("deleteOne");
const deleteAll = document.getElementById("deleteAll");
let result = document.getElementById("result");

const maxLength = [6, 10];



function creatingHandlers(elements, func) {
    for (elem of elements) {
        elem.addEventListener("click", func)
    }
}

creatingHandlers(numbers, addNumbers);
creatingHandlers(operands, addOperands);



function addNumbers(event) {
    if (result.innerHTML.length === maxLength[0]) {
        result.style.fontSize = "45px";
    }

    if (result.innerHTML.length === maxLength[1]) {
        return;
    }

    // if (result.innerHTML.length === 1 && result.innerHTML === 0) {
    //     alert("0 уже введён");
    // }
    result.innerHTML += event.target.innerHTML;
}

function addOperands(event) {
    let lastElem = result.innerHTML.length - 1;

    if (result.length === maxLength[0]) {
        result.style.fontSize = "35px";
        alert("dsd");
    }

    if (result.innerHTML.length === maxLength[1]) {
        return;
    }

    if (event.target.innerHTML === "=") {
        return getOperatorsNumbers();  //вызовется функция расчёта
    }

    if (isNaN(+(result.innerHTML[lastElem]))) {
        result.innerHTML = result.innerHTML.slice(0, lastElem);
    }

    result.innerHTML += event.target.innerHTML;
}


deleteOne.onclick = function () {
    if (result.innerHTML.length <= maxLength[0]) {
        result.style.fontSize = "96px";
    }
    let lastElem = result.innerHTML.length - 1;
    result.innerHTML = result.innerHTML.slice(0, lastElem);
};

deleteAll.onclick = function () {
    result.innerHTML = "";

    if (result.innerHTML.length <= maxLength[0]) {
        result.style.fontSize = "96px";
    }
};



function getOperatorsNumbers() {
    let expresion = result.innerText;
    let first = '';
    let current = '';
    let operation = '';
    let char = '';

    for (let i = 0; i < expresion.length; i++) {
        char = expresion[i];

        if (['+', '-', '*', '/', '÷', '×'].includes(char)) {
            if (current) {
                if (first) {
                    first = calc(operation, first, current)
                } else {
                    first = current;
                }
                current = '';
                operation = char;
            } else {
                operation = char;
            }
        } else {
            if (current) {
                current = current.concat(char);
            } else {
                current = char.toString();
            }
        }

    }

    let res = (current) ? calc(operation, first, current) : NaN;
    // console.log('result', res);
    result.innerHTML = res;
}

function calc(sign, first, second) {
    let a = +first
    let b = +second
    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '÷':
        case '/': return a / b;
        case '×':
        case '*': return a * b;
        // default: console.log('Break');
    }
}
