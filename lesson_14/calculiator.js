// Сбор данных
function getData() { 
    let first = +prompt("First Number", ""); 
    let second = +prompt("Second Number", ""); 
    let action = prompt("Action:\n One of this - sum, minus, multi, divide", "").toLocaleLowerCase(); 
 
    checkData(first, second, action); 
} 
 
// Проверка данных
function checkData(first, second, action) { 
  if(!action || isNaN(first) || isNaN(second)) { 
    return alert("Error"); 
  } 
 
  if(!["minus", "sum", "multi", "divide"].includes(action)){ 
    return alert("unknown operation"); 
  } 
   
  computation(first, second, action);  
} 
 
// Вычисление
function computation(first, second, action) { 
  switch(action){ 
    case "sum": return first + second; 
    case "minus": return first - second; 
    case "multi": return first * second; 
    case "divide": return first / second; 
  } 
} 
 
getData();