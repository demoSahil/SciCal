// Functionality ~Trignometry
function CalTrigno(operation) {
    let result;
    let value = inputField.value;
    switch (operation) {
      case "sin": {
        if(resultDisplayed){
          currExp = `sin(${currExp})`;
        }else{
          currExp += `sin(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.sin(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.sin(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.sin(value);
        }
        break;
      }
      case "cos": {
        if(resultDisplayed){
          currExp = `cos(${currExp})`;
        }else{
          currExp += `cos(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.cos(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.cos(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.cos(value);
        }
        break;
      }
      case "tan": {
        if(resultDisplayed){
          currExp = `tan(${currExp})`;
        }else{
          currExp += `tan(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.tan(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.tan(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.tan(value);
        }
        break;
      }
      case "sec": {
        if(resultDisplayed){
          currExp = `sec(${currExp})`;
        }else{
          currExp += `sec(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.cos(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.cos(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.cos(value);
        }
        break;
      }
      case "csc": {
        if(resultDisplayed){
          currExp = `csc(${currExp})`;
        }else{
          currExp += `csc(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.sin(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.sin(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.sin(value);
        }
        break;
      }
      case "cot": {
        if(resultDisplayed){
          currExp = `cot(${currExp})`;
        }else{
          currExp += `cot(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.tan(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.tan(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.tan(value);
        }
        break;
      }
      case "sin-1": {
        if(resultDisplayed){
          currExp = `Sin^-1(${currExp})`;
        }else{
          currExp += `Sin^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.asin(value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.asin(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.asin(value);
        }
        break;
      }
      case "cos-1": {
        if(resultDisplayed){
          currExp = `Cos^-1(${currExp})`;
        }else{
          currExp += `Cos^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.acos(value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.acos(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.acos(value);
        }
        break;
      }
      case "tan-1": {
        if(resultDisplayed){
          currExp = `Tan^-1(${currExp})`;
        }else{
          currExp += `Tan^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.atan(value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.atan(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.atan(value);
        }
        break;
      }
      case "sec-1": {
        if(resultDisplayed){
          currExp = `Sec^-1(${currExp})`;
        }else{
          currExp += `Sec^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.acos(1 / value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.acos(1 / value));
        } else if (angleUnit_current == "RAD") {
          result = Math.acos(1 / value);
        }
        break;
      }
      case "csc-1": {
        if(resultDisplayed){
          currExp = `Csc^-1(${currExp})`;
        }else{
          currExp += `Csc^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.asin(1 / value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.asin(1 / value));
        } else if (angleUnit_current == "RAD") {
          result = Math.asin(1 / value);
        }
        break;
      }
      case "cot-1": {
        if(resultDisplayed){
          currExp = `Cot^-1(${currExp})`;
        }else{
          currExp += `Cot^-1(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = radiansToDegrees(Math.atan(1 / value));
        } else if (angleUnit_current == "GRAD") {
          result = radiansToGrads(Math.atan(1 / value));
        } else if (angleUnit_current == "RAD") {
          result = Math.atan(1 / value);
        }
        break;
      }
      case "sinh": {
        if(resultDisplayed){
          currExp = `sinh(${currExp})`;
        } else {
          currExp += `sinh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.sinh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.sinh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.sinh(value);
        }
        break;
      }
      case "cosh": {
        if(resultDisplayed){
          currExp = `cosh(${currExp})`;
        } else {
          currExp += `cosh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.cosh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.cosh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.cosh(value);
        }
        break;
      }
      case "tanh": {
        if(resultDisplayed){
          currExp = `tanh(${currExp})`;
        } else {
          currExp += `tanh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.tanh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.tanh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.tanh(value);
        }
        break;
      }
      case "sech": {
        if(resultDisplayed){
          currExp = `sech(${currExp})`;
        } else {
          currExp += `sech(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.cosh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.cosh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.cosh(value);
        }
        break;
      }
      case "csch": {
        if(resultDisplayed){
          currExp = `csch(${currExp})`;
        } else {
          currExp += `csch(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.sinh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.sinh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.sinh(value);
        }
        break;
      }
      case "coth": {
        if(resultDisplayed){
          currExp = `coth(${currExp})`;
        } else {
          currExp += `coth(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = 1 / Math.tanh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = 1 / Math.tanh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = 1 / Math.tanh(value);
        }
        break;
      }
      case "sinh-1": {
        if(resultDisplayed){
          currExp = `asinh(${currExp})`;
        } else {
          currExp += `asinh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.asinh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.asinh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.asinh(value);
        }
        break;
      }
      case "cosh-1": {
        if(resultDisplayed){
          currExp = `acosh(${currExp})`;
        } else {
          currExp += `acosh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.acosh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.acosh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.acosh(value);
        }
        break;
      }
      case "tanh-1": {
        if(resultDisplayed){
          currExp = `atanh(${currExp})`;
        } else {
          currExp += `atanh(${value})`;
        }
        if (angleUnit_current == "DEG") {
          result = Math.atanh(degreesToRadians(value));
        } else if (angleUnit_current == "GRAD") {
          result = Math.atanh(gradsToRadians(value));
        } else if (angleUnit_current == "RAD") {
          result = Math.atanh(value);
        }
        break;
      }
      case "sech-1": {
        if(resultDisplayed){
          currExp = `asech(${currExp})`;
        } else {
          currExp += `asech(${value})`;
        }
        const x = value;
        const sechValue = 1 / Math.cosh(x);
        
        if (angleUnit_current == "DEG") {
          result = Math.acosh(1 / sechValue) * (180 / Math.PI);
        } else if (angleUnit_current == "GRAD") {
          result = Math.acosh(1 / sechValue) * (200 / Math.PI);
        } else if (angleUnit_current == "RAD") {
          result = Math.acosh(1 / sechValue);
        }
        break;
      }
      case "csch-1": {
        if(resultDisplayed){
          currExp = `acsch(${currExp})`;
        } else {
          currExp += `acsch(${value})`;
        }      
        const x = value;
        const cschValue = 1 / Math.sinh(x);
        
        if (cschValue === 0) {
          result = NaN;
        } else {
          result = Math.log(1 / cschValue + Math.sqrt(1 / (cschValue * cschValue) + 1));
        }
      
        if (angleUnit_current == "DEG") {
          result = result * (180 / Math.PI);
        } else if (angleUnit_current == "GRAD") {
          result = result * (200 / Math.PI);
        } else if (angleUnit_current == "RAD") {
          // result is already in radians, no need for conversion
        }
        break;
      }
      case "coth-1": {
        if(resultDisplayed){
          currExp = `acoth(${currExp})`;
        } else {
          currExp += `acoth(${value})`;
        }
        const x = value;
        
        if (Math.abs(x) === 1) {
          // Handling error condition when x equals 1 or -1
          result = NaN;
        } else {
          result = 0.5 * Math.log((x + 1) / (x - 1));
        }
      
        if (angleUnit_current == "DEG") {
          result = result * (180 / Math.PI);
        } else if (angleUnit_current == "GRAD") {
          result = result * (200 / Math.PI);
        } else if (angleUnit_current == "RAD") {
          // result is already in radians, no need for conversion
        }
        break;
      }
    }
    result = result;
    backendExp+= result; // backendExp
    ShowRes();
    DisplayExp();
    resultDisplayed = true;
    document.querySelector("#DropDownTrigno").style.display = "none";
  }

  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  function gradsToRadians(grads) {
    return grads * (Math.PI / 200);
  }
  function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }
  
  