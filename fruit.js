function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

img = "";
status = "";

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function preload() {
    img = loadImage('fruit.webp');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000")
    text("Apple", 95, 75);
    noFill();
    stroke("#FF0000");
    rect(90, 60, 250, 250 );

    fill('#FF0000');
    text("Orange", 240, 35);
    noFill();
    stroke('#FF0000');
    rect(230, 20, 250, 200 );

    fill('#FF0000');
    text("Banana", 500, 270);
    noFill();
    stroke('#FF0000');
    rect(150, 250, 400, 120 );
}