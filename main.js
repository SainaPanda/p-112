Webcam.set(
{
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
 });
camera = documnet.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version:',ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cFOFfgy3P/model.json', modelLoaded)
function modelLoaded()
{
    console.log('modelLoaded')
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) 
    {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_objectn_gesture_icon").innerHTML = results[1].label;        
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "this is looking amazing")
        {
            document.getElementById("update_emoji").innerHTML;
        }
        if(results[0].label == "all the best")
        {
            document.getElementById("update_emoji").innerHTML;
        }
        if(results[0].label == "that was a marvelous victory")
        {
            document.getElementById("update_emoji").innerHTML;
        }
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predidiction is " + prediction_1;
    speak_data_2 = "The second predidiction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}