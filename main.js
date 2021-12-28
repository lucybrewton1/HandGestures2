//https://teachablemachine.withgoogle.com/models/fWRpHVT3m/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takePicture() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='imgResult'>"
    })
}
console.log("ml5version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fWRpHVT3m/model.json",modelLoaded);
function modelLoaded() {
    console.log("model loaded");
}