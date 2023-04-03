// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

var textInput =document.querySelector("#text-input")
var btnTranslat = document.querySelector("#btn-translat");
console.log(textInput);

btnTranslat.addEventListener("click",clickHandler)

function clickHandler(){
    // console.log("clickd!");
    console.log("input",textInput.value);
}
