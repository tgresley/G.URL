let images = [
  'https://i.pinimg.com/474x/4c/2c/2d/4c2c2d59d29f7e6cd79e0dbee75d4069.jpg',
  'https://i.pinimg.com/474x/76/00/fb/7600fba53bbbb7c24a57d0c6d8f8fdf4.jpg',
  'https://i.pinimg.com/474x/cb/89/7f/cb897fb7281e87bead29064e8b7030a1.jpg',
  'https://i.pinimg.com/474x/a1/e5/40/a1e5408b1aa4d7ec591b800daf8c67ee.jpg',
  'https://i.pinimg.com/474x/e6/33/a4/e633a479edfaec4ccc7f24b4af5c241e.jpg',
  'https://i.pinimg.com/474x/94/6e/ac/946eac38518da6415945474100b809cd.jpg',
  'https://i.pinimg.com/474x/fc/ce/24/fcce240f5489033fd2b8045b4d607725.jpg',
  'https://i.pinimg.com/474x/e9/28/98/e928984a702f51a22a296a1682d3c679.jpg',
  'https://i.pinimg.com/474x/8b/05/5d/8b055dce33717e9e5be3457d768bcd5f.jpg',
  'https://i.pinimg.com/474x/3a/28/8c/3a288c22186accf8d6557172b8e5b840.jpg',
  'https://i.pinimg.com/474x/df/3f/25/df3f2564005610f3704dfc5858c2f395.jpg',
  'https://i.pinimg.com/474x/53/3c/66/533c66f4a39ca3ba8cf0c3eeaec794a7.jpg',
  'https://i.pinimg.com/474x/d5/f1/61/d5f16169fede26d059bc665934e8ac1e.jpg',
  'https://i.pinimg.com/474x/91/f1/79/91f1798a0149f05a37b123985c74da36.jpg',
  'https://i.pinimg.com/474x/62/ef/1b/62ef1b9d078497c62341b9130e49fcbd.jpg',
  'https://i.pinimg.com/474x/9d/b7/26/9db726dbd31272d055d7645363ca61c0.jpg',
  'https://i.pinimg.com/474x/1b/3e/23/1b3e235e06cfae4f24b3d8e04d10f03f.jpg',
  'https://i.pinimg.com/474x/0c/77/c9/0c77c9d68e0b56b7d387d01fbc23553b.jpg',
  'https://i.pinimg.com/474x/ab/de/ac/abdeacb0ca555487b84c4cd8113b2cc0.jpg',
  'https://i.pinimg.com/474x/ce/11/6e/ce116e797a001eebddc1e3503e4f69f2.jpg',
  'https://i.pinimg.com/474x/ff/eb/a1/ffeba1f6e70d362d98c2e1a3eed06ee1.jpg',
  'https://i.pinimg.com/474x/60/7d/5d/607d5d590359ae44c42362aa6514077b.jpg',
  'https://i.pinimg.com/474x/90/23/d1/9023d15abb1bbe7d43896d9fb1029442.jpg',
  'https://i.pinimg.com/474x/47/d0/4f/47d04f039bf6a74c4c41aa7013df097c.jpg',
  'https://i.pinimg.com/474x/47/42/9a/47429aac315cb313674bac940e6379e5.jpg',
  'https://i.pinimg.com/474x/f8/a5/88/f8a588b4fb8bdc2624a43acbdb28efc3.jpg',
  'https://i.pinimg.com/474x/d9/02/96/d9029631745121f1135a056b210c7220.jpg',
  'https://i.pinimg.com/474x/91/83/06/9183065bba8d972656092b8202fb2c9e.jpg',
  'https://i.pinimg.com/474x/a1/51/dd/a151dde2ee271e0175d3800d320af859.jpg',
  'https://i.pinimg.com/474x/ef/7a/d6/ef7ad630a176476ecf45886bc0088ef6.jpg',
  'https://i.pinimg.com/474x/d1/84/de/d184de45726eba6a20b0a1640826e2ed.jpg',
  'https://i.pinimg.com/474x/4b/77/6f/4b776fde0579b31f08b76b0441973138.jpg',
  'https://i.pinimg.com/474x/4f/8c/53/4f8c535fc83323c39f6fa384bec4a7d6.jpg',
  'https://i.pinimg.com/474x/c2/48/8c/c2488c6de74c0fde370d8f5fbc999528.jpg',
  'https://i.pinimg.com/474x/c1/cf/ad/c1cfad04a111e5640fa1f8909fe3a2ae.jpg',
  'https://i.pinimg.com/474x/99/0e/6a/990e6afc138568f50c789f23eb26c2bf.jpg',
  'https://i.pinimg.com/736x/3a/99/e2/3a99e24b3a90f6d3eff33b9591241ea4.jpg',
  'https://i.pinimg.com/736x/31/e0/be/31e0be0e932c83d2e3486c27fa7b6f57.jpg',
  'https://i.pinimg.com/736x/91/e1/14/91e114e2773f4d9233c31f1ad3913c7a.jpg',
  'https://i.pinimg.com/736x/0e/1b/57/0e1b57e3e99c9451371053b9afe9cc6e.jpg',
  'https://i.pinimg.com/736x/30/ef/90/30ef90cf50d0393a819c20e4c3aa1729.jpg',
  'https://i.pinimg.com/736x/5c/b0/ab/5cb0abb1e446eb3b43e94cd35794dea4.jpg',
  'https://i.pinimg.com/736x/cc/39/76/cc3976988d5b67304c62d4b86d09e11a.jpg'
];

