// let styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// let length = Math.floor(styles.length/2);
// styles[length] = "Классика";

// styles.shift(0);

// styles.unshift("Рэп", "Регги");

function sumInput() {
    let numbers = [];
    let result = 0;

    while (true) {

        let num = prompt("Number", 0);

        if (num === '' || num === null || !isFinite(num)) break;

        numbers.push(+num);

    }

    for (let num = 0; num < numbers.length; num++) {
        result += numbers[num];
    }

    return result;
};

// sumInput();




function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));