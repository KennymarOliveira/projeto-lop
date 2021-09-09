var xb1, yb1, xb2, yb2, xb3, yb3, xcMenu, ycMenu, e, pos, num1, num2, num3, palavra1, palavra2, palavra3, fs, imgProgramador, imgDocente, imgN1, imgEspantalho, imgPilha, imgToalha, imgMilho, imgGalinha, imgMontanha, imgDinheiro, imgGolfinho, imgChocolate, imgMochila, imgCachorro, imgChapeu, imgFundo, imgVida, xBotaoNH, xBotaoLH, xBotaoCH, yBotaoNH, yBotaoLH, yBotaoCH, xcN1, ycN1, respostaN1, xBCP1, yBCP1, xcP1, ycP1, yTNE1, yVME1, ycE1, contadorDeVidas, imgAbelha, imgAgulha, imgAranha, imgBanheira, imgCachimbo, imgCachoeira, imgCaminhao, imgCegonha, imgChave, imgChinelo, imgChuveiro, imgCoelho, imgConcha, imgCozinheira, imgFolha, imgIlha, imgJoaninha, imgMachado, imgMinhoca, imgNinho, imgOlho, imgOvelha, imgPalhaço, imgSanduiche, letra, respostaN2, respostaN3, xBCP2, yBCP2, xcP2, ycP2, yTNE2, yVME2, ycE2, tempoN1, tempoN2, tempoN3, xcN3, ycN3, xBotaoNH3, xBotaoLH3, xBotaoCH3, yBotaoNH3, yBotaoLH3, yBotaoCH3, xBCP3, yBCP3, xcP3, ycP3, yTNE3, yVME3, ycE3, somDeFundo, somCerto, somErrado;

function preload() {
  imgDocente = loadImage("/docente.png");
  imgProgramador = loadImage("/programador.png");
  imgEspantalho = loadImage("/espantalho.png");
  imgPilha = loadImage("/pilha.png");
  imgToalha = loadImage("/toalha.png");
  imgMilho = loadImage("/milho.png");
  imgGalinha = loadImage("/galinha.png");
  imgMontanha = loadImage("/montanha.png");
  imgDinheiro = loadImage("/dinheiro.png");
  imgGolfinho = loadImage("/golfinho.png");
  imgChocolate = loadImage("/chocolate.png");
  imgMochila = loadImage("/mochila.png");
  imgCachorro = loadImage("/cachorro.png");
  imgChapeu = loadImage("/chapeu.png");
  imgFundo = loadImage("/fundo.png");
  imgVida = loadImage("/vida.png");
  imgAbelha = loadImage("/abelha.png");
  imgAgulha = loadImage("/agulha.png");
  imgAranha = loadImage("/aranha.png");
  imgBanheira = loadImage("/banheira.png");
  imgCachimbo = loadImage("/cachimbo.png");
  imgCachoeira = loadImage("/cachoeira.png");
  imgCaminhao = loadImage("/caminhao.png");
  imgCegonha = loadImage("/cegonha.png");
  imgChave = loadImage("/chave.png");
  imgChinelo = loadImage("/chinelo.png");
  imgChuveiro = loadImage("/chuveiro.png");
  imgCoelho = loadImage("/coelho.png");
  imgConcha = loadImage("/concha.png");
  imgCozinheira = loadImage("/cozinheira.png");
  imgFolha = loadImage("/folha.png");
  imgIlha = loadImage("/ilha.png");
  imgJoaninha = loadImage("/joaninha.png");
  imgMachado = loadImage("/machado.png");
  imgMinhoca = loadImage("/minhoca.png");
  imgNinho = loadImage("/ninho.png");
  imgOlho = loadImage("/olho.png");
  imgOvelha = loadImage("/ovelha.png");
  imgPalhaço = loadImage("/palhaço.png");
  imgSanduiche = loadImage("/sanduiche.png");
  soundFormats('mp3', "ogg");
  somDeFundo = loadSound("/fundo.mp3", som);
}

function som() {
  somDeFundo.play();
} 

