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
      fill(0);
      textFont(myFont)
      textSize(20);
      text("On a warm Saturday, The First Second Bank was robbed.", 110, 150);

      text("The escape plan wasn't good enough for the robbers so they had to run", 110, 190);
      text("He didn't have enough time to check if there were any tears in the bag.", 110, 230);
      break;

    case 2:
      background("white")
      image(attorneyOfficePic, 100, 100, 800, 800);
      image(womanStands, 300, 400, 400, 400)
      textFont(myFont)
      textSize(20);
      text("At the same time Jenn is leaving from a lawyer visit.", 300, 130);
      text("The divorce attorney's just finzalized her divorce ", 300, 170);
      text("It's been a long time coming, but it still hurts", 300, 210);


      break;

    case 3:
      background("white")
      image(carPic, 100, 100, 800, 800);
      image(dollar, 500, 300, 50, 50)
      textFont(myFont)
      textSize(20);
      text("One hundred dollar bill has seemed to find a wind current", 200, 130);
      text("After being so cooped up in that dusty old bank", 200, 170);
      text("The one hundred dollar bill is searching to find its new owner.", 200, 210);
      break;

    case 4:
      background("white")
      image(towedPic, 100, 100, 800, 800);
      image(womanCry, 400, 650, 150, 150);
      textFont(myFont)
      textSize(25);
      text("As Jenn walks to her car to drive home", 170, 130);
      text("She gets to the sidewalk and sees that her car is being towed.", 110, 170);

      break;

    case 5:
      background("white")
      image(sadEnd, 100, 100, 800, 800);
      textFont(myFont)
      textSize(25);
      stroke(2);
      fill("white");
      text("Jenn is starting to think the world is out to get her", 160, 210);
      text("As she starts to cry,she seems to feel the wind ", 160, 260);
      text(" shift direction", 160, 300);

      break;

    case 6:
      background("white")
      image(happyEnd, 100, 100, 800, 800);
        textFont(myFont)
      textSize(25);

    //  fill("white");
      text("As Jenn looks down she thinks... ", 160, 250);
      text("maybe today isn't so bad after all", 160, 300);


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
