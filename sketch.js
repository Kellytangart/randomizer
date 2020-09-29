let cartoons = [{name:"grimadventure", character: "mandy"}, {name:"batmanbeyond", character: "terry"}, {name:"6teen", character:"jude"}, "ededdneddy"];

function setup() {
  createCanvas(400, 400);
  background(220);

console.log(cartoons[0].character);

console.log(random(2));
console.log (cartoons[int(random(2))]);

  cartoons.splice();
  console.log("array after splice");
  console.log(cartoons);

  cartoons.unshift("starvstheforcesofevil");
  console.log("array after unshift");
  console.log(cartoons);


}

function draw() {

}