function setup() {
  createCanvas(600, 400);
  xb1 = 225;
  yb1 = 120;
  xb2 = 225;
  yb2 = 175;
  xb3 = 225;
  yb3 = 230;
  xcMenu = 225;
  ycMenu = 120;
  e = 1;
  pos = 1;
  //números aleatórios para sortear as imagens dos níveis
  num1 = parseInt(Math.random() * 36);
  num2 = parseInt(Math.random() * 36);
  num3 = parseInt(Math.random() * 36);
  palavra1 = "";
  palavra2 = "";
  palavra3 = "";
  contadorDeVidas = 3;
  xBotaoNH = 200;
  yBotaoNH = 320;
  xBotaoLH = 275;
  yBotaoLH = 320;
  xBotaoCH = 350;
  yBotaoCH = 320;
  xcN1 = 200;
  ycN1 = 320;
  xBCP1 = 225;
  yBCP1 = 260;
  xcP1 = 225;
  ycP1 = 260;
  yTNE1 = 260;
  yVME1 = 320;
  ycE1 = 260;
  letra = "";
  ycN2 = 320;
  xBCP2 = 225;
  yBCP2 = 260;
  xcP2 = 225;
  ycP2 = 260;
  yTNE2 = 260;
  yVME2 = 320;
  ycE2 = 260;
  tempoN1 = 0;
  tempoN2 = 0;
  tempoN3 = 0;
  xcN3 = 200;
  ycN3 = 320;
  xBotaoNH3 = 200;
  yBotaoNH3 = 320;
  xBotaoLH3 = 275;
  yBotaoLH3 = 320;
  xBotaoCH3 = 350;
  yBotaoCH3 = 320;
  xBCP3 = 225;
  yBCP3 = 260;
  xcP3 = 225;
  ycP3 = 260;
  yTNE3 = 260;
  yVME3 = 320;
  ycE3 = 260;
}

function draw() {
  if(e == 1){
    menu();
  } else if (e == 2) {
    nivel1();
  } else if (e == 3) {
    instrucoes();
  } else if (e == 4) {
    creditos();
  } else if (e == 5) {
    passou1();
  } else if (e == 6) {
    errou1();
  } else if (e == 7) {
    nivel2();
  } else if (e == 8) {
    passou2();
  } else if (e == 9) {
    errou2();
  } else if (e == 10) {
    nivel3();
  } else if (e == 11) {
    passou3();
  } else if (e == 12) {
    errou3();
  } else if (e == 13) {

  } else if (e == 14) {

  } else if (e == 100){
    gameOver();
  }
}

function keyPressed() {
if(e == 1){
    if(keyCode == UP_ARROW){
        if(ycMenu == yb3){
      ycMenu = yb2;
      pos = 2;
    } else if (ycMenu == yb2) {
      ycMenu = yb1;
      pos = 1;
    } else if (ycMenu == yb1) {
      ycMenu = yb1;
      pos = 1;
    }
  }
  if(keyCode == DOWN_ARROW){
    if(ycMenu == yb1){
      ycMenu = yb2;
      pos = 2;
    } else if (ycMenu == yb2) {
      ycMenu = yb3;
      pos = 3;
    } else if (ycMenu == yb3){
      ycMenu = yb3;
      pos = 3;
    }
  }
  if(keyCode == ENTER){
    if(pos == 1){
      e = 2;
      pos = 4;
      xcN1 = xBotaoNH;
    } else if (pos == 2) {
      e = 3;
    } else if (pos == 3) {
      e = 4;
    }
    }
} else if(e == 2) {
    if(keyCode == RIGHT_ARROW){
    if(xcN1 == xBotaoNH){
        xcN1 = xBotaoLH;
        pos = 5;
    } else if (xcN1 == xBotaoLH) {
        xcN1 = xBotaoCH;
        pos = 6;
    } else if (xcN1 == xBotaoCH) {
        xcN1 = xBotaoCH;
        pos = 6;
    }   
    }
    if(keyCode == LEFT_ARROW){
    if(xcN1 == xBotaoCH){
        xcN1 = xBotaoLH;
         pos = 5;
    } else if (xcN1 == xBotaoLH) {
        xcN1 = xBotaoNH;
        pos = 4;
    } else if (xcN1 == xBotaoNH) {
        xcN1 = xBotaoNH;
        pos = 4;
    }
    }
    if(keyCode == ENTER){
        if((pos == 4) && (respostaN1 == 1)){
            e = 5;
            pos = 7;
            xcP1 = xBCP1;
        } else if ((pos == 5) && (respostaN1 == 2)){
            e = 5;
            pos = 7;
            xcP1 = xBCP1;
        } else if ((pos == 6) && (respostaN1 == 3)){
            e = 5;
            pos = 7;
            xcP1 = xBCP1;
        } else {
            if(contadorDeVidas == 1){
              e = 100;
            } else {
            e = 6;
            pos = 8;
            ycE1 = yTNE1;
            contadorDeVidas--;
            }
        }
    }
} else if (e == 5) {
  if(keyCode == ENTER){
    if((pos == 7) && (xcP1 == xBCP1) && (ycP1 == yBCP1)){
      e = 7;
    }
  }
} else if (e == 6){
  if(keyCode == DOWN_ARROW){
     if(ycE1 == yTNE1){
       ycE1 = yVME1;
       pos = 9;
     } else if (ycE1 == yVME1){
       ycE1 = yVME1;
       pos = 9;
     }
  }
  if(keyCode == UP_ARROW){
    if(ycE1 == yVME1){
      ycE1 = yTNE1;
      pos = 8;
    } else if(ycE1 == yTNE1) {
      ycE1 = yTNE1;
      pos = 8;
    }
  }
  if(keyCode == ENTER){
    if(pos == 8){
     e = 2;
     pos = 4;
     xcN1 = xBotaoNH;
     tempoN1 = 0;
     tempoN2 = 0;
     tempoN3 = 0;
    } else if (pos == 9){
     e = 1;
     pos = 1;
     ycMenu = yb1;
     tempoN1 = 0;
     tempoN2 = 0;
     tempoN3 = 0;
     num1 = parseInt(Math.random() * 36);
     num2 = parseInt(Math.random() * 36);
     num3 = parseInt(Math.random() * 36);
    }
  }
} else if (e == 7) {
  if(keyCode == 76){
    letra = "l";
  }
  if(keyCode == 78){
    letra = "n";
  }
  if(keyCode == 67){
    letra = "c";
  }
  if(keyCode == ENTER){
    if(letra == ""){
      /*Não acontece nada quando se aperta enter sem ter digitado alguma letra, pois seria injusto perder uma vida por um toque acidental*/
    } else {
    if((respostaN2 == 1) && (letra == "n")){
      e = 8;
      pos = 10;
    } else if ((respostaN2 == 2) && (letra == "l")) {
      e = 8;
      pos = 10;
    } else if ((respostaN2 == 3) && (letra == "c")) {
      e = 8;
      pos = 10;
    } else {
      if(contadorDeVidas == 1){
         e = 100;
     } else {
       e = 9;
       pos = 11;
       ycE2 = yTNE2;
       contadorDeVidas--;
     }
    }
    }
  }
}  else if (e == 8) {
  if(keyCode == ENTER){
    if((pos == 10) && (xcP2 == xBCP2) && (ycP2 == yBCP2)){
      e = 10;
      pos = 13;
      xcN3 = xBotaoNH3;
    }
  }
} else if (e == 9) {
  if(keyCode == DOWN_ARROW){
    if(ycE2 == yTNE2){
       ycE2 = yVME2;
       pos = 12;
     } else if (ycE2 == yVME2){
       ycE2 = yVME2;
       pos = 12;
     }
  }
  if(keyCode == UP_ARROW){
    if(ycE2 == yVME2){
      ycE2 = yTNE2;
      pos = 11;
    } else if(ycE2 == yTNE2) {
      ycE2 = yTNE2;
      pos = 11;
    }
  }
  if(keyCode == ENTER){
    if(pos == 11){
      e = 7;
      letra = "";
    } else if (pos == 12){
      e = 1;
      pos = 1;
      ycMenu = yb1;
      num1 = parseInt(Math.random() * 36);
      num2 = parseInt(Math.random() * 36);
      num3 = parseInt(Math.random() * 36);
    }
  }
} else if(e == 10) {
    if(keyCode == RIGHT_ARROW){
    if(xcN3 == xBotaoNH3){
        xcN3 = xBotaoLH3;
        pos = 14;
    } else if (xcN3 == xBotaoLH3) {
        xcN3 = xBotaoCH3;
        pos = 15;
    } else if (xcN3 == xBotaoCH3) {
        xcN3 = xBotaoCH3;
        pos = 15;
    }   
    }
    if(keyCode == LEFT_ARROW){
    if(xcN3 == xBotaoCH3){
        xcN3 = xBotaoLH3;
        pos = 14;
    } else if (xcN3 == xBotaoLH3) {
        xcN3 = xBotaoNH3;
        pos = 13;
    } else if (xcN3 == xBotaoNH3) {
        xcN3 = xBotaoNH3;
        pos = 13;
    }
    }
    if(keyCode == ENTER){
        if((pos == 13) && (respostaN3 == 1)){
            e = 11;
            pos = 16;
            xcP3 = xBCP3;
        } else if ((pos == 14) && (respostaN3 == 2)){
            e = 11;
            pos = 16;
            xcP3 = xBCP3;
        } else if ((pos == 15) && (respostaN3 == 3)){
            e = 11;
            pos = 16;
            xcP3 = xBCP3;
        } else {
            if(contadorDeVidas == 1){
              e = 100;
            } else {
            e = 12;
            pos = 17;
            ycE2 = yTNE2;
            contadorDeVidas--;
            }
        }
    }      
} else if (e == 11) {
  if(keyCode == ENTER){
    if((pos == 16) && (xcP3 == xBCP3) && (ycP3 == yBCP3)){
      e = 1;
      pos = 1;
      ycMenu = yb1;
      tempoN1 = 0;
      tempoN2 = 0;
      tempoN3 = 0;
      num1 = parseInt(Math.random() * 36);
      num2 = parseInt(Math.random() * 36);
      num3 = parseInt(Math.random() * 36);
    }
  }
} else if (e == 12){
  if(keyCode == DOWN_ARROW){
     if(ycE3 == yTNE3){
       ycE3 = yVME3;
       pos = 18;
     } else if (ycE3 == yVME3){
       ycE3 = yVME3;
       pos = 18;
     }
  }
  if(keyCode == UP_ARROW){
    if(ycE3 == yVME3){
      ycE3 = yTNE3;
      pos = 17;
    } else if(ycE3 == yTNE3) {
      ycE3 = yTNE3;
      pos = 17;
    }
  }
  if(keyCode == ENTER){
    if(pos == 17){
     e = 10;
     pos = 13;
     xcN3 = xBotaoNH3;
     tempoN1 = 0;
     tempoN2 = 0;
     tempoN3 = 0;
    } else if (pos == 18){
     e = 1;
     pos = 1;
     ycMenu = yb1;
     tempoN1 = 0;
     tempoN2 = 0;
     tempoN3 = 0;
     num1 = parseInt(Math.random() * 36);
     num2 = parseInt(Math.random() * 36);
     num3 = parseInt(Math.random() * 36);
    }
  }
}
if(keyCode == BACKSPACE){
  e = 1;
  pos = 1;
  ycMenu = yb1;
  contadorDeVidas = 3;
  letra = "";
  tempoN1 = 0;
  tempoN2 = 0;
  tempoN3 = 0;
  num1 = parseInt(Math.random() * 36);
  num2 = parseInt(Math.random() * 36);
  num3 = parseInt(Math.random() * 36);
}
if(keyCode == 32){
  fs = fullscreen();
  fullscreen(!fs);
  }
}

