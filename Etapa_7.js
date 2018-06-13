var xi = 15; // inimigo
var yi = 167; // inimigo
var xj = 250; // jogador
var yj = 480; // jogador
var disparo = false; // condição do tiro
var xdi, ydi; // disparo
var vidas = 5; // vidas
var pontos = 0; // pontos no jogo
var raiodi = 10;
var raioI = 40;
var colisao = false;
var raioJ = 35;
var vx = []; 
var vy = [];
var vdx = [];
var vdy = [];
var vtam = [];
var qt = 10; 
var tamAren;

function setup() {
  tamAren=500;
  createCanvas(tamAren, tamAren);
  frameRate(30);
  for (i=0;i<qt;i++){
    vx[i] = random(0,tamAren); 
    vy[i] = random(0,tamAren);
    vtam[i] = random(5,15);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);  
  }
  
}

function draw() {
  background(100); // plano de fundo
  fill(300,100,100); // cor do personagem
  ellipse(xj, yj, raioJ,raioJ); // elipse controlada pelo teclado
  if ( keyIsDown(LEFT_ARROW) ){
    xj = xj - 3; 
  }
  if ( keyIsDown(RIGHT_ARROW) ){
  	xj = xj + 3;
  }
  if ( keyIsDown(UP_ARROW) ) {
    yj = yj - 3;
  }
  if ( keyIsDown(DOWN_ARROW) ){
    yj = yj + 3;
  }
for(i=0;i<qt;i++){
  vx[i]=vx[i]+vdx[i];
  vy[i]=vy[i]+vdy[i];
  
  if (vx[i] > width || vx[i]<0){
    vdx[i] = -vdx[i];
  }
  if (vy[i] > height || vy[i] <0){
    vdy[i]= -vdy[i];
  }
  fill(10,150,10); // cor do quadrado
  ellipse(vx[i], vy[i], raioI, raioI); // elipse inimiga
}
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    xdi = xj; // igualhando com a posição do jogador
    ydi = yj;
  }
  fill(20,20,40); // cor da bala
  
  if (disparo) {
    ellipse(xdi,ydi,raiodi,raiodi) // dimensão do disparo
    ydi = ydi - 20; // andamento do tiro
  }
  for(i=0;i<qt;i++){
  if (disparo) {
    if(dist(xdi,ydi,vx[i],vy[i]) < raioI){
      xi = 0;
      pontos= pontos +1;
      disparo = false;
      vx[i]=-90;
      vy[i]=-90;
      if(colisao == false) {
      colisao = true;
      }
    }       
   	if ( ydi < length ) {
      disparo = false;
    }
  }
  }
  for(i=0;i<qt;i++){  // colisão e os inimigos saem do mapa
  if (dist(vx[i],vy[i],xj,yj) < 40){
      xj = 250;
      yj = 450;
      vidas--;
    vx[i]=0;
    vy[i]=0;
    }
  }
  textSize(20); // textos, tamanho
  fill(200,400,400);
  text("Vidas: "+vidas, 380, 60); // apresentar na tela vidas
  text("Pontos: "+pontos, 380, 80); // apresentar na tela pontos
}