let gifElement, framegifElement, imgElement, frameElement;
let font, canvas;
let showText = true;
let button, downloadButton;
let overlay;
let sound;
let hasPlayedSound = false;

function preload() {
  font = loadFont('./assets/impact.ttf');
  sound = loadSound ('./assets/fuckthepain.mp3')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '2');

  gifElement = createImg('./assets/B175.gif');
  setupFullScreenElement(gifElement, '1');

  framegifElement = createImg('./assets/f');
  setupFullScreenElement(framegifElement, '1');

  imgElement = createImg('', 'random image');
  setupCenteredMedia(imgElement, '3');
  imgElement.hide();

  frameElement = createImg('./assets/frame2.gif', 'frame');
  setupCenteredMedia(frameElement, '3');
  frameElement.hide();

  overlay = createDiv('');
  overlay.size(windowWidth, windowHeight);
  overlay.position(0, 0);
  overlay.style('position', 'absolute');
  overlay.style('z-index', '5');
  overlay.mousePressed(() => {
    showText = false;
    overlay.hide();
    gifElement.hide();
    framegifElement.hide();
    showButtons();
    loadRandomImage();
  });
}

function draw() {
  clear();
  if (showText) {
    textFont(font);
    textSize(84);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(6);
    text('my g.url meme is my rite', width / 2, height / 2);
  }
}

function setupFullScreenElement(el, z) {
  el.position(0, 0);
  el.style('position', 'absolute');
  el.style('top', '50%');
  el.style('left', '50%');
  el.style('transform', 'translate(-50%, -50%)');
  el.style('width', '100vw');
  el.style('height', '100vh');
  el.style('z-index', z);
}

function setupCenteredMedia(el, z) {
  el.position(0, 0);
  el.style('position', 'absolute');
  el.style('top', '50%');
  el.style('left', '50%');
  el.style('transform', 'translate(-50%, -50%)');
  el.style('max-width', '90vw');
  el.style('max-height', '90vh');
  el.style('z-index', z);
}

function showButtons() {
  button = createButton("find the most esoteric girl meme");
  button.style('z-index', '4');
  button.style('cursor', 'url("./cursor/billyray.cur"), pointer');
  button.mousePressed(loadRandomImage);

  downloadButton = createButton("download your favourite");
  downloadButton.style('z-index', '4');
  downloadButton.style('cursor', 'url("./cursor/billyray.cur"), pointer');
  downloadButton.mousePressed(() => {
    if (imgElement && imgElement.elt.src) {
      const link = document.createElement('a');
      link.href = imgElement.elt.src;
      link.download = 'gurlmeme.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}


function loadRandomImage() {

  if (!hasPlayedSound && sound && !sound.isPlaying()) {
  sound.play();
  hasPlayedSound = true;
}


  const url = random(images);
  imgElement.attribute('src', url);
  imgElement.hide();
  frameElement.hide();

  imgElement.elt.onload = () => {
    const imgW = imgElement.elt.naturalWidth;
    const imgH = imgElement.elt.naturalHeight;
    const maxW = windowWidth * 0.5;
    const maxH = windowHeight * 0.7;
    const scale = min(maxW / imgW, maxH / imgH);

    const displayW = imgW * scale;
    const displayH = imgH * scale;

    imgElement.size(displayW, displayH);
    frameElement.size(displayW, displayH);
    imgElement.show();
    frameElement.show();

    // Image center
    const centerX = width / 2;
    const centerY = height / 2;

    // Position buttons centered vertically, flanking image horizontally
    const spaceFromImage = 40;
    const buttonY = centerY - 20; // approx center, can fine-tune
    const leftX = centerX - displayW / 2 - button.width - spaceFromImage;
    const rightX = centerX + displayW / 2 + spaceFromImage;

    if (button && downloadButton) {
      button.position(leftX, buttonY);       // Left of image
      downloadButton.position(rightX, buttonY); // Right of image
    }
  };
}

