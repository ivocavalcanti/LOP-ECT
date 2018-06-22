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
var qt = 25; 
var tamAren;
var vidas = 12; // vidas
var pontos = 0; // pontos no jogo
var nivel = 1; 
var limitepontos = 5;
var tela=1;
var jogo=true;
var img;
var img2;
var img3;
var img4;
var img5;
var img6;

function preload() {
  img = loadImage('meteoro.png');
  img2 = loadImage('space.png');
  img3 = loadImage('nave1.png');
  img4 = loadImage('PRESS_ENTER.png');
  img5 = loadImage('YOU_WON.png');
  img6 = loadImage('GAME_OVER.png');
}

function setup() {
   
  tamAren=500;
  createCanvas(tamAren, tamAren);
  frameRate(30);
  for (i=0;i<25;i++){
    vx[i] = random(0,tamAren); 
    vy[i] = random(0,tamAren);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);  
  }
  
}

function draw() {
  if ( tela == 1) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    image(img4,150, 200);
    //text("ENTER", 200, 250);
    if (keyIsDown(ENTER) ) {
       tela = 2;  
    } 
  }
  if ( tela == 2) {
  background(img2); // plano de fundo
  image(img2,0,0);
  fill(300,100,100); // cor do personagem
  ellipse(img3, xj, yj, raioJ,raioJ); // elipse controlada pelo teclado
  image(img3,xj, yj, raioJ, raioJ);
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

for(i=0;i<5*nivel;i++){
  vx[i]=vx[i]+vdx[i];
  vy[i]=vy[i]+vdy[i];
  
  if (vx[i] > width || vx[i]<0){
    vdx[i] = -vdx[i];
  }
  if (vy[i] > height || vy[i] <0){
    vdy[i]= -vdy[i];
  }
  fill(10,150,10); // cor do quadrado
  ellipse(img, vx[i], vy[i], raioI, raioI); // elipse inimiga
  image(img,vx[i], vy[i], raioI, raioI);
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
  for(i=0;i<5*nivel;i++){
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
  for(i=0;i<5*nivel;i++){  // colisão com o inimigos, volta pro P. inicial
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
  if(pontos == limitepontos){
    nivel=nivel+1;
    limitepontos= limitepontos + (5*nivel);
    for(i=0;i<5*(nivel-1);i++){
    vx[i] = random(0,tamAren); 
    vy[i] = random(0,tamAren);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);  
    }
  }
  if (pontos == 75 ) {
        tela = 3; 
    }
    if(vidas < 1){
      background(0);
    textSize(32); 
    fill(135,206,235);
    image(img6,50, 70);
    //text("GAME OVER", 140, 250);
    textSize(16);
    text("DESEJA JOGAR NOVAMENTE? (s/n)", 110, 380);
     /* if(keyPressed(115)){
        tela=1;
        nivel=1;
        pontos=0;
        vida=10;
        for (i=0;i<25;i++){
    vx[i] = random(0,tamAren); 
    vy[i] = random(0,tamAren);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);  
  }
      }*/
    }
    if ( tela == 3) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    image(img5,123, 190);
    //text("PARABÉNS JOGO COMPLETO", 20, 250);
    textSize(16);
    text("DESEJA JOGAR NOVAMENTE? (s/n)", 110, 350);
      /*if(keyPressed(115)){
        tela=1;
        nivel=1;
        pontos=0;
        vida=10;
        for (i=0;i<25;i++){
    vx[i] = random(0,tamAren); 
    vy[i] = random(0,tamAren);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);  
  }
      }*/
  }
  }
  }
