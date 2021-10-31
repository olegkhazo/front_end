// Забор данных
function getData() { 
  let first = +prompt("First Number", ""); 
  let second = +prompt("Second Number", ""); 
  let action = prompt("Action:\n One of this - sum, minus, multi, divide", ""); 

  checkData(first, second, action); 
} 

// Проверка
function checkData(first, second, action) { 
if(!action || isNaN(first) || isNaN(second)) { 
  return alert("You  must imput operands"); 
} 

if(!["minus", "sum", "multi", "divide"].includes(action)){ 
  return alert("unknown operation"); 
} 
 
let res = computation(first, second, action); 
alert(res) 
} 

// Вычисление
function computation(first, second, action) { 
switch(action.toLocaleLowerCase()){ 
  case "sum": return first + second; 
  case "minus": return first - second; 
  case "multi": return first * second; 
  case "divide": return first / second; 
} 
} 

getData();