// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

var textInput =document.querySelector("#text-input")
var btnTranslat = document.querySelector("#btn-translat");
var textOutput = document.querySelector("#text-output")

// storing url
let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

btnTranslat.addEventListener("click",clickHandler)

function clickHandler(){
    //  taking input
    let inputText = textInput.value
    
  
    }