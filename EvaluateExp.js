
  // Functionality ~Precedence
  function precedence(operate) {
      if (operate === "+" || operate === "-") return 1;
      else if (operate === "*" || operate === "/") return 2;
      else if (operate === "^") return 3;
      return 0;
    }
  
  // Functionality ~isOperand
  function isOperand(x) {
    return x >= "0" && x <= "9";
  }
  
  // Functionality ~isOperator
  function isOperator(x) {
    return x === "+" || x === "-" || x === "*" || x === "/" || x === "^";
  }
  
  // Functionality ~PerformOperation
  function performOperation(a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          console.log("Cannot divide by zero");
          return 0;
        } else {
          return a / b;
        }
      case "^":
        return Math.pow(a, b);
      default:
        console.log("Invalid operator");
        return 0;
    }
  }
  
  // Functionality ~Eval
  function evaluate(backendExp) {
    let length = backendExp.length;
    let result = 0;
    let values = new Array(length);
    let resultIndex = 0;
    let operators = new Array(length);
    let operatorIndex = 0;
    let firstOperator = " ";
    let firstOperatorCome = false;
    let index = 0;
  
    while (index < length) {
      if (isOperand(backendExp[index])) {
        let thisNumber = 0;
        let decimalPointEncountered = false;
        let decimalMultiplier = 0.1;
  
        while (
          index < length &&
          (isOperand(backendExp[index]) ||
            (!decimalPointEncountered && backendExp[index] === "."))
        ) {
          if (backendExp[index] === ".") {
            decimalPointEncountered = true;
            index++;
            continue;
          }
  
          if (!decimalPointEncountered) {
            thisNumber =
              thisNumber * 10 +
              (backendExp[index].charCodeAt(0) - "0".charCodeAt(0));
          } else {
            thisNumber =
              thisNumber +
              (backendExp[index].charCodeAt(0) - "0".charCodeAt(0)) *
                decimalMultiplier;
            decimalMultiplier *= 0.1;
          }
  
          index++;
        }
  
        if (firstOperatorCome) {
          if (firstOperator === "-") {
            thisNumber = 0 - thisNumber;
            firstOperatorCome = false;
          }
        }
        values[resultIndex++] = thisNumber;
        index--;
      } else if (backendExp[index] === "(") {
        try {
          if (isOperand(backendExp[index - 1])) {
            operators[operatorIndex++] = "*";
          }
        } catch (ex) {
          console.log("Exception occurred:", ex.message);
        }
        operators[operatorIndex++] = "(";
      } else if (backendExp[index] === ")") {
        while (operatorIndex > 0 && operators[operatorIndex - 1] !== "(") {
          let number1 = values[--resultIndex];
          let number2 = values[--resultIndex];
          let op = operators[--operatorIndex];
  
          let resultTemp = performOperation(number2, number1, op);
  
          values[resultIndex++] = resultTemp;
        }
        operatorIndex--; // Pop '('
        if (
          index < backendExp.length - 1 &&
          (isOperand(backendExp[index + 1]) || backendExp[index + 1] === " ")
        ) {
          operators[operatorIndex++] = "*";
        }
      } else if (isOperator(backendExp[index])) {
        while (
          operatorIndex > 0 &&
          precedence(operators[operatorIndex - 1]) >=
            precedence(backendExp[index])
        ) {
          let number1 = values[--resultIndex];
          let number2 = values[--resultIndex];
          let op = operators[--operatorIndex];
  
          let resultTemp = performOperation(number2, number1, op);
          values[resultIndex++] = resultTemp;
        }
        if (
          index === 0 &&
          (backendExp[index] === "+" || backendExp[index] === "-")
        ) {
          firstOperator = backendExp[index];
          firstOperatorCome = true;
        } else {
          operators[operatorIndex++] = backendExp[index];
        }
      }
      index++;
    }
    while (operatorIndex > 0) {
      let number1 = values[--resultIndex];
      let number2 = values[--resultIndex];
      let op = operators[--operatorIndex];
      let resultTemp = performOperation(number2, number1, op);
      values[resultIndex++] = resultTemp;
    }
    result = values[0];
    return result;
  }
  