function menu(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  stroke(0);
  fill(200);
  strokeWeight(1);
  rect(200, 100, 200, 200, 8);

  //Botão iniciar
  fill(255);
  rect(xb1, yb1, 150, 50, 5);
  fill(0);
  textSize(30);
  text("Iniciar", xb1 + 70 - 40, yb1 + 25 + 10);

  //Botão instruções
  fill(255);
  rect(xb2, yb2, 150, 50, 5);
  fill(0);
  textSize(25);
  text("Instruções", xb2 + 15, yb2 + 25 + 10);

  //Botão créditos
  fill(255);
  rect(xb3, yb3, 150, 50, 5);
  fill(0);
  textSize(30);
  text("Créditos", xb3 + 18, yb3 + 25 + 10);

  //Cursor do menu
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcMenu, ycMenu, 150, 50, 5);
}


function creditos(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 4);
  fill("black");
  noStroke();
  textSize(20);
  image(imgProgramador, 230, 20, 140, 170);
  text("Kennymar: Programador", xb2 - 50, yb2 + 40);
  image(imgDocente, 250, 230);
  text("Rummenigge: Docente", xb2 - 40, yb2 + 210);
}

function instrucoes(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 4);
  fill("black");
  noStroke();
  textSize(20);
  text("Este jogo tem como público alvo alunos da\nmateria de língua portuguesa do terceiro\nano do ensino fundamental e irá treinar a\nhabilidade EF03LP03.", xb2 - 120, 50);
  fill(255);
  rect(xb2 - 130, yb2 - 35, 385, 225, 10);
  fill(0);
  textSize(20);
  text("Use as setas para movimentar o cursor,\nenter para selecionar a opção desejada,\na tecla backspace para voltar ao menu\ninicial e a barra de espaço para ativar e\ndesativar o modo de tela cheia.", xb2 - 120, yb2);
  textSize(15);
  text("Tempo máximo para responder:", 105, 300);
  text("Nível 1", 150, 325);
  text("Nível 2", 265, 325);
  text("Nível 3", 380, 325);
  fill("#090638");
  rect(120, 330, 100, 25, 5);
  rect(235, 330, 100, 25, 5);
  rect(350, 330, 100, 25, 5);
  fill(255);
  text("30 segundos", 128, 347);
  text("20 segundos", 243, 347);
  text("10 segundos", 358, 347);
}

