function printNumbers(from, to) {
   let current = from;

   let timerId = setInterval(function () {
       alert(current);
       if( current == to ) {
           clearInterval(timerId);
       }
       current++;
   }, 1000);
}

// printNumbers(2, 10);

function pNumbers(from, to) {
   let current = from;

    let timerId = setTimeout(function doStep() {
        alert(current);
        if (current < to) {
            setTimeout(doStep, 1000);  
        }
        current++;
    }, 1000);
}

// pNumbers(2, 6);


function printNum(from, to) {

    console.log("Выполнится один раз");

    function step () {
        console.log("Это вызывается по таймеру");

        console.log(from);
        from++;
        if (from > to) {
            clearInterval(go);
        }
    } 

    console.log("Это тоже выполнится один раз");

    let go = setInterval(step, 500);
}

console.log('Начало программы');

// printNum(2, 6);