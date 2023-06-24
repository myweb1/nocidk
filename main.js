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
    if (savemic == "Toma una selfie"){
        talk()
        setTimeout(() => {
            photo()   
        },1000 );
        
    }
    
}
function photo() {
    Webcam.snap(function (g) {
        document.getElementById("fotodellapipol").innerHTML = "<img src='"+g+"'>"
    })
}
function talk() {
    apitexttospeech = window.speechSynthesis
    says = "ok tomando"
    apiobjecttxttospech = new SpeechSynthesisUtterance(says)
    apitexttospeech.speak (apiobjecttxttospech)
    Webcam.attach(spaceocamera)
}
Webcam.set({
    width:500,
    height:500,
    image_format:"png",
    png_quality:90
    
})
