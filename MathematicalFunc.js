  // Functionality ~Clear Button
  function ClearButton() {
      currExp = "";
      result = "";
      backendExp = "";
      ShowRes();
      DisplayExp();
      resultDisplayed = false;
    }
  
  // Functionality ~Backspace
  function BackSpace() {
    result = result.slice(0, -1);
    ShowRes();
  }
  
  // Functionality ~Square
  function Square() {
    if(resultDisplayed){
      currExp = `sqr(${currExp})`;
    }else{
      currExp += `sqr(${result})`;
    }
    result = Math.pow(inputField.value, 2);
    backendExp = result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  
  // Functionality ~Cube
  function Cube() {
    if(resultDisplayed){
      currExp = `cube(${currExp})`;
    }else{
      currExp += `cube(${result})`;
    }
    result = Math.pow(inputField.value, 3);
    backendExp += result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }

  // Functionality ~XPowY
  function XPowY() {
    currExp += `${result}^`;
    backendExp += `${result}^`;  
    result = "";
    ShowRes();
    DisplayExp();
  }

  // Functionality ~10PowX
  function _10PowX() {
    if(resultDisplayed){
      currExp = `10^(${currExp})`;
    }else{
      currExp += `10^(${result})`;
    }
    result = Math.pow(10, result);
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }

  // Functionality ~Equal
  function Equal() {
    if (currExp != 0) {
      if (currExp[currExp.length - 1] == ")") {
        currExp += "=";
        backendExp += "=";
      } else {
        currExp += result + "=";
        backendExp += result + "=";
      }
      resultDisplayed = true;
    }
    // history = previousInput.innerText;
    result = evaluate(backendExp);
    console.log(backendExp);
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }

  // Functionality ~YRootX
  function Handle_YRootX() {
    currExp += `${inputField.value}yroot`;
    backendExp += `${inputField.value}yroot`;
    DisplayExp();
    resultDisplayed = true;
  }

   // Functionality ~cubeRoot
  function cubeRoot() {
    if(resultDisplayed){
      currExp = `cuberoot(${currExp})`;
    } else {
      currExp += `cuberoot(${result})`;
    }
    result = Math.cbrt(inputField.value);
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }

  // Functionality ~2PowX
  function _2PowX() {
    if(resultDisplayed){
      currExp = `2^(${currExp})`;
    } else {
      currExp += `2^(${result})`;
    }
    result = Math.pow(2, result);
    backendExp += result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }

  // Functionality ~1/x
  function Reciprocal() {
    if(resultDisplayed){
      currExp = `1/(${currExp})`;
    } else {
      currExp += `1/(${result})`;
    }
    result = evaluate(currExp);
    backendExp += result; //backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~logYPowX
  function logYPowX() {
    currExp += `${result} log base`;
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~ePowX
  function ePowX() {
    if(resultDisplayed){
      currExp = `e^(${currExp})`;
    } else {
      currExp += `e^(${result})`;
    }
    result = Math.pow(Math.E, result);
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~log
  function Handle_log() {
    if(resultDisplayed){
      currExp = `log(${currExp})`;
    } else {
      currExp += `log(${result})`;
    }
    result = Math.log10(parseFloat(result));
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~ln
  function ln() {
    if(resultDisplayed){
      currExp = `ln(${currExp})`;
    } else {
      currExp += `ln(${result})`;
    }
    result = Math.log(parseFloat(result));
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~exp
  function Handle_exp() {
    inputField.value = parseFloat(result).toExponential();
  
  }
  // Functionality ~mod
  function Mod() {
  
    currExp += `${result}mod`;
    backendExp += `${result}^`;  // backendExp
    
    result = "";
    ShowRes();
    DisplayExp();
  }
  
   // Functionality ~Brackets
   function Brackets(isOpeningBracket) {
    if (isOpeningBracket) {
      if (!resultDisplayed) {
        currExp += result + "(";
        backendExp += result + "*(";
      } else {
        currExp += "(";
        backendExp += "(";
      }
    } else {
      currExp += result + ")";
      backendExp += result + ")";
    }
  
    result = "";
    ShowRes();
    DisplayExp();
  }
  
  // Functionality ~Negate
  function Negate() {
    currExp='-'+currExp;
    backendExp='-'+backendExp;
    DisplayExp();
  }

  // Functionality ~decimal
  function decimal() {
    if (result.length == 0) {
      result = "0.";
    } else {
      result += ".";
    }
    resultDisplayed=false;
    ShowRes();
  }

  // Functionality ~Abs
  function Abs() {
    if(resultDisplayed){
      currExp = `abs(${currExp})`;
    } else {
      currExp += `abs(${result})`;
    }
    result = Math.abs(result);
    backendExp += result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  
  // Functionality ~Sqrt
  function Sqrt() {
    if(resultDisplayed){
      currExp = `SqrRoot(${currExp})`;
    } else {
      currExp += `SqrRoot(${result})`;
    }
    result = Math.sqrt(result);
    backendExp += result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  
  
  // Functionality ~Floor
  function Floor() {
    if(resultDisplayed){
      currExp = `floor(${currExp})`;
    } else {
      currExp += `floor(${result})`;
    }
    result = Math.floor(result);
    backendExp += result; 
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~Ceil
  function Ceil() {
    if(resultDisplayed){
      currExp = `ceil(${currExp})`;
    } else {
      currExp += `ceil(${result})`;
    }
    result = Math.ceil(result);
    backendExp += result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
  }
  // Functionality ~Rand
  function Rand() {
    result = Math.random();
    ShowRes();
    resultDisplayed = true;
  }

  // Functionality ~DMS
  function DMS() {
    if(resultDisplayed){
      currExp = `dms(${currExp})`;
    } else {
      currExp += `dms(${result})`;
    }
      var degrees = Math.floor(parseFloat(result));
      var minutesNotTruncated = (result - degrees) * 60;
      var minutes = Math.floor(minutesNotTruncated);
      var seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
      result = degrees + "." + minutes + "." + seconds;
      //backendExp += result; // backendExp
      ShowRes();
      DisplayExp();
      resultDisplayed = true;
  }
  // Functionality ~Deg
  function Deg() {
    
  }

//Functionality ~Pi
function Pi() {
    result = Math.PI;
    resultDisplayed = true;
    ShowRes();
  }

  //// Functionality ~e
function e() {
    result = Math.E;
    resultDisplayed = true;
    ShowRes();
  }
  