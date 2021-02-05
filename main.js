var SpeechRecognition= window.webkitSpeechRecognition

var recognition=new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);

    var output=event.results[0][0].transcript;
    console.log(output);
    document.getElementById("textbox").innerHTML=output;
    if (output=="take my selfie") {
        speak()
        Webcam.attach("#camera")
    }
    
}

function speak(){
    var speech=window.speechSynthesis;
    speak_data="Taking your selfie in five seconds";

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    speech.speak(utterThis);

    setTimeout(function() {
        snapshot()
        save()
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality: 90
    
});
function snapshot(){
    Webcam.snap(
        function (picture) {
           document.getElementById("result").innerHTML=`<img id="selfie" src=${picture}> ` 
        }
    )
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").scr;
    link.href=image;
    link.click();
}

    

