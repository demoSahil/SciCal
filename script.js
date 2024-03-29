

// Event Listener ~ Scientific Notation
let sciNotationSelected = false;
var FE = document.getElementById("exponentialNotation");
FE.addEventListener("click", function () {
  this.classList.toggle("removeAfter");
  if (sciNotationSelected) {
    sciNotationSelected = false;
  } else {
    sciNotationSelected = true;
  }
});

//-------[MEMORY AND HISTORY]
const historyOrMem=["history","memory"]
let selectedHisOrMem ="history";
let history;
DisplayHistory();


// Event Listener ~ History
document.querySelector("#historyBtn").addEventListener("click", function () {
  selectedHisOrMem = historyOrMem[0];
  DisplayHistory();
});

// Event Listener ~ Memory
document.querySelector("#memoryBtn").addEventListener("click", function () {
  selectedHisOrMem = historyOrMem[1];
  DisplayMemory();
});

// Event Listener Trignometry DropDown
document
  .querySelector("#trigoFunctions")
  .addEventListener("click", function () {
    document.querySelector("#functionCollapse").style.display = "none";
    if (
      document.querySelector("#DropDownTrigno").style.display != "none"
    ) {
      document.querySelector("#DropDownTrigno").style.display = "none";
    } else {
      document.querySelector("#DropDownTrigno").style.display = "block";
    }
  });

  // Event Listener ~ Angle[Deg][Rad][Grad]

let angleUnit_current = "DEG";
const angleElement = document.querySelector(
  "#toggleButtons #degreeUnit"
);

angleElement.addEventListener("click", function () {
  if (angleElement.innerText == "DEG") {
    angleElement.innerText = "RAD";
    angleUnit_current = "RAD";
  } else if (angleElement.innerText == "RAD") {
    angleElement.innerText = "GRAD";
    angleUnit_current = "GRAD";
  } else if (angleElement.innerText == "GRAD") {
    angleElement.innerText = "DEG";
    angleUnit_current = "DEG";
  }
});

// Event Listener Toggle buttons [2nd][Hyp]
document.querySelector("#functions").addEventListener("click", function () {
  document.querySelector("#DropDownTrigno").style.display = "none";
  if (document.querySelector("#functionCollapse").style.display != "none") {
    document.querySelector("#functionCollapse").style.display = "none";
  } else {
    document.querySelector("#functionCollapse").style.display = "block";
  }
});


let elem = document.querySelectorAll('#functionCollapse div button');
for (let el of elem) {
  el.addEventListener('click',function(){
    document.querySelector("#functionCollapse").style.display = "none";
  })
}

// Event Listener [Trigno Methods]
let secondButtonClicked = false;
document.getElementById('secondTrigoMethods').addEventListener('click', function(){
  if(secondButtonClicked){
    secondButtonClicked = false;
    this.classList.remove("selected");
  }
  else{
    secondButtonClicked = true;
    this.classList.add("selected");
  }
  RedefineTrigoMethods();
})

let hypButtonClicked = false;
document.getElementById('hypTrigoMethods').addEventListener('click', function(){
  if(hypButtonClicked){
    hypButtonClicked = false;
    this.classList.remove("selected");
  }
  else{
    hypButtonClicked = true;
    this.classList.add("selected");
  }
  RedefineTrigoMethods();
})

function RedefineTrigoMethods(){
  let classToTarget = "trigo";
  if(secondButtonClicked){
    classToTarget+="1";
  }
  else{
    classToTarget+="0";
  }
  if(hypButtonClicked){
    classToTarget+="1";
  }
  else{
    classToTarget+="0";
  }
  let elementToHide = document.querySelectorAll("#DropDownTrigno .function");
  for (let el of elementToHide) {
    el.classList.remove("show");
    el.classList.add("hide");
  }

  let elementToDisplay = document.querySelectorAll("#DropDownTrigno ."+classToTarget);
    for (let el of elementToDisplay) {
      el.classList.remove("hide");
      el.classList.add("show");
    }
}

// Event Listener [2nd] Functions
document.querySelector("#secondMethods").addEventListener("click", function () {
  let x = document.querySelectorAll("#operations .show");
  let y = document.querySelectorAll("#operations .hide");
  for (let el of x) {
    el.classList.remove("show");
    el.classList.add("hide");
  }

  for (let el of y) {
    el.classList.remove("hide");
    el.classList.add("show");
  }
});

// Event Listener [F_E]
const inputField = document.querySelector("#currentInput input");
const previousInput = document.querySelector("#previousInput");
let resultDisplayed = false;
let F_E = false;
let result = "";
let currExp = "";
let backendExp="";
document
  .getElementById("exponentialNotation")
  .addEventListener("click", function () {
    if (F_E) {
      F_E = false;
    } else {
      F_E = true;
    }
    ShowRes();
  });

  // Functionality ~ShowRes
function ShowRes() {
  if (F_E) {
    inputField.value = parseFloat(result).toExponential(2);
  } else {
    inputField.value = result;
  }
}

// Functionality DisplaybackendExp
function DisplayExp() {
  previousInput.innerText = currExp;
}


// Functionality ~Zero()
function Zero() {
  if (result.length == 0) {
  } else {
    result = result + "0";
    ShowRes();
  }
}

let digitHandled = false;
//Functionality ~Numbers
function Numbers(value) {
  digitHandled = false;
  if (resultDisplayed) {
    result = value;
  } else {
    result = result + value;
    resultDisplayed = false;
  }
  ShowRes();
}

