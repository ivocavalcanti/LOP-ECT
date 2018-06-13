var xi = 15; // inimigo
var yi = 167; // inimigo
var xj = 250; // jogador
var yj = 480; // jogador
var disparo = false; // condição do tiro
var xdi, ydi; // disparo
var raiodi = 10;
var raioI = 40;
var colisao = false;
var raioJ = 35;
var vx = []; 
var vy = [];
var vdx = [];
var vdy = [];
var vtam = [];
var qt = 30; 
var tamAren;
var vidas = 5; // vidas
var pontos = 0; // pontos no jogo
var nivel = 1; 
var limitepontos = 9;
var tela=1;

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
  if ( tela == 1) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    text("ENTER", 200, 250);
    if (keyIsDown(ENTER) ) {
       tela = 2;  
    } 
  }
  if ( tela == 2) {
  background(0); // plano de fundo
  fill(300,100,100); // cor do personagem
  ellipse(xj, yj, raioJ,raioJ); // elipse controlada pelo teclado
  if ( keyIsDown(LEFT_ARROW) ){
    xj = xj - 5; 
  }
  if ( keyIsDown(RIGHT_ARROW) ){
    xj = xj + 5;
  }
  if ( keyIsDown(UP_ARROW) ) {
    yj = yj - 5;
  }
  if ( keyIsDown(DOWN_ARROW) ){
    yj = yj + 5;
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
  fill(255, 204, 0); // cor da bala
  
  if (disparo) {
    ellipse(xdi,ydi,raiodi,raiodi) // dimensão do disparo
    ydi = ydi - 20; // andamento do tiro
  }
  for(i=0;i<qt;i++){
  if (disparo) {
    if(dist(xdi,ydi,vx[i],vy[i]) < raioI){
      xi = 0;
      pontos++;
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
  text("Nível: "+nivel, 20, 60);
  if(pontos>limitepontos){
    nivel=nivel+1;
    limitepontos= limitepontos +10;
  }
  if (pontos == 20 ) {
        tela = 3; 
    }
    if ( tela == 3) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    text("FIM DE JOGO", 150, 250);
    if (keyIsDown(32) ) {
       tela = 1;
    } 
  }
}
}
