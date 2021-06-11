function setup(){
    canvas = createCanvas(550,400);
    canvas.position(100,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,550,350);
}