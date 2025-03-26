let started = false; // Variable de control

let paddle;
let bricks = [];
let w, h;
let gameStarted = false;
let gameInfo = true;
let gameOver = false;
let gameWon = false;
let score = 0;
let lives = 3;

let WallPaper1;
let WallPaper2;
let WallPaper3;
let WallPaper4;
let WallPaper5;
let WallPaper6;
let WallPaper7;
let WallPaper8;
let WallPaper9;
let WallPaper10;
let MaxPuntuation;
let Diff;
let BallIMG;
let DuckTable;

let Musica;

let RED = 255;
let GREEN = 0;
let BLUE = 0;

let WallpaperANT = 0;
let WallpaperAct = 0;
let Tint = 255;

let FirstTime = false;

let millisAnt = 0;

let Fuente;

let Started = false;

let millisANTpartida = 0;

function preload() {
 
  WallPaper1 = loadImage("Assets/1.png");
  WallPaper2 = loadImage("Assets/2.png");
  WallPaper3 = loadImage("Assets/3.png");
  WallPaper4 = loadImage("Assets/4.png");
  WallPaper5 = loadImage("Assets/5.png");
  WallPaper6 = loadImage("Assets/6.png");
  WallPaper7 = loadImage("Assets/7.png");
  WallPaper8 = loadImage("Assets/8.png");
  WallPaper9 = loadImage("Assets/9.png");
  WallPaper10 = loadImage("Assets/10.png");
  BallIMG = loadImage("Assets/SV-Ball.png");
  MaxPuntuation = loadImage("Assets/MaxPuntuation.png");
  Diff = loadImage("Assets/Diff.png");
  DuckTable = loadImage("Assets/DuckTable.png");
  Fuente = loadFont("Assets/nasalization-rg.otf");
  Musica = loadSound("Assets/Musica.mp3");
  
}

function setup() {
  createCanvas(1280, 720);
  
  imageMode(CENTER);

  ball = new Ball(width / 2, height - 94);
  paddle = new Paddle(width / 2, height - 80, 120, 12);
  
  createBricks(1);
  
  Musica.loop();
  
}

function keyPressed() {
  
  /*
    
  if (keyCode === RIGHT_ARROW) {
    paddle.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    paddle.setDir(-1);
  }
  
  if (key == "1") {
    createBricks(1);
  } else if (key == "2") {
    createBricks(2);
  }
  
  if (keyCode === ENTER) {
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
    score = 0;
    lives = 3;
  }
  
  if (key === ' ') {
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false;
  }
  
  */


}

function keyReleased() {
  //paddle.setDir(0);
}

