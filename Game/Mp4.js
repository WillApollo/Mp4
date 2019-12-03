
var myState = 0;

var menuPic;
var carPic;
var robberPic;

    function setup() {
      createCanvas(1920, 1080);
      menuPic = loadImage ("Images/introGirl.png");
      carPic = loadImage ("Images/LadyinCar.png");
      robberPic = loadImage ("Images/Robber1-01.jpg");
    }

    function preload() {

    }
    
    function draw() {
      //background("blue");




      switch (myState) {

        case 0:
        //Menu
        image(menuPic, 30, 100);

          break;

        case 1:
        // Game dollar bill
        image(robberPic, 100, 100);

          break;

        case 2:
        // car dollar scene
        image(carPic, 100, 100);

          break;

      }
    }

    function mouseReleased() {
      myState++;

      if (myState > 2) {
        myState = 0;
      }


    console.log(mouseX + "," + mouseY);   //take out later
  }
