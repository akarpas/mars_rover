var myRover = {
  position: [0,0],
  direction: 'N'
};

var instructionsText = 'fffffrffffblffrfffffff';
var instructions = instructionsText.split('');
var instructionsDisplay = [];

for (var i = 0; i < instructions.length; i++) {
  if (instructions[i] == 'f') {
    instructionsDisplay[i] = 'Go Forward';
  } else if (instructions[i] == 'b') {
    instructionsDisplay[i] = 'Go Backwards';
  } else if (instructions[i] == 'r') {
    instructionsDisplay[i] = 'Turn Right';
  } else {
    instructionsDisplay[i] = 'Turn Left';
  }
}

console.log("The current instructions are - " + instructions + " - which translate to:\n " + instructionsDisplay);
executeInstructions(myRover, instructions);

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[0] != 9) {
        rover.position[0]++;
      } else {
        rover.position[0] -= 9;
      } break;
    case 'E':
      if (rover.position[1] != 9) {
        rover.position[1]++;
      } else {
        rover.position[1] -= 9;
      } break;
    case 'S':
      if (rover.position[0] !== 0) {
        rover.position[0]--;
      } else {
        rover.position[0] += 9;
      } break;
    case 'W':
      if (rover.position[1] !== 0) {
        rover.position[1]--;
      } else {
        rover.position[1] += 9;
      } break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      if (rover.position[0] != 9) {
        rover.position[0]--;
      } else {
        rover.position[0] += 9;
      } break;
    case 'E':
      if (rover.position[1] != 9) {
        rover.position[1]--;
      } else {
        rover.position[1] += 9;
      } break;
    case 'S':
      if (rover.position[0] !== 0) {
        rover.position[0]++;
      } else {
        rover.position[0] -= 9;
      } break;
    case 'W':
      if (rover.position[1] !== 0) {
        rover.position[1]++;
      } else {
        rover.position[1] -= 9;
      } break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function changeDirection(rover, whichDirection) {
  switch(whichDirection) {
    case 'r':
      if(rover.direction == 'N') {
        rover.direction = 'E';
      } else if (rover.direction == 'E') {
        rover.direction = 'S';
      } else if (rover.direction == 'S') {
        rover.direction = 'W';
      } else {
        rover.direction = 'N';
      }
      break;
    case 'l':
      if(rover.direction == 'N') {
          rover.direction = 'W';
      } else if (rover.direction == 'W') {
          rover.direction = 'S';
      } else if (rover.direction == 'S') {
          rover.direction = 'E';
      } else {
          rover.direction = 'N';
      }
      break;
  }
  console.log("New Rover Direction: " + rover.direction);
}

function executeInstructions(rover, instructions) {
  for (var i = 0; i < instructions.length; i++) {
    if (instructions[i] == 'f') {
      goForward(myRover);
    } else if (instructions[i] == 'b') {
      goBackwards(myRover);
    } else {
      changeDirection(myRover, instructions[i]);
    }
  }
}

console.log("Final Rover Position: " + myRover.position);
console.log("Final Rover Direction: " + myRover.direction);
