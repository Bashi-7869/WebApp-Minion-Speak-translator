// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

var textInput =document.querySelector("#text-input")
var btnTranslat = document.querySelector("#btn-translat");
var textOutput = document.querySelector("#text-output")
console.log(textInput);
console.log(textOutput);
btnTranslat.addEventListener("click",clickHandler)

function clickHandler(){
    console.log("clickd!");
    console.log("input",textInput.value);
    // console.log("ouput",textInput.value);
    textOutput.innerText = textInput.value + " in banana language " + " ka ma com  "
}
