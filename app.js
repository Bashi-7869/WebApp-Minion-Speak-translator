// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

var textInput =document.querySelector("#text-input");
var btnTranslat = document.querySelector("#btn-translat");
var textOutput = document.querySelector("#text-output");

// storing url
let serverUrl = "https://api.funtranslations.com/translate/minion.json"

btnTranslat.addEventListener("click",clickHandler)

function clickHandler(){
    //  taking input
    let inputText = textInput.value
    //    processing data
    fetch(getserverURL(inputText))
    .then(response => response.json())
    .then(json => { let translatedText = json.contents.translated;   
        textOutput.innerText = translatedText;                 //  showing output
     })
      
    //  When error occured error handling
         .catch(errorHandler)

    };

    function getserverURL(text){
        return serverUrl + "?" + "text=" + text
        //converting text and addding queryperams and textkey to server URL
    }

    function errorHandler(error){
        console.log("error occurred ",error);
        alert("Something went wrong with server!try again after some time")
    }