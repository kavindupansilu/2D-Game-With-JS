
var boy = document.getElementById("boy");


var runsound= new Audio("run.mp3");
runsound.loop = true;

var jumpsound= new Audio("jump.mp3");

var deadsound = new Audio("dead.mp3");

idleimagenum = 1;
var idleanimationnum = 0;
function idleanimation() {
  idleimagenum = idleimagenum + 1;
  if (idleimagenum == 11) {

    idleimagenum = 1;

  }

  boy.src = "Idle (" + idleimagenum + ").png";
}

function idleanimationstart() {
  idleanimationnum = setInterval(idleanimation, 200);

}
runimagenum = 1;
var runanimationnum = 0;

function runAnimation() {
  runimagenum = runimagenum + 1;
  if (runimagenum == 11) {
    runimagenum = 1;
  }
  boy.src = "Run (" + runimagenum + ").png";

}

function runanimationstart() {
  clearInterval(idleanimationnum);
  runanimationnum = setInterval(runAnimation, 200);

}

jumpimagenum = 1;
var jumpanimationnum = 0;
boymargintop = 430;

function jumpanimation() {
  jumpimagenum = jumpimagenum + 1;

  if (jumpimagenum <= 6) {

    boymargintop = boymargintop - 35;
    boy.style.marginTop = boymargintop + "px";


  }

  if (jumpimagenum >= 7) {

    boymargintop = boymargintop + 35;
    boy.style.marginTop = boymargintop + "px";


  }


  if (jumpimagenum == 11) {
    jumpimagenum = 1;
    clearInterval(jumpanimationnum);
    jumpanimationnum = 0;
    runimagenum = 0;
    runanimationstart();

  }

  boy.src = "jump (" + jumpimagenum + ").png";
}

function jumpanimationstart() {
  clearInterval(idleanimationnum);
  runimagenum = 0;
  clearInterval(runanimationnum);
  jumpanimationnum = setInterval(jumpanimation, 100);

}



function keycheck(event) {

  if (event.which == 13) {
    if (runanimationnum == 0) {
      runanimationstart();
      runsound.play();
    }
    if (boxanimationid == 0) {
      boxanimationid = setInterval(boxAnimation, 100);

    }

    if (movebackgroundanimationid == 0) {

      movebackgroundanimationid = setInterval(movebackground, 100);


    }


  }


  if (event.which == 32) {
    if (jumpanimationnum == 0) {
      runsound.pause();
      jumpanimationstart();
      jumpsound.play();
      runsound.play();
 
    }

    if (boxanimationid == 0) {
      boxanimationid = setInterval(boxAnimation, 100);
    }

    if (movebackgroundanimationid == 0) {

      movebackgroundanimationid = setInterval(movebackground, 100);


    }



  }

}









boxmarginleft = 1590;
function creatboxes() {


  for (var i = 0; i <= 500; i++) {
    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxmarginleft + "px";
    box.id = "box" + i;
    //boxmarginleft=boxmarginleft+1000;

    if (i < 5) {
      boxmarginleft = boxmarginleft + 2000;//im
    }

    if (i >= 5) {
      boxmarginleft = boxmarginleft + 1000;//im
    }

  }

}

var boxanimationid = 0;

function boxAnimation() {
  for (var i = 0; i < 500; i++) {
    var box = document.getElementById("box" + i);
    var currentmarginleft = getComputedStyle(box).marginLeft;
    var newmarginleft = parseInt(currentmarginleft) - 35;
    box.style.marginLeft = newmarginleft + "px";

    if (newmarginleft >= -75 & newmarginleft <= 100) {
      if (boymargintop > 400) {  //350

        clearInterval(boxanimationid);
        boxanimationid = -1;
        clearInterval(runanimationnum);
        runanimationnum = -1;

        clearInterval(jumpanimationnum);
        jumpanimationnum = -1;

       clearInterval(movebackgroundanimationid);

        deadanimationstart();


        boy.style.marginTop = "430px";

      }
    }


  }



}


deadimagenumber = 1;
var deadanimationnumber = 0;


function boydeadanimation() {


  deadimagenumber = deadimagenumber + 1;
  if (deadimagenumber == 11) {

    deadimagenumber = 10;
  }
document.getElementById("gameover").style.visibility="visible";
document.getElementById("text1").innerHTML="your score "+ score;

  boy.src = "Dead (" + deadimagenumber + ").png";

}

function deadanimationstart() {

  deadimagenumber = setInterval(boydeadanimation, 100);
  runsound.pause();
  deadsound.play();

}

backgroundimagepositionx = 0;
movebackgroundanimationid = 0;



var score=0;
function movebackground() {

  backgroundimagepositionx = backgroundimagepositionx - 20;


  document.getElementById("background").style.backgroundPositionX = backgroundimagepositionx + "px";

score= score+1;
document.getElementById("score").innerHTML=score;

}

function restart(){

location.reload();

}