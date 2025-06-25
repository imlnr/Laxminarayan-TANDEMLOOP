class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        switch (this.operation) {
            case "add":
                return this.a + this.b;
            case "substract":
                return this.a - this.b;
            case "multiply":
                return this.a * this.b;
            case "divide":
                if (this.b === 0) {
                    return "Error: Division by zero";
                }
                return this.a / this.b;
            default:
                return "Operation is not Allowed."
        }
    }
}

const calculate1 = new Calculator(6, 2, "add").calculate()
console.log("add", calculate1)

const calculate2 = new Calculator(6, 2, "substract").calculate()
console.log("substract", calculate2)

const calculate3 = new Calculator(6, 2, "multiply").calculate()
console.log("multiply", calculate3)

const calculate4 = new Calculator(6, 2, "divide").calculate()
console.log("divide", calculate4)
