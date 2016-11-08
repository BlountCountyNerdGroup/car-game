// Create a canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Road Background
var bgImage = new Image();
bgImage.src = 'road.png';

// Car image
var carImage = new Image();
carImage.src = 'car.png';

// We need to know where the background is scrolled to
// so that we can put the same image in right behind it
var scrolledTo = 0;

// Main game loop (Note: height of background is 600px)
setInterval(function() {
  if (scrolledTo == 600) scrolledTo = 0;
  scrolledTo += 10;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // For permanent scrolling of the road
  ctx.drawImage(bgImage, 0, scrolledTo);
  ctx.drawImage(bgImage, 0, scrolledTo-599);

  ctx.drawImage(carImage, 300, 250, 70, 100)
}, 20);

// Event handling
addEventListener("keydown", function() {
  alert("Do not type and drive!")
});

// Questions
var questions = ["Should you try to juggle, ride a unicycle, and drive at the same time?", "Should you let your dog drive your car?", "Are you a good driver?"];
var answer = ["yes", "no", "maybe"];
var questionNumber = 0;

setInterval(function() {
  var response = prompt(questions[questionNumber]);

  if (response == answer[questionNumber]){
  } else{window.location = 'http://bestanimations.com/Military/Explosions/explosion-animated-gif-40.gif';}
  questionNumber += 1;
}, 5000);
