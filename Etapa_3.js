var x = 15;
var y = 15;
var xj = 15; // jogador
var yj = 15; // jogador
function setup() {
  createCanvas(400, 400);
  frameRate(30);  
}

function draw() {
  background(100); // plano de fundo
  ellipse(xj, yj, 25,25); // elipse controlada pelo teclado
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
  if (x > width){
    x = random(-400,-40) // demorar para aparecer na tela
  }
  
  rect(x, 247, 40, 40); // retangulo
  x = x + 3; 
  if (x > width){
    x = random(-400,-30); // valor aleatorio, aparecer depois
  } 
   
}
