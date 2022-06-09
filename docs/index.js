 const canvas = document.getElementById('game');
 const ctx = canvas.getContext('2d');
 
 class SnakePart{
	 constructor(x,y){
		 this.x=x;
		 this.y=y;
		 
	 }
	 
	 
	 
 }
 
 let score=0;
 
 let speed=5;
 
 let tileCount=20;
 let tileSize=canvas.width/tileCount - 2;
 
 let headY=10;
 let headX=10;
 let appleX=5;
 let appleY=5;
 
 const snakeParts=[];
 let tailLength=2;
 
 let xVelocidade=0;
 let yVelocidade=0;
 
 function drawGame(){
	 
	 SnakePosition();
	 let result = isGameOver();
	 if(result){
		 return;
		 
		 
	 }
	 
	 
	 clearScreen();
	 
	 CheckAppleCollision();
	 drawApple();
	 drawSnake();
	 
	 drawScore();
	 setTimeout(drawGame, 1000/ speed);
 }
 
 
  function isGameOver(){
	 let gameOver=false;
	 
	 if (yVelocidade===0&&xVelocidade===0){
		 return false;
		 
		 
	 }
	 
	 //walls 
	 if(headX<0){
		 gameOver=true;
		 
	 }
	else if(headX===tileCount){
		 gameOver=true;
		 
		 
	 } else if(headY<0){
		 gameOver=true;
		 
	 }else if(headY===tileCount){
		 gameOver=true;
		 
		 
	 }
	 
	 for(let i=0;i<snakeParts.length;i++){
		 let part = snakeParts[i];
		 if(part.x===headX&&part.y===headY){
			 gameOver=true;
			 break;
		 }
		 
	 }
	 
	 if (gameOver) {
		 ctx.fillStyle="white";
		 ctx.font= "50px Verdana";
		 
		 ctx.fillText("Game Over!", canvas.width/6.5,canvas.height/2)
	 }
	  
	 return gameOver;
	  
  }
  
 
  function clearScreen(){
	  ctx.fillStyle='black';
	  ctx.fillRect(0,0,canvas.width,canvas.height);
	  
  }
  
  function drawScore(){
	  ctx.fillStyle="white";
	  ctx.font="10px Verdana";
	  //mudar
	  ctx.fillText("Score "+score,canvas.width-50,10);
  }
  
  
  function drawSnake(){
	 
	  ctx.fillStyle='green';
	  for (let i=0;i<snakeParts.length;i++){
		  let part=snakeParts[i];                       //width and height
		  ctx.fillRect(part.x*tileCount,part.y*tileCount,tileSize,tileSize);
		  
	  }
	  
	  snakeParts.push(new SnakePart(headX,headY));
     //mudar para while loop	 
	 if (snakeParts.length>tailLength){
		  snakeParts.shift();
		  
		  
		  
	  }
	  
	   ctx.fillStyle='orange';
	  ctx.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize);
	  
	  
	  
	  
	  
  }
   function  SnakePosition(){
	   headX=headX+xVelocidade;
	   headY=headY+yVelocidade;
	 
 }
  
  
   function  drawApple(){
	   ctx.fillStyle="red";
	   ctx.fillRect(appleX*tileCount,appleY*tileCount,tileSize,tileSize);
	 
 }
 
 
   function  CheckAppleCollision(){
	   if (appleX=== headX && appleY==headY){
		   appleX=Math.floor(Math.random()*tileCount);
		   appleY=Math.floor(Math.random()*tileCount);
		   tailLength++;
		   score++;
	   }
	   
	   
	 
 }
  document.body.addEventListener('keydown',keyDown);
  
  function keyDown(event){
	  //up
	  if(event.keyCode==38){
		  if (yVelocidade==1)
			  return;
		  yVelocidade= -1;
          xVelocidade= 0;
		  
	  }
	  
	  //down
	  if(event.keyCode==40){
		  if (yVelocidade==-1)
			  return;
		  yVelocidade= 1;
          xVelocidade= 0;
		  
	  }
	  //left
	  if(event.keyCode==37){
		  if (xVelocidade==1)
			  return;
		  yVelocidade= 0;
          xVelocidade= -1;
		  
	  }
	  //right
	  if(event.keyCode==39){
		  if (xVelocidade==-1)
			  return;
		  yVelocidade= 0;
          xVelocidade= 1;
		  
	  }
  }
 
  
   drawGame();