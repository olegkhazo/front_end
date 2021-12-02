let numbers = document.getElementsByClassName("num");
let operands = document.getElementsByClassName("operand");
let deleteOne = document.getElementById("deleteOne");
let deleteAll = document.getElementById("deleteAll");
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

   

    result.innerHTML += event.target.innerHTML;
}

function lastElem() {
    let lastElem = result.innerHTML.length - 1;
    return lastElem;
}

function addOperands(event) {
    if (result.length === maxLength[0]) {
        result.style.fontSize = "35px";
    }

    if (result.innerHTML.length === maxLength[1]) {
        return;
    }

    if (event.target.innerHTML === "=") {
        return getOperatorsNumbers();
    }

    if (isNaN(+(result.innerHTML[lastElem()]))) {
        result.innerHTML = result.innerHTML.slice(0, lastElem());
    }

    result.innerHTML += event.target.innerHTML;
}


deleteOne.onclick = function () {
    if (result.innerHTML.length <= maxLength[0]) {
        result.style.fontSize = "96px";
    }
    result.innerHTML = result.innerHTML.slice(0, lastElem());
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
    }
}