function draw() {
  if (!started) return; // No ejecuta draw() hasta que el usuario haga clic
  
  let tiempo = millis() / 1000;  // Obtener el tiempo transcurrido en segundos
  
  // Ciclo de colores para crear el efecto arcoíris
  RED = 255 * (sin(tiempo) * 0.5 + 0.5);    // Sinusoide para el rojo
  GREEN = 255 * (sin(tiempo + TWO_PI / 3) * 0.5 + 0.5); // Verde desplazado 120° (TWO_PI / 3)
  BLUE = 255 * (sin(tiempo + TWO_PI * 2 / 3) * 0.5 + 0.5); // Azul desplazado 240° (TWO_PI * 2 / 3)
  
  
  if (mouseX > width*0.6) {
    paddle.setDir(1);
  } else if (mouseX < width*0.4) {
    paddle.setDir(-1);
  } else if (mouseX >= width*0.4 && mouseX <= width*0.6) {
    paddle.setDir(0);
  }
  
  if (millis() >= millisANTpartida + 10000 && Started == false) {
    
    Started = true;
    
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false;
  
  }
  
  if (Tint < 255) {
   
  millisAnt = millis();
      
  }
  
  if (millis() >= millisAnt + 10000) {
    
    if (WallpaperAct < 10) {
    
    WallpaperAct = WallpaperAct + 1;
      
    } else {
      
      WallpaperAct = 1;
      
    }
    
    Tint = 0;
    
  }
  
  background(0);
  
  push();
  
  if (WallpaperANT != WallpaperAct) {
      
      if (Tint < 255) {
          
          Tint = Tint + 1;
          
      } else {
        
        WallpaperANT = WallpaperAct;
        FirstTime = true;
        
      }
      
  }
  
  if (WallpaperAct == 1) {
    
  tint(255, 255, 255, Tint);
    
  image(WallPaper1, width/2, height/2, width, height);
    
  } else if (WallpaperAct == 2) {
    
  image(WallPaper1, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper2, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 3) {
             
  image(WallPaper2, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper3, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 4) {
             
  image(WallPaper3, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper4, width/2, height/2, width, height);       
             
  } else if (WallpaperAct == 5) {
             
  image(WallPaper4, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper5, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 6) {
             
  image(WallPaper5, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper6, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 7) {
             
  image(WallPaper6, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper7, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 8) {
             
  image(WallPaper7, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper8, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 9) {
             
  image(WallPaper8, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper9, width/2, height/2, width, height);
             
  } else if (WallpaperAct == 10) {
             
  image(WallPaper9, width/2, height/2, width, height);
             
  tint(255, 255, 255, Tint);
    
  image(WallPaper10, width/2, height/2, width, height);
             
  }
  
  pop();
  
  for (let i = 0; i < lives; i++) {
    image(BallIMG, i*60 + 50, 42, 40, 40); 
  }
  
  textSize(35);
  fill("coral");
  stroke(0);
  strokeWeight(4);
  textAlign(LEFT, CENTER);
  text("Score : " + score, width*0.8, height*0.05);
  
  textSize(40);
  fill(255);
  strokeWeight(4);
  stroke("navy");
  textAlign(CENTER, CENTER);
  text("¡Rompe-bloques!", width*0.5, height*0.05);
  
  textSize(30);
  strokeWeight(2);
  fill("lightgreen");  
  text("Por: AdrianNF", width*0.88, height*0.94);
  
  for (let brick of bricks) {
    brick.render();
  }
  ball.render();
  paddle.render();
  ball.edges();
  ball.end();
  ball.won();

  if (gameInfo && !gameStarted && !gameOver && !gameWon) {
    textFont(Fuente);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill("LightGoldenRodYellow");
    strokeWeight(3);
    stroke(0);
    text("Muevete arriba y abajo para", width / 2, height / 2);
    text("desplazarte a la derecha o a la izquierda", width / 2, height / 2 + 38);
    textSize(40);
    fill("Khaki");
    text("Destruye esos bloques!!!", width / 2, height / 2 + 100);
    ball.pos.x = paddle.pos.x;
  }

  //ball.update();

  if (gameStarted && !gameInfo && !gameOver && !gameWon) {
    paddle.update();
    ball.update();  
    ball.bounce(paddle);
    
    let ABBrick = false;
    for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (ball.colliding(brick)) {
        if (ABBrick === false) {
          ball.bounceOff(brick);
          ABBrick = true;
        }
        score += brick.points;
        bricks.splice(i, 1);
      }
    }
  }
 
  if (gameOver && !gameStarted && !gameInfo && !gameWon) {
    
    if (Started == true) {
    
    millisANTpartida = millis();
      
    Started = false;
      
    }
    
      if (millis() >= millisANTpartida + 10000 && Started == false) {
    
    Started = true;
        
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
    score = 0;
    lives = 3;
    
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false; 
  }
    
    fill("pink");
    textAlign(CENTER, CENTER);
    strokeWeight(5);
    stroke("black");
    textSize(60);
    text("GAME OVER!!", width / 2, height / 2);
    fill("Khaki");
    textSize(30);
    text("¡No te olvides de comprobar tu puntuación!", width / 2, height / 2 + 75);
  }
  
  if (gameWon && !gameOver && !gameStarted && !gameInfo) {
    push();
    tint(255, 255, 255, 160);
    image(MaxPuntuation, width/2, height*0.48, MaxPuntuation.width*2.4, MaxPuntuation.height*2.4);
    pop();
    textAlign(CENTER, CENTER);
    textSize(70);
    stroke("Chartreuse");
    strokeWeight(6);
    fill(BLUE, RED, GREEN);
    text("¡¡¡MÁXIMA PUNTUACIÓN!!!", width / 2, height / 2);
    stroke(0);
    strokeWeight(3);
    text("¡¡¡MÁXIMA PUNTUACIÓN!!!", width / 2, height / 2);
    fill("cyan");
    stroke(0);
    textSize(35);
    text("Guau nunca pense que lo lograrias", width / 2, height / 2 - 100);
    fill("Khaki");
    text("Sacale una foto y eseñaselo a tus amigos.", width / 2, height / 2 + 120);
    
    if (Started == true) {
    
    millisANTpartida = millis();
      
    Started = false;
      
    }
    
  if (millis() >= millisANTpartida + 20000 && Started == false) {
    
    Started = true;
        
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
    score = 0;
    lives = 3;
    
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false; 
  }
    
  }
  
    image(Diff, width/2, height/2, width, height);

}

function createBricks(level) {
  if (level === 1) {
    bricks.splice(0);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 7; j++) {
        w = width / 14; 
        h = 30;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, 7-j));
      }
    }
  } else if (level === 2) {
    bricks.splice(0);
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < j+1; i++) {
        w = width / 14;
        h = 30;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, (2*(14-i)-1) % 8));
      }
    }
  }
}

function mousePressed() {
  if (!started) {
    started = true; // Cambia el estado a iniciado
    console.log("¡El usuario hizo clic! Iniciando...");
  }
}
