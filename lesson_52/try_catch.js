const calc = {
    availableActions: ["minus", "sum", "multi", "divide"],
    result: '',

    startOperation(action, firstNumber, secondNumber) {
        if (!action || isNaN(firstNumber) || isNaN(secondNumber)) {
            return console.log("You must input operands");
        }

        try {
            if (!this.availableActions.includes(action)) throw new SyntaxError("Unknown operation");
            this.result = this.computation(action, firstNumber, secondNumber);
        } catch (e) {
            console.log(e.message);
        }

    },

    computation(action, firstNumber, secondNumber) {
        switch (action.toLocaleLowerCase()) {
            case "minus": return firstNumber - secondNumber;
            case "sum": return firstNumber + secondNumber;
            case "multi": return firstNumber * secondNumber;
            case "divide": return firstNumber / secondNumber;
        }
    },
};

calc.startOperation("sm", 7, 8);
console.log(calc.result);