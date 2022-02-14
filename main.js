etc="";
video="";
object="";
r="";
g="";
b="";

function preload(){
    
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    cocossd=ml5.objectDetector('cocossd',modalok);
    document.getElementById('bla').innerHTML="status : detecting objects";
    
}
function modalok(){
    etc=true;
    console.log("All is well");
    cocossd.detect(video,gotAns);
}
function gotAns(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);   
    object=result;
    
}
}
    function draw(){
    image(video,0,0,380,380);
    if(etc !=""){
     r=random(200);
     g=random(255);
     b=random(150);
        for(a =0; a<object.length; a++){
    p=floor(object[a].confidence*100);
    fill(r,g,b);
    text(object[a].label+" "+p+"%",object[a].x,object[a].y );
    noFill();
    stroke(r,g,b);
    rect(object[a].x,object[a].y,object[a].width,object[a].height);
    document.getElementById("bla").innerHTML="status= object detected is "+object[a].label;
    document.getElementById("xxl").innerHTML="Number of objects are - "+object.length;
}
    }
    }
