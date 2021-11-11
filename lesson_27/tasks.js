function sum(a, b) {
    return a + b;
}

a = +prompt("Первое", "");
b = +prompt("Второе", "");

// sum(a, b);


function readNumber() {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Число: ${readNumber()}`);
