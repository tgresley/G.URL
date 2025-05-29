let questions = [
  { q: "What color is the sky?", options: ["Green", "Blue", "Red", "Yellow"], answer: 1, type: "mc" },
  { q: "How many legs does a cat have?", options: ["Two", "Three", "Four", "Five"], answer: 2, type: "mc" },
  { q: "Which one is a fruit?", options: ["Carrot", "Potato", "Apple", "Spinach"], answer: 2, type: "mc" },
  { q: "Type the number of days in a week.", answer: "7", type: "text" },
  { q: "Which is hot?", options: ["Ice", "Fire", "Snow", "Milk"], answer: 1, type: "mc" },
  { q: "Which is used to write?", options: ["Spoon", "Pen", "Shoe", "Ball"], answer: 1, type: "mc" },
  { q: "Type the first letter of the alphabet.", answer: "A", type: "text" },
  { q: "Which is a pet animal?", options: ["Tiger", "Elephant", "Dog", "Lion"], answer: 2, type: "mc" },
  { q: "Which is a color?", options: ["Apple", "Chair", "Blue", "Book"], answer: 2, type: "mc" },
  { q: "How many wheels does a bicycle have?", options: ["1", "2", "3", "4"], answer: 1, type: "mc" }
];

let selections = Array(questions.length).fill(null);
let inputs = [];
let button, downloadButton;
let resultsShown = false;
let allCorrect = false;
let wallpaper, bg;
let gif1, gif2;
let quizback;

function preload() {
  wallpaper = loadImage('lanacore.png');
  bg = loadImage('americanflag.jpg');
}

function setup() {
  createCanvas(windowWidth, 1800);
  textSize(14);

quizback = createImg ('./lana.jpg')
quizback.position (20,20)
quizback.style ('width', '700px', 'height', 'auto')
quizback.style('position', 'fixed');


  gif2 = createImg('./blinkie.gif');
  gif2.position(windowWidth - 520, 120);
  gif2.style('width', '400px');
  gif2.style('z-index', '1000');
  gif2.style('pointer-events', 'none');
  gif2.style('position', 'fixed');

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].type === "text") {
      let inp = createInput('');
      inp.style('font-size', '14px');
      inputs[i] = inp;
    } else {
      inputs[i] = null;
    }
  }

  let buttonContainer = createDiv().style('position', 'fixed').style('bottom', '10px').style('left', '20px');
  button = createButton('Check Answers');
  button.parent(buttonContainer);
  button.mousePressed(checkAnswers);

  downloadButton = createA('lanacore.png', 'Download Wallpaper', '_blank');
  downloadButton.parent(buttonContainer);
  downloadButton.style('margin-left', '20px');
  downloadButton.hide();
}

function draw() {
  if (allCorrect) {
    background(wallpaper);
    return;
  }

  background(bg);
  let colX = [40, 340];
  let yStart = 20;
  let col = 0;
  let y = yStart;

  for (let i = 0; i < questions.length; i++) {
    if (i === 5) {
      col = 1;
      y = yStart;
    }

    let x = colX[col];
    let q = questions[i];
    fill(255);
    text(`${i + 1}. ${q.q}`, x, y);
    y += 20;

    if (q.type === "mc") {
      for (let j = 0; j < q.options.length; j++) {
        noFill();
        stroke(255);
        rect(x + 20 - 5, y - 12, 10, 10);
        if (selections[i] === j) {
          line(x + 20 - 5, y - 12, x + 20 + 5, y - 2);
          line(x + 20 - 5, y - 2, x + 20 + 5, y - 12);
        }
        noStroke();
        fill(255);
        text(q.options[j], x + 35, y);
        y += 20;
      }
    } else {
      if (inputs[i]) {
        inputs[i].position(x + 20, y);
      }
      if (resultsShown) {
        let val = inputs[i].value().trim();
        if (val === q.answer) {
          text("✔", x + 200, y + 15);
        } else {
          text("✘", x + 200, y + 15);
        }
      }
      y += 40;
    }

    y += 10;
  }
}

function mousePressed() {
  let colX = [40, windowWidth / 2 + 40];
  let yStart = 20;

  for (let i = 0; i < questions.length; i++) {
    let col = i < 5 ? 0 : 1;
    let y = yStart;
    for (let k = (col === 0 ? 0 : 5); k < i; k++) {
      y += (questions[k].type === "text") ? 60 : 100;
      y += 10;
    }

    if (questions[i].type === "mc") {
      y += 20;
      for (let j = 0; j < questions[i].options.length; j++) {
        let x = colX[col] + 20;
        if (mouseX > x - 5 && mouseX < x + 5 && mouseY > y - 12 && mouseY < y - 2) {
          selections[i] = j;
        }
        y += 20;
      }
    }
  }
}

function checkAnswers() {
  resultsShown = true;
  allCorrect = true;

  for (let i = 0; i < questions.length; i++) {
    if (questions[i].type === "mc") {
      if (selections[i] !== questions[i].answer) {
        allCorrect = false;
      }
    } else {
      if (inputs[i].value().trim() !== questions[i].answer) {
        allCorrect = false;
      }
    }
  }

  if (allCorrect) {
    downloadButton.show();
  }
}
