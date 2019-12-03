var myState = 0;

var menuPic;
var carPic;
var robberPic;

function setup() {
  createCanvas(800, 800);
  menuPic = loadImage("Assets/introGirl.png");
  carPic = loadImage("Assets/LadyinCar.png");
  robberPic = loadImage("Assets/Robber1-01.jpg");

}

function preload() {

}

function draw() {
  //background("blue");




  switch (myState) {

    case 0:
      //Menu
      image(menuPic, 30, 100, 800, 800);
      if ((mouseX < 240) && (mouseX > 133) && (mouseY < 708) && (mouseY > 523)) {
        mouseReleased();
      }

      break;

    case 1:
      // Game dollar bill

      image(robberPic, 100, 100, 800, 800);

      break;

    case 2:
      // car dollar scene
      image(carPic, 100, 100, 800, 800);

      break;

  }
}

function mouseReleased() {

  myState++;

  if (myState > 2) {
    myState = 0;
  }



}
