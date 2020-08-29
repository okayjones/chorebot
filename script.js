let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let openDoor1;
let openDoor2;
let openDoor3;

let numClosedDoors = 3;
let currentlyPlaying = true;

doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src= openDoor1;
  playDoor(doorImage1);
  };
};
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  };
};
doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  };
};

function startRound() {
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  numClosedDoors=3;
  currentlyPlaying=true;
  startButton.innerHTML="Good luck!";
  randomChoreDoorGenerator();
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";  
  }
};

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor == 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor == 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else  if (choorDoor == 2){
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};

function isBot(bot) {
  return bot.src === botDoorPath ? true : false;
};

function isClicked(door) {
  return door.src === closedDoorPath ?  false : true;
};

function playDoor(door) {
  numClosedDoors--;
  console.log(numClosedDoors+ ' doors left');
  if (numClosedDoors === 0 ){
     gameOver('win');
     currentlyPlaying = false;
  } else if (isBot(door)) {
    gameOver();
    currentlyPlaying = false;
  }; 
};

startRound();