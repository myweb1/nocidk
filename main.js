var apisave = window.webkitSpeechRecognition
var objectapi = new apisave
var apitexttospeech
var says
var apiobjecttxttospech
var savemic
var spaceocamera = document.getElementById("imgdellapipol")

function clickme() {
    objectapi.start()
    document.getElementById("p").innerHTML = "aqui ta la foto tuya =D "
}
objectapi.onresult = function (t) {
    console.log (t)
    savemic = t.results[0][0].transcript
    document.getElementById("textiaria").innerHTML = ""
    document.getElementById("textiaria").innerHTML = savemic
    talk()
}
function talk() {
    apitexttospeech = window.speechSynthesis
    says = "ok tomando"
    apiobjecttxttospech = new SpeechSynthesisUtterance(says)
    apitexttospeech.speak (apiobjecttxttospech)
    Webcam.attach(spaceocamera)
}
Webcam.set({
    width:200,
    height:200,
    image_format:"png",
    png_quality:1
})
