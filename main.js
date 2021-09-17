Song="";
function preload() {
    Song=loadSound("music.mp3")
}

function setup() {
 canvas=createCanvas(500,500)   
 canvas.position(500,200)
 Video=createCapture(VIDEO)
 Video.hide()
}
function draw() {
    image(Video,0,0,500,500)
    
    

   
}
function play(){
Song.play()
} 