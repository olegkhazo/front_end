for (let i = 2; i <= 10; i++) {
    if (i % 2) continue;
    alert(i);
}


let number;
do {
    number = +prompt("Number more than 100", "");
} while (number && number < 100);



function findSimpleNumber(simplyCount) { 
    let collection = []; 
       
    for (let number = 2; number <= simplyCount; number++) { 
      let isSimply = true;
      collection.forEach(simply => { 
        if(number % simply === 0){ 
          isSimply = false; 
        } 
      }) 
   
      if(isSimply){ 
        collection.push(number) 
      } 
    } 
   
    return collection; 
  } 
   
  findSimpleNumber(10);

// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.