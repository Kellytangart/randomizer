let cartoons = [{
  name:"grimadventure",
  character: "mandy"
}, {
  name:"batmanbeyond",
  character: "terry"
}, {
  name:"6teen",
  character:"jude"
}, {
  name:"ededdneddy",
  character: "kevin"
}];


let randomIndex;
let counter =0;
let animating= false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
text("click to randomize", 50,50);


}

function draw() {
  if (animating == true){
    ellipse(random(width), random(height), random(50,200));
  }
}



function randomizer(){
  animating= false;
  if (cartoons[0]) {
  //this displays random name and splices it out of array
  background(random(200, 255));
  randomIndex= int(random(cartoons.length));
  text(cartoons[randomIndex].name + " has a character called "
   + cartoons[randomIndex]
    .character, 50, 50);
  cartoons.splice(randomIndex, 1);
} else {
  background(random(200, 255));
  text("nothing left", 50, 50);
  }

}

function mousePressed(){
  animating= true;
setTimeout(randomizer, 2000);

}