function nivel1(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  stroke("black");
  strokeWeight(0);
  fill("black");
  textSize(20);
  text("Qual é o dígrafo correto para esta imagem?", 110, 300);
  
  //Seleção de imagem de acordo com o número aleatório sorteado
switch(num1){
case 0:
image(imgEspantalho, 230, 20, 140, 170);
break;
case 1:
image(imgPilha, 215, 0, 180, 170);
break;
case 2:
image(imgToalha, 230, 20, 140, 170);
break;
case 3:
image(imgMilho, 230, 20, 140, 170);
break;
case 4:
image(imgAbelha, 200, 20, 180, 170);
break;
case 5:
image(imgAgulha, 200, 20, 180, 170);
break;
case 6:
image(imgCoelho, 200, 20, 180, 170);
break;
case 7:
image(imgFolha, 200, 70, 180, 100);
break;
case 8:
image(imgIlha, 200, 20, 180, 170);
break;
case 9:
image(imgOlho, 200, 20, 180, 170);
break;
case 10:
image(imgOvelha, 200, 20, 180, 170);
break;
case 11:
image(imgPalhaço, 230, 20, 180, 170);
break;
case 12:
image(imgGalinha, 240, 20, 140, 170);
break;
case 13:
image(imgMontanha, 230, 20, 140, 170);
break;
case 14:
image(imgDinheiro, 180, -60, 250, 280);
break;
case 15:
image(imgGolfinho, 225, 10, 140, 170);
break;
case 16:
image(imgAranha, 200, 30, 180, 170);
break;
case 17:
image(imgBanheira, 180, 40, 240, 170);
break;
case 18:
image(imgCaminhao, 190, 30, 190, 170);
break;
case 19:
image(imgCegonha, 200, 20, 180, 170);
break;
case 20:
image(imgCozinheira, 235, 30, 100, 180);
break;
case 21:
image(imgJoaninha, 200, 20, 180, 170);
break;
case 22:
image(imgMinhoca, 200, 20, 180, 170);
break;
case 23:
image(imgNinho, 180, 20, 220, 200);
break;
case 24:
image(imgChocolate, 230, 20, 140, 170);
break;
case 25:
image(imgMochila, 230, 20, 140, 170);
break;
case 26:
image(imgCachorro, 210, 10, 160, 190);
break;
case 27:
image(imgChapeu, 200, 20, 180, 170);
break;
case 28:
image(imgCachimbo, 200, 20, 180, 170);
break;
case 29:
image(imgCachoeira, 200, 50, 200, 170);
break;
case 30:
image(imgChave, 200, 20, 180, 170);
break;
case 31:
image(imgChinelo, 200, 20, 180, 170);
break;
case 32:
image(imgChuveiro, 200, 20, 180, 170);
break;
case 33:
image(imgConcha, 170, 0, 240, 230);
break;
case 34:
image(imgMachado, 200, 20, 180, 170);
break;
case 35:
image(imgSanduiche, 200, 20, 180, 170);
break;
}

    //Botão NH
  fill(255);
  rect(xBotaoNH, yBotaoNH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("nh", xBotaoNH + 6, yBotaoNH + 35);

  //Botão LH
  fill(255);
  rect(xBotaoLH, yBotaoLH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("lh", xBotaoLH + 12, yBotaoLH + 35);


  //Botão CH
  fill(255);
  rect(xBotaoCH, yBotaoCH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("ch", xBotaoCH + 8, yBotaoCH + 35);

  //Cursor do nível 1
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcN1, ycN1, 50, 50, 5);
  
  //Seleção de resposta correta
  if((num1 == 0) || (num1 == 1) || (num1 == 2) || (num1 == 3) || (num1 == 4) || (num1 == 5) || (num1 == 6) || (num1 == 7) || (num1 == 8) || (num1 == 9) || (num1 == 10) || (num1 == 11)){
    respostaN1 = 2;
  } else if ((num1 == 12) || (num1 == 13) || (num1 == 14) || (num1 == 15) || (num1 == 16)  || (num1 == 17)  || (num1 == 18) || (num1 == 19) || (num1 == 20) || (num1 == 21) || (num1 == 22) || (num1 == 23)) {
    respostaN1 = 1;
  } else if ((num1 == 24) || (num1 == 25) || (num1 == 26) || (num1 == 27) || (num1 == 28) || (num1 == 29) || (num1 == 30) || (num1 == 31) || (num1 == 32) || (num1 == 33) || (num1 == 34) || (num1 == 35)) {
    respostaN1 = 3;
  }
  
  //vidas
  if(contadorDeVidas == 3){
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
    image(imgVida, 60, 10, 20, 20);
  } else if (contadorDeVidas == 2) {
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
  } else if (contadorDeVidas == 1){
    image(imgVida, 10, 10, 20, 20);
  } else if (contadorDeVidas == 0){
    e = 100;
  }
  
  //tempo
  fill(0);
  noStroke();
  textSize(15);
  tempoN1++;
  text(((tempoN1/(6.5)).toFixed(0)), width - 30, 25);
  if(((tempoN1/(6.5)).toFixed(1)) >= 30){
    e = 100;
  }
}

function passou1(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Parabéns, você acertou!", 130, height/2);
  
  //Botão continuar
  fill(255);
  rect(xBCP1, yBCP1, 150, 50, 5);
  fill(0);
  textSize(30);
  text("Continuar", 235, 295);
  
  //Cursor continuar
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcP1, ycP1, 150, 50, 5);
  
}

function errou1(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Você errou!", 220, height/2);
  
  //Botão tentar novamente
  fill(255);
  rect(170, yTNE1, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Tentar novamente", 180, 295);
  
  //Botão voltar ao menu
  fill(255);
  rect(170, yVME1, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Voltar ao menu", 195, 355);
  
  //Cursor dos botões
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(170, ycE1, 260, 50, 5);
  
}

function nivel2(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  stroke("black");
  strokeWeight(0);
  fill("black");
  textSize(20);
  text("Escreva a primeira letra do dígrafo correto para \nesta imagem e aperte enter para selecionar", 100, 50);
  
    //Seleção de imagem de acordo com o número aleatório sorteado
switch(num2){
case 0:
image(imgEspantalho, 230, 100, 140, 170);
break;
case 1:
image(imgPilha, 215, 80, 180, 170);
break;
case 2:
image(imgToalha, 230, 100, 140, 170);
break;
case 3:
image(imgMilho, 230, 100, 140, 170);
break;
case 4:
image(imgAbelha, 200, 100, 180, 170);
break;
case 5:
image(imgAgulha, 200, 100, 180, 170);
break;
case 6:
image(imgCoelho, 200, 100, 180, 170);
break;
case 7:
image(imgFolha, 200, 150, 180, 100);
break;
case 8:
image(imgIlha, 200, 100, 180, 170);
break;
case 9:
image(imgOlho, 200, 100, 180, 170);
break;
case 10:
image(imgOvelha, 200, 100, 180, 170);
break;
case 11:
image(imgPalhaço, 230, 100, 180, 170);
break;
case 12:
image(imgGalinha, 240, 100, 140, 170);
break;
case 13:
image(imgMontanha, 230, 100, 140, 170);
break;
case 14:
image(imgDinheiro, 180, 20, 250, 280);
break;
case 15:
image(imgGolfinho, 225, 90, 140, 170);
break;
case 16:
image(imgAranha, 200, 110, 180, 170);
break;
case 17:
image(imgBanheira, 180, 120, 240, 170);
break;
case 18:
image(imgCaminhao, 190, 110, 190, 170);
break;
case 19:
image(imgCegonha, 200, 100, 180, 170);
break;
case 20:
image(imgCozinheira, 235, 110, 100, 180);
break;
case 21:
image(imgJoaninha, 200, 100, 180, 170);
break;
case 22:
image(imgMinhoca, 200, 100, 180, 170);
break;
case 23:
image(imgNinho, 180, 100, 220, 200);
break;
case 24:
image(imgChocolate, 230, 100, 140, 170);
break;
case 25:
image(imgMochila, 230, 100, 140, 170);
break;
case 26:
image(imgCachorro, 210, 90, 160, 190);
break;
case 27:
image(imgChapeu, 200, 100, 180, 170);
break;
case 28:
image(imgCachimbo, 200, 100, 180, 170);
break;
case 29:
image(imgCachoeira, 200, 130, 200, 170);
break;
case 30:
image(imgChave, 200, 100, 180, 170);
break;
case 31:
image(imgChinelo, 200, 100, 180, 170);
break;
case 32:
image(imgChuveiro, 200, 100, 180, 170);
break;
case 33:
image(imgConcha, 170, 80, 240, 230);
break;
case 34:
image(imgMachado, 200, 100, 180, 170);
break;
case 35:
image(imgSanduiche, 200, 100, 180, 170);
break;
}
  
  //caixa de entrada de texto
  fill(255);
  rect(xBotaoLH, yBotaoLH, 50, 50, 5);
  fill(0);
  textSize(30);
  //Mudança de posição da letra caso ela seja l, pois o l é muito fino
  if((letra == "n") || (letra == "c")){
    text(letra, xBotaoLH + 17, yBotaoLH + 35);
  } else {
    text(letra, xBotaoLH + 22, yBotaoLH + 35);
  }
  
  //Seleção de resposta correta
  if((num2 >= 0) && (num2 <= 11)){
    respostaN2 = 2;
  } else if ((num2 >= 12) && (num2 <= 23)) {
    respostaN2 = 1;
  } else if ((num2 >= 24) && (num2 <= 35)) {
    respostaN2 = 3;
  }
  
  //vidas
  if(contadorDeVidas == 3){
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
    image(imgVida, 60, 10, 20, 20);
  } else if (contadorDeVidas == 2) {
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
  } else if (contadorDeVidas == 1){
    image(imgVida, 10, 10, 20, 20);
  } else if (contadorDeVidas == 0){
    
  }
   
  //tempo
  fill(0);
  noStroke();
  textSize(15);
  tempoN2++;
  text(((tempoN2/(6.5)).toFixed(0)), width - 30, 25);
  if(((tempoN2/(6.5)).toFixed(1)) >= 20){
    e = 100;
  }
}

function passou2(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Parabéns, você acertou!", 130, height/2);
  
  //Botão continuar
  fill(255);
  rect(xBCP2, yBCP2, 150, 50, 5);
  fill(0);
  textSize(30);
  text("Continuar", 235, 295);
  
  //Cursor continuar
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcP2, ycP2, 150, 50, 5);
  
}

function errou2(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Você errou!", 220, height/2);
  
  //Botão tentar novamente
  fill(255);
  rect(170, yTNE2, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Tentar novamente", 180, 295);
  
  //Botão voltar ao menu
  fill(255);
  rect(170, yVME2, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Voltar ao menu", 195, 355);
  
  //Cursor dos botões
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(170, ycE2, 260, 50, 5);
}

function nivel3(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  stroke("black");
  strokeWeight(0);
  fill("black");
  textSize(20);
  text("Qual é o dígrafo correto para esta imagem?", 110, 300);
  
  //Seleção de imagem de acordo com o número aleatório sorteado
switch(num3){
case 0:
image(imgEspantalho, 230, 20, 140, 170);
break;
case 1:
image(imgPilha, 215, 0, 180, 170);
break;
case 2:
image(imgToalha, 230, 20, 140, 170);
break;
case 3:
image(imgMilho, 230, 20, 140, 170);
break;
case 4:
image(imgAbelha, 200, 20, 180, 170);
break;
case 5:
image(imgAgulha, 200, 20, 180, 170);
break;
case 6:
image(imgCoelho, 200, 20, 180, 170);
break;
case 7:
image(imgFolha, 200, 70, 180, 100);
break;
case 8:
image(imgIlha, 200, 20, 180, 170);
break;
case 9:
image(imgOlho, 200, 20, 180, 170);
break;
case 10:
image(imgOvelha, 200, 20, 180, 170);
break;
case 11:
image(imgPalhaço, 230, 20, 180, 170);
break;
case 12:
image(imgGalinha, 240, 20, 140, 170);
break;
case 13:
image(imgMontanha, 230, 20, 140, 170);
break;
case 14:
image(imgDinheiro, 180, -60, 250, 280);
break;
case 15:
image(imgGolfinho, 225, 10, 140, 170);
break;
case 16:
image(imgAranha, 200, 30, 180, 170);
break;
case 17:
image(imgBanheira, 180, 40, 240, 170);
break;
case 18:
image(imgCaminhao, 190, 30, 190, 170);
break;
case 19:
image(imgCegonha, 200, 20, 180, 170);
break;
case 20:
image(imgCozinheira, 235, 30, 100, 180);
break;
case 21:
image(imgJoaninha, 200, 20, 180, 170);
break;
case 22:
image(imgMinhoca, 200, 20, 180, 170);
break;
case 23:
image(imgNinho, 180, 20, 220, 200);
break;
case 24:
image(imgChocolate, 230, 20, 140, 170);
break;
case 25:
image(imgMochila, 230, 20, 140, 170);
break;
case 26:
image(imgCachorro, 210, 10, 160, 190);
break;
case 27:
image(imgChapeu, 200, 20, 180, 170);
break;
case 28:
image(imgCachimbo, 200, 20, 180, 170);
break;
case 29:
image(imgCachoeira, 200, 50, 200, 170);
break;
case 30:
image(imgChave, 200, 20, 180, 170);
break;
case 31:
image(imgChinelo, 200, 20, 180, 170);
break;
case 32:
image(imgChuveiro, 200, 20, 180, 170);
break;
case 33:
image(imgConcha, 170, 0, 240, 230);
break;
case 34:
image(imgMachado, 200, 20, 180, 170);
break;
case 35:
image(imgSanduiche, 200, 20, 180, 170);
break;
}

    //Botão NH
  fill(255);
  rect(xBotaoNH, yBotaoNH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("nh", xBotaoNH + 6, yBotaoNH + 35);

  //Botão LH
  fill(255);
  rect(xBotaoLH, yBotaoLH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("lh", xBotaoLH + 12, yBotaoLH + 35);


  //Botão CH
  fill(255);
  rect(xBotaoCH, yBotaoCH, 50, 50, 5);
  fill(0);
  textSize(30);
  text("ch", xBotaoCH + 8, yBotaoCH + 35);

  //Cursor do nível 3
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcN3, ycN3, 50, 50, 5);
  
  //Seleção de resposta correta
  if((num3 == 0) || (num3 == 1) || (num3 == 2) || (num3 == 3) || (num3 == 4) || (num3 == 5) || (num3 == 6) || (num3 == 7) || (num3 == 8) || (num3 == 9) || (num3 == 10) || (num3 == 11)){
    respostaN3 = 2;
  } else if ((num3 == 12) || (num3 == 13) || (num3 == 14) || (num3 == 15) || (num3 == 16) || (num3 == 17) || (num3 == 18) || (num3 == 19) || (num3 == 20) || (num3 == 21) || (num3 == 22) || (num3 == 23)) {
    respostaN3 = 1;
  } else if ((num3 == 24) || (num3 == 25) || (num3 == 26) || (num3 == 27) || (num3 == 28) || (num3 == 29) || (num3 == 30) || (num3 == 31) || (num3 == 32) || (num3 == 33) || (num3 == 34) || (num3 == 35)) {
    respostaN3 = 3;
  }
  
  //vidas
  if(contadorDeVidas == 3){
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
    image(imgVida, 60, 10, 20, 20);
  } else if (contadorDeVidas == 2) {
    image(imgVida, 10, 10, 20, 20);
    image(imgVida, 35, 10, 20, 20);
  } else if (contadorDeVidas == 1){
    image(imgVida, 10, 10, 20, 20);
  } else if (contadorDeVidas == 0){
    e = 100;
  }
  
  //tempo
  fill(0);
  noStroke();
  textSize(15);
  tempoN3++;
  text(((tempoN3/(6.5)).toFixed(0)), width - 30, 25);
  if(((tempoN3/(6.5)).toFixed(1)) >= 10){
    e = 100;
  }
}

function passou3(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Parabéns, você completou o jogo!\nJogue de novo para melhorar suas \nhabilidades", 80, (height/2) - 50);
  
  //Botão continuar
  fill(255);
  rect(xBCP3, yBCP3, 150, 50, 5);
  fill(0);
  textSize(30);
  text("Continuar", 235, 295);
  
  //Cursor continuar
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(xcP3, ycP3, 150, 50, 5);
}

function errou3(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("Você errou!", 220, height/2);
  
  //Botão tentar novamente
  fill(255);
  rect(170, yTNE3, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Tentar novamente", 180, 295);
  
  //Botão voltar ao menu
  fill(255);
  rect(170, yVME3, 260, 50, 5);
  fill(0);
  textSize(30);
  text("Voltar ao menu", 195, 355);
  
  //Cursor dos botões
  noFill();
  stroke("skyBlue");
  strokeWeight(4);
  rect(170, ycE1, 260, 50, 5);
}

function gameOver(){
  background(210);
  image(imgFundo, 0, 0, 600, 450);
  filter(BLUR, 2);
  textSize(30);
  fill("black");
  noStroke();
  text("GAME OVER", 190, height/2);
  
  //"Botão" de voltar ao menu
  fill(0);
  textSize(30);
  text("Aperte backspace para voltar ao menu...", 35, 295);

}
