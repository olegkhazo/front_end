function sum(a) {

    return function sum(b) {
        return console.log(a + b);
    };
}



let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); 
// alert( arr.filter(inArray([1, 2, 10])) ); 

function inBetween(a, b) {
    return function (c) {
        return c >= a && b >= c
    };
}

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () {
            alert(j);
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();