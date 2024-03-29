
// Functionality ~DeleteMemory
function DeleteMem() {
    memory = undefined;
    if(selectedHisOrMem == historyOrMem[1]){
      DisplayMemory();
    }
  }

  // Functionality ~ReadMemory
  function ReadMem() {
    if(memory!=undefined){
      result = memory;
      ShowRes();
    }
  }

  // Functionality ~AddInMemory
  function AddMem() {
    memory = parseFloat(memory) + parseFloat(inputField.value);
    if(selectedHisOrMem == historyOrMem[1]){
      DisplayMemory();
    }
  }
  
  // Functionality ~SubtractInMemory
  function SubMem() {
    memory = parseFloat(memory) - parseFloat(inputField.value);
    if(selectedHisOrMem == historyOrMem[1]){
      DisplayMemory();
    }
  }

  // Functionality ~SaveMem
  function SaveMem() {
    if (inputField.value.length == 0 || inputField.value == "0") {
    } else {
      memory = result;
    }
    if(selectedHisOrMem == historyOrMem[1]){
      DisplayMemory();
    }
  }

  // Functionality ~DisplayHistory
  function DisplayHistory() {
    if (history == undefined) {
      document.getElementById("memoryAndHistorySection").innerText =
        "";
    } else {
      document.getElementById("memoryAndHistorySection").innerText = history;
    }
  }

  // Functionality ~DisplayMemory
  function DisplayMemory() {
    if (memory == undefined) {
      document.getElementById("memoryAndHistorySection").innerText =
        "";
    } else {
      document.getElementById("memoryAndHistorySection").innerText = memory;
    }
  }