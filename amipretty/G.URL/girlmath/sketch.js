let passwordInput, submitButton;
let accessGranted = false;
let secretPassword = "cutie";
let bgImage;
let pixelFont;
let introMessage;
let hintMessage;
let homeButton;

function preload() {
  bgImage = loadImage('./assets/bg.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Intro message
  introMessage = createP('💋 No boys allowed! This page is password protected. You can find the password somewhere on the site. Good luck girly! 💋');
  introMessage.position(width / 2 - 300, height / 2 - 120);
  introMessage.style('font-size', '20px');
  introMessage.style('font-family', 'monospace');
  introMessage.style('color', '#ff66cc');
  introMessage.style('background', '#fff0f8');
  introMessage.style('border', '2px dashed hotpink');
  introMessage.style('padding', '12px');
  introMessage.style('width', '600px');
  introMessage.style('text-align', 'center');

  // Hint
  hintMessage = createP('****hint: start at the homepage!!! you never know what is clickable...****');
  hintMessage.position(140, 90);
  hintMessage.style('color', '#ffe6f9');

  // Home button (clickable image)
  homeButton = createImg('./assets/home_pink.gif', 'home');
  homeButton.position(windowWidth - 120, 20);
  homeButton.style('cursor', 'pointer');
homeButton.style('width', '100px');
  homeButton.mousePressed(() => {
    window.location.href = '/directory/index.html'; // change to your homepage path
  });

  // Password input field
  passwordInput = createInput('');
  passwordInput.attribute('placeholder', '💖 enter the magic word 💖');
  passwordInput.position(width / 2 - 250, height / 2 + 10);
  passwordInput.style('padding', '12px');
  passwordInput.style('font-size', '14px');
  passwordInput.style('text-align', 'center');
  passwordInput.style('width', '500px');
  passwordInput.style('background', '#ffe6f9');
  passwordInput.style('color', '#ff00aa');
  passwordInput.style('border', '2px solid hotpink');
  passwordInput.style('font-family', 'monospace');

  // Submit button
  submitButton = createButton('✨ Enter ✨');
  submitButton.position(width / 2 - 40, height / 2 + 60);
  submitButton.style('background', '#ff99cc');
  submitButton.style('border', '2px solid deeppink');
  submitButton.style('color', '#fff');
  submitButton.style('font-family', 'monospace');
  submitButton.style('padding', '8px');
  submitButton.mousePressed(checkPassword);
}

function draw() {
  background(bgImage);

  if (accessGranted) {
    textFont(pixelFont);
    textSize(48);
    fill('#ffccff');
    stroke('#ff00ff');
    strokeWeight(4);
    textAlign(CENTER, CENTER);
    text('💅 welcome to the secret g.url page 💅', width / 2, height / 2);
  }
}

function checkPassword() {
  if (passwordInput.value().toLowerCase() === secretPassword.toLowerCase()) {
    accessGranted = true;
    passwordInput.hide();
    submitButton.hide();
    introMessage.hide();
    hintMessage.hide();
    homeButton.hide();
  } else {
    passwordInput.value('');
    passwordInput.attribute('placeholder', '💔 nope, try again 💔');
  }
}
