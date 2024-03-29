


// Functionality ~BasicArithmeticOperation
function BasicArithmeticOperation(operation) {
    switch (operation) {
      case "+": {
        if (currExp.length == 0) {
          if (result.length == 0) {
            currExp = "0+";
            backendExp = "0+";
          } else {
            currExp = result + "+";
            backendExp = result + "+";
          }
        } else {
          if (
            IsArithmeticOperatorInLast(
              currExp[currExp.length - 1]
            )
          ) {
              if(digitHandled){
                currExp = currExp.slice(0, -1) + "+";
                backendExp = backendExp.slice(0, -1) + "+";
              }else{
                currExp += result+ "+";
                backendExp += result+ "+";
              }
          } else {
            if (resultDisplayed) {
              if (currExp[currExp.length - 1] == "=") {
                currExp = result + "+";
                backendExp = result + "+";
              } else {
                currExp += `+`;
                backendExp += `+`;
              }
            } else {
              currExp += result + `+`;
              backendExp += result + `+`;
            }
          }
        }
        break;
      }
      case "-": {
        if (currExp.length == 0) {
          if (result.length == 0) {
            currExp = "0-";
            backendExp = "0-";
          } else {
            currExp = result + "-";
            backendExp = result + "-";
          }
        } else {
          if (
            IsArithmeticOperatorInLast(
              currExp[currExp.length - 1]
            )
          ) {
            if(digitHandled){
              currExp = currExp.slice(0, -1) + "-";
              backendExp = backendExp.slice(0, -1) + "-";
            }else{
              currExp += result+ "-";
              backendExp += result+ "-";
            }
          } else {
            if (resultDisplayed) {
              if (currExp[currExp.length - 1] == "=") {
                currExp = result + "-";
                backendExp = backendExp + "-";
              } else {
                currExp += `-`;
                backendExp += `-`;
              }
            } else {
              currExp += result + `-`;
              backendExp += result + `-`;
            }
          }
        }
        break;
      }
      case "*": {
        if (currExp.length == 0) {
          if (result.length == 0) {
            currExp = "0*";
            backendExp = "0*";
          } else {
            currExp = result + "*";
            backendExp = result + "*";
          }
        } else {
          if (
            IsArithmeticOperatorInLast(
              currExp[currExp.length - 1]
            )
          ) {
            if(digitHandled){
              currExp = currExp.slice(0, -1) + "*";
              backendExp = backendExp.slice(0, -1) + "*";
            }else{
              currExp += result+ "*";
              backendExp += result+ "*";
            }
          } else {
            if (resultDisplayed) {
              if (currExp[currExp.length - 1] == "=") {
                currExp = result + "*";
                backendExp = result + "*";
              } else {
                currExp += `*`;
                backendExp += `*`;
              }
            } else {
              currExp += result + `*`;
              backendExp += result + `*`;
            }
          }
        }
        break;
      }
      case "/": {
        if (currExp.length == 0) {
          if (result.length == 0) {
            currExp = "0/";
            backendExp = "0/";
          } else {
            currExp = result + "/";
            backendExp = result + "/";
          }
        } else {
          if (
            IsArithmeticOperatorInLast(
              currExp[currExp.length - 1]
            )
          ) {
            if(digitHandled){
              currExp = currExp.slice(0, -1) + "/";
              backendExp = backendExp.slice(0, -1) + "/";
            }else{
              currExp += result+ "/";
              backendExp += result+ "/";
            }
          } else {
            if (resultDisplayed) {
              if (currExp[currExp.length - 1] == "=") {
                currExp = result + "/";
                backendExp = result + "/";
              } else {
                currExp += `/`;
                backendExp += `/`;
              }
            } else {
              currExp += result + `/`;
              backendExp += result + `/`;
            }
          }
        }
        break;
      }
    }
    digitHandled = true;
    DisplayExp();
    result = "";
  }
  function IsArithmeticOperatorInLast(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
      return true;
    }
    return false;
  }

  // Functionality  ~Fact
  function Fact(n) {
    if (!Number.isInteger(n) || n < 0) {
      return "invalid";
    }
    if (n === 0) {
      return 1;
    }
   
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  