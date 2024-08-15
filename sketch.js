let palavra;
let som;
let imagem;

function setup() {
  createCanvas(601, 601);
  palavra = diogo();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem.webp");
  som = loadSound("som.mp3");
}

function draw() {
  
  batata();
  diogo();
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio,301,301);
}

function batata(){
  background("lightgreen");
  image(imagem,0,0,601,601)
  fill("black");
  textSize(69);
  textAlign(CENTER,CENTER);
}

function diogo(){
  let palavras = ["Ferrari","Feririri","Ferrari 812"];
  return random(palavras);
}