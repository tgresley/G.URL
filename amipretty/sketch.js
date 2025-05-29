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

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  image(video, 0, 0, width, height);

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
      color(255, 105, 180), // pink
      color(255, 192, 203), // light pink
     color(255, 192, 203), // light pink
    color(194, 255, 110),
   color(194, 255, 110),
      color(255, 105, 97)   // coral pink
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

    // Aquamarine analysis-style data
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

    text("EYE DISTANCE:   " + eyeDist.toFixed(2), 10, dataY);
    text("MOUTH WIDTH:    " + mouthWidth.toFixed(2), 10, dataY + lineHeight);
    text("HEAD TILT:      " + tiltAngle + "°", 10, dataY + 2 * lineHeight);
    text("SMILE LEVEL:    " + nf(mouthWidth / eyeDist, 1, 2), 10, dataY + 3 * lineHeight);
  }

  if (startMessages) {
    fill(127, 255, 212);
    noStroke();
    textAlign(CENTER, TOP);
    textSize(32);
    text(currentMessage, width / 2, 10);

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
