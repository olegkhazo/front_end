function camelize(str) {
    let newStr = str.split('-');
    newStr = newStr.map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) ).join('');

    
    return console.log(newStr);
};

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

function filterRange(arr, a, b) {
    return arr.filter(item => ( a <= item && item <= b ));
};

let s = [2, 5, 6, 6, 4, 19];


let arrSort = [2, -5, 4, 54, -55, 3, 1];

arrSort.sort((a, b) => b - a);



function copyStored(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

