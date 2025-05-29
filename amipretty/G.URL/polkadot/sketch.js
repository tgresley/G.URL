let nameInput, ageInput, skinnySlider, generateButton, tryAgainButton, saveButton;
let nameLabel, ageLabel, skinnyLabel, skinnySliderLabel;
let colorMap = {};
let dotColor;
let showDots = false;
let currentBg;
let errorMessage = '';
let font;
let bg;
let generateSound;

let fixedColors = [
  '#FF0000', '#FF7F00', '#FFFF00', '#7FFF00',
  '#00FF00', '#00FF7F', '#00FFFF', '#007FFF',
  '#0000FF', '#7F00FF', '#FF00FF', '#FF007F',
  '#8B0000', '#8B4513', '#2E8B57', '#4682B4'
];

function preload() {
  font = loadFont('./assets/L.ttf');
  bg = loadImage('./assets/polkacar.jpg');
  generateSound = loadSound('./assets/polka.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  currentBg = bg;

  for (let i = 10; i <= 25; i++) {
    colorMap[i] = color(fixedColors[i - 10]);
  }

  nameLabel = createP("1. What is your name?");
  nameLabel.position(60, 20).style('color', '#FFFFFF');
  nameInput = createInput();
  nameInput.position(60, 60);

  ageLabel = createP("2. How old are you?");
  ageLabel.position(60, 90).style('color', '#FFFFFF');
  ageInput = createInput();
  ageInput.position(60, 130);

  skinnyLabel = createP("3. How skinny are you?");
  skinnyLabel.position(60, 160).style('color', '#FFFFFF');
  skinnySlider = createSlider(0, 260, 50);
  skinnySlider.position(60, 200);
  skinnySlider.style('width', '280px');

  skinnySliderLabel = createP("#heroinchic ----------------------------> ugly :(");
  skinnySliderLabel.position(60, 205);
  skinnySliderLabel.style('color', '#FFFFFF');

  generateButton = createButton("Generate");
  generateButton.position(60, 270);
  generateButton.mousePressed(onGenerate);
}

function draw() {
  background(currentBg);

  if (showDots && dotColor) {
    drawPolkaDots(dotColor);
  }

  if (errorMessage) {
    fill(255, 0, 0);
    text(errorMessage, 60, 320);
  }

  push();
  fill('fuchsia');
  textFont(font);
  textSize(100);
  text('#mypolka', windowWidth - 600, 150);
  pop();
}

function onGenerate() {
  if (generateSound.isPlaying()) {
    generateSound.stop();
  }
  generateSound.play();

  let age = int(ageInput.value());
  let name = nameInput.value();

  if (age >= 10 && age <= 25) {
    currentBg = colorMap[age];
    errorMessage = '';
    showDots = true;
  } else if (age > 25) {
    currentBg = color(255);
    errorMessage = 'You are too old';
    showDots = false;
  } else {
    currentBg = color(255);
    errorMessage = '';
    showDots = false;
  }

  dotColor = nameToColor(name);

  nameInput.hide();
  ageInput.hide();
  skinnySlider.hide();
  generateButton.hide();
  nameLabel.hide();
  ageLabel.hide();
  skinnyLabel.hide();
  skinnySliderLabel.hide();

  tryAgainButton = createButton("Try Again");
  tryAgainButton.position(60, 340);
  tryAgainButton.mousePressed(() => location.reload());

  saveButton = createButton("save #yourpolka");
  saveButton.position(160, 340);
  saveButton.mousePressed(() => saveCanvas('mypolka', 'jpg'));
}

function nameToColor(name) {
  let r = 0, g = 0, b = 0;
  for (let i = 0; i < name.length; i++) {
    let code = name.charCodeAt(i);
    if (i % 3 === 0) r += code;
    else if (i % 3 === 1) g += code;
    else b += code;
  }
  return color(r % 256, g % 256, b % 256);
}

function drawPolkaDots(c) {
  noStroke();
  fill(c);

  let value = skinnySlider.value();
  let dotSize = map(value, 0, 160, 10, 200);
  let spacing = map(value, 0, 160, 50, 350);

  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      let offset = (y / spacing) % 2 === 0 ? 0 : spacing / 2;
      ellipse(x + offset, y, dotSize, dotSize);
    }
  }
}
