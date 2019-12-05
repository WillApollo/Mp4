var myState = 0;

var menuPic;
var carPic;
var robberPic;
var attorneyOfficePic;
var towedPic;
var sadEnd;
var happyEnd;

function preload() {
  pageTurn = loadSound("Assets/Page Flipping Sound Effect.mp3");
  music = loadSound("Assets/SoftMusic.mp3")

}

function setup() {
  createCanvas(800, 800);
  menuPic = loadImage("Assets/introGirl.png");
  carPic = loadImage("Assets/LadyinCar.png");
  robberPic = loadImage("Assets/Robber1-01.jpg");
  attorneyOfficePic = loadImage("Assets/attorneyoffice.jpg");
  towedPic = loadImage("Assets/towing-02.jpg");
  sadEnd = loadImage("Assets/GirlCryingScene1.png");
  happyEnd = loadImage("Assets/GirlHappyMoneyScene2.png");
  dollar = loadImage("Assets/Dollar.png")
  womanStands = loadImage("Assets/womanstanding.png")
  womanCry = loadImage("Assets/womancrying2.png")
  myFont = loadFont("assets/ArialCE.ttf");

}


function draw() {
  //background("blue");

  if (music.isPlaying() != true) {
    music.loop();
  }


  switch (myState) {

    case 0:
      //Menu
      image(menuPic, 30, 100, 800, 800);
      /*  if ((mouseX < 240) && (mouseX > 133) && (mouseY < 708) && (mouseY > 523)) {
          mouseReleased();
        }*/


      break;

    case 1:
      background("white")
      image(robberPic, 100, 100, 800, 800);

      image(dollar, 675, 660, 50, 50);

      break;

    case 2:
      background("white")
      image(attorneyOfficePic, 100, 100, 800, 800);
      image(womanStands, 300, 400, 400, 400)

      break;

    case 3:
      background("white")
      image(carPic, 100, 100, 800, 800);
      image(dollar, 500, 300, 50, 50)
      break;

    case 4:
      background("white")
      image(towedPic, 100, 100, 800, 800);
      image(womanCry, 400, 650, 150, 150)
      break;

    case 5:
      background("white")
      image(sadEnd, 100, 100, 800, 800);

      break;

    case 6:
      background("white")
      image(happyEnd, 100, 100, 800, 800);

      break;


    case 7:
      background("black")
      textFont(myFont)
      fill("white")
      textSize(80)
      text("Credits", 250, 200)
      textSize(30)
      text("Will Andrews", 50, 300)
      text("Jeffery Ko", 325, 300)
      text("Emily Fletcher", 550, 300)
      text("Karley Davis", 50, 450)
      text("Logan Ricketts", 300, 450)
      text("Olivea Simms", 550, 450)
      text("Alex Diaz", 50, 600)
      text("Keagen Davidson", 300, 600)

      break;

  }
}

function mouseReleased() {

  myState++;
  pageTurn.play();
  if (myState > 7) {
    myState = 0;
  }



}
