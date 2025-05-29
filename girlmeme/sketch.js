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
  'https://i.pinimg.com/474x/99/0e/6a/990e6afc138568f50c789f23eb26c2bf.jpg'
];

let gifElement;
let imgElement;
let font;
let showText = true;
let canvas;
let frameElement;

function preload() {
  font = loadFont('./impact.ttf', 
    () => console.log('Font loaded'), 
    () => console.error('Font failed to load')
  );
}

function setup() {
  // Create canvas and layer it between the GIF and image
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '2'); // Above the GIF, below the image

  // Load and show intro GIF
  gifElement = createImg('./B175.gif', 'intro gif');
  gifElement.position(0, 0);
  gifElement.style('position', 'absolute');
  gifElement.style('top', '50%');
  gifElement.style('left', '50%');
  gifElement.style('transform', 'translate(-50%, -50%)');
  gifElement.style('width', '100vw');
  gifElement.style('height', '100vh');
  gifElement.style('z-index', '1'); // Bottom layer

  framegifElement= createImg('./frame2.gif', 'intro gif');
  framegifElement.position(0, 0);
  framegifElement.style('position', 'absolute');
  framegifElement.style('top', '50%');
  framegifElement.style('left', '50%');
  framegifElement.style('transform', 'translate(-50%, -50%)');
  framegifElement.style('width', '100vw');
  framegifElement.style('height', '100vh');
  framegifElement.style('z-index', '1'); // Bottom layer

  // Create and hide the random image element
  imgElement = createImg('', 'random image');
  imgElement.position(0, 0);
  imgElement.style('position', 'absolute');
  imgElement.style('top', '50%');
  imgElement.style('left', '50%');
  imgElement.style('transform', 'translate(-50%, -50%)');
  imgElement.style('max-width', '90vw');
  imgElement.style('max-height', '90vh');
  imgElement.style('z-index', '3'); // Above everything
  imgElement.hide();

    frameElement = createImg('./frame2.gif', 'gif frame'); // Use your frame GIF path
  frameElement.position(0, 0);
  frameElement.style('position', 'absolute');
  frameElement.style('top', '50%');
  frameElement.style('left', '50%');
  frameElement.style('transform', 'translate(-50%, -50%)');
  frameElement.style('max-width', '90vw');
  frameElement.style('max-height', '90vh');
  frameElement.style('z-index', '3'); // Same as image
  frameElement.hide();

  // Button to load random image
  let button = createButton("find the most esoteric girl meme");
  button.position(120, 520);
  button.style('z-index', '4'); // Keep button on top

  button.mousePressed(loadRandomImage);


 let DLBUTTON = createButton("download your favourite");
DLBUTTON.position(120, 580);
DLBUTTON.style('z-index', '4');
DLBUTTON.mousePressed(() => {
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

function draw() {
  clear();
  if (showText) {
    textFont(font);
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);           // White text
    stroke(0);           // Black outline
    strokeWeight(8);
    text('my g.url meme is my rite', width / 2, height / 2);
  }
}

function loadRandomImage() {
  let imgURL = random(images);
  imgElement.attribute('src', imgURL);
  imgElement.hide();
  frameElement.hide();

  gifElement.hide();
  framegifElement.hide();
  showText = false;

  imgElement.elt.onload = () => {
    const imgW = imgElement.elt.naturalWidth;
    const imgH = imgElement.elt.naturalHeight;
    const maxW = windowWidth * 0.5;
    const maxH = windowHeight * 0.7;

    const scale = Math.min(maxW / imgW, maxH / imgH);
    const displayW = imgW * scale;
    const displayH = imgH * scale;

    // Apply new sizing and keep using centered CSS
    imgElement.size(displayW , displayH);
    frameElement.size(displayW, displayH);

    // Centered via CSS transform — keep positioning at 50%, 50%
    imgElement.style('top', '50%');
    imgElement.style('left', '50%');
    imgElement.style('transform', 'translate(-50%, -50%)');

    frameElement.style('top', '50%');
    frameElement.style('left', '50%');
    frameElement.style('transform', 'translate(-50%, -50%)');

    imgElement.show();
    frameElement.show();
  };
}


