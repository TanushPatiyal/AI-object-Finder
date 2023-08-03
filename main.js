Status = "";
input_text = "";

function setup() {
    canvas = createCanvas(300,290);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 290);
    video.hide();
}
function draw() {
    image(video, 0, 0, 480, 380); 
    if(Status != "")
    {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ object.length;
if(object[i].label == input_text){
document.getElementById(Status).innerHTML = input_text+"found" ;
}
            fill("White");
            percent = floor(object[i].confidence * 100 );
            text(object[i].label + "" + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("White");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detection object";
    input_text = document.getElementById("input").value;

}
function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
   
}
function gotResults(error, results) {
    if( error ) {
        console.log(error);
         console.log(results);


    }
    console.log(results);
    object = results; }