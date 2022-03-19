var btnTranslate = document.querySelector("#btn");
var txtinput = document.querySelector("#inputText");
var output = document.querySelector("#outputText")


var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(inputText) {
    return serverURL + "?text=" + inputText
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong")
}


function clickHandler() {

    var inputText = txtinput.value;

    fetch(getTranslationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var tText = json.contents.translated;
            output.innerText = tText;
        })
        .catch(errorHandler)


};


btnTranslate.addEventListener("click", clickHandler)