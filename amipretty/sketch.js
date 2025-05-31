let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let messages = [
  "Turn your head left",
  "Now right",
  "Look up",
  "Look down",
  "Smile a little",
  "Analyzing girl prettiness... are you pretty?",
  "NO!"
];

let currentMessage = "";
let messageIndex = 0;
let lastChangeTime = 0;
let messageDelay = 3000;
let startMessages = false;
let hasDetectedFace = false;

let baseWidth = 576;
let baseHeight = 432;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {

  
  createCanvas(baseWidth, baseHeight);
  video = createCapture(VIDEO);
  video.size(baseWidth, baseHeight);
  video.hide();
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  background(0);

  image(video, 0, 0, baseWidth, baseHeight);

  for (let j = 0; j < faces.length; j++) {
    let face = faces[j];

    if (!hasDetectedFace) {
      hasDetectedFace = true;
      startMessages = true;
      currentMessage = messages[0];
      lastChangeTime = millis();
    }

   
    strokeWeight(5);
    let frameColors = [
      color(255, 105, 180),
      color(255, 192, 203),
      color(255, 192, 203),
      color(194, 255, 110),
      color(194, 255, 110),
      color(255, 105, 97)
    ];

    function drawPart(part, shadeIndex) {
      stroke(frameColors[shadeIndex % frameColors.length]);
      for (let i = 0; i < face[part].keypoints.length; i++) {
        let kp = face[part].keypoints[i];
        point(kp.x, kp.y);
      }
    }

    drawPart('lips', 0);
    drawPart('leftEye', 1);
    drawPart('rightEye', 2);
    drawPart('leftEyebrow', 3);
    drawPart('rightEyebrow', 4);
    drawPart('faceOval', 5);


    fill(127, 255, 212);
    noStroke();
    textSize(14);
    textAlign(LEFT, TOP);

    let dataY = 60;
    let lineHeight = 24;

    let leftEye = face.leftEye.keypoints;
    let rightEye = face.rightEye.keypoints;
    let lips = face.lips.keypoints;

    let eyeDist = dist(
      avgPoint(leftEye).x, avgPoint(leftEye).y,
      avgPoint(rightEye).x, avgPoint(rightEye).y
    );

    let mouthWidth = dist(
      lips[0].x, lips[0].y,
      lips[lips.length - 1].x, lips[lips.length - 1].y
    );

    let tiltAngle = degrees(atan2(
      avgPoint(rightEye).y - avgPoint(leftEye).y,
      avgPoint(rightEye).x - avgPoint(leftEye).x
    )).toFixed(1);

    text("slay!:   " + eyeDist.toFixed(2), 10, dataY);
    text("pre-pubesence:    " + mouthWidth.toFixed(2), 10, dataY + lineHeight);
    text("foxpretty:        " + tiltAngle + "°", 10, dataY + 2 * lineHeight);
    text("cvnt-factor:      " + nf(mouthWidth / eyeDist, 1, 2), 10, dataY + 3 * lineHeight);
  }


  fill(127, 255, 212);
  noStroke();

  if (startMessages) {
    if (currentMessage === "NO!") {
      textAlign(CENTER, CENTER);
      textSize(min(width, height) * 0.8);
      text(currentMessage, width / 2, height / 2);
    } else {
      textAlign(CENTER, TOP);
      textSize(28);
      text(currentMessage, width / 2, 20);
    }

    if (millis() - lastChangeTime > messageDelay) {
      messageIndex = min(messageIndex + 1, messages.length - 1);
      currentMessage = messages[messageIndex];
      lastChangeTime = millis();
    }
  }
}

function gotFaces(results) {
  faces = results;
}

function avgPoint(points) {
  let sumX = 0, sumY = 0;
  for (let pt of points) {
    sumX += pt.x;
    sumY += pt.y;
  }
  return { x: sumX / points.length, y: sumY / points.length };
}
