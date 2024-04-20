const { ipcRenderer } = require("electron");
const getMachineData = require("./index");

document.addEventListener("DOMContentLoaded", () => {
  const inputData = document.getElementById("ipAddress");
  const submitButton = document.getElementById("submit");
  const output = document.getElementById("output");

  submitButton.addEventListener("click", () => {
    const info = getMachineData(inputData.value);
    
    window.ipcRenderer.send("submit", info);
    console.log("running");
  });

  ipcRenderer.on("displayData", (event, data) => {
    output.textContent = "Info " + data;
    console.log("data sent");
  });
});
