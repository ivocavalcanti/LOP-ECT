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
function setup() {
  createCanvas(500, 500);
  frameRate(60);  
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
  if (xi > width){
    xi = random(-400,-40) // demorar para aparecer na tela
  }
  fill(10,150,10); // cor do quadrado
  ellipse(xi, yi, raioI, raioI); // elipse inimiga
  xi = xi + 3; 
  if (xi > width){
    xi = random(-400,-30); // valor aleatorio, aparecer depois
  } 
  
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    xdi = xj; // igualhando com a posição do jogador
    ydi = yj;
  }
  fill(20,20,40); // cor da bala
  if (disparo) {
    ellipse(xdi,ydi,raiodi,raiodi) // dimensão do disparo
    ydi = ydi - 10; // andamento do tiro
    if(dist(xdi,ydi,xi,yi) < raioI){
      xi = 0;
      pontos= pontos +1;
      disparo = false;
      if(colisao == false) {
      colisao = true;
      }
    }       
   	if ( ydi < length ) {
      disparo = false;
    }
  }
  if (dist(xi,yi,xj,yj) < 40){
      xj = 250;
      yj = 450;
      vidas--;
    }
  textSize(20); // textos, tamanho
  fill(200,400,400);
  text("Vidas: "+vidas, 380, 60); // apresentar na tela vidas
  text("Pontos: "+pontos, 380, 80); // apresentar na tela pontos
}
