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
let tickets= [];
let imageCounter= 0;
let button;

function preload(){
  for (let i=0; i <=7; i++){
    tickets[i] = loadImage("assets/ticket_"  + i + ".jpg")
  }
}

function setup() {
  createCanvas(800, 800);
  background(200);
  textSize(32);
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
  frameRate(8);

text("click to randomize", 50,50);
//console.log(tickets);

button = createButton("click to randomize");
button.mousePressed(buttonPressed);

}

function draw() {
  if (animating == true){
    clear();
  image(tickets[imageCounter], width/2 , height/2 );

  if (imageCounter < tickets.length - 1){
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter= 0;
 }
}
}



function randomizer(){
  animating= false;
  if (cartoons[0]) {
  //this displays random name and splices it out of array
  //background(random(200, 255));
  clear();
  randomIndex= int(random(cartoons.length));
  text(cartoons[randomIndex].name + cartoons[randomIndex]
    .character, 50, 50);
    image(random(tickets), width/2 , height/2 );
  cartoons.splice(randomIndex, 1);
//} else {
  //background(random(200, 255));
  //text("nothing left", 50, 50);
  }

}

function buttonPressed(){
  animating= true;
setTimeout(randomizer, 2000);

}
