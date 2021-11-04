 calc = {
    availableActions: ["minus", "sum", "multi", "divide"],
    result: '',

    startOperation(action, firstNumber, secondNumber) {
        if (!action || isNaN(firstNumber) || isNaN(secondNumber)) {
            return console.log("You must input operation");
        }

        if (!this.availableActions.includes(action)) {
            return console.log("Unknown operation");
        }

        this.result = this.computation(action, firstNumber, secondNumber);
        // console.log(this.result);
    },

    computation(action, firstNumber, secondNumber) {
        switch(action.toLocaleLowerCase()) {
            case "minus": return firstNumber - secondNumber;
            case "sum": return firstNumber + secondNumber;
            case "multi": return firstNumber * secondNumber;
            case "divide": return firstNumber / secondNumber;
        }
    },
};

calc.startOperation("sum", 7, 8);
console.log(calc.result);