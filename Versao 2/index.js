 const canvas = document.getElementById('game');
 const ctx = canvas.getContext('2d');
 
 class SnakePart{
	 constructor(x,y){
		 this.x=x;
		 this.y=y;
		 
	 }
	 
	 
	 
 }
 
 
 
 let speed=7;
 
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
	 clearScreen();
	 SnakePosition();
	 
	 
	 CheckAppleCollision();
	 drawApple();
	 drawSnake();
	 setTimeout(drawGame, 1000/ speed);
 }
 
  function clearScreen(){
	  ctx.fillStyle='black';
	  ctx.fillRect(0,0,canvas.width,canvas.height);
	  
  }
  
  function drawSnake(){
	  ctx.fillStyle='orange';
	  ctx.fillRect(headX*tileCount,headY*tileCount,tileSize,tileSize);
	  
	  ctx.fillStyle='green';
	  for (let i=0;i<snakeParts.length;i++){
		  let part=snakeParts[i];                       //width and height
		  ctx.fillRect(part.x*tileCount,part.y*tileCount,tileSize,tileSize);
		  
	  }
	  
	  snakeParts.push(new SnakePart(headX,headY));
	  if (snakeParts.length>tailLength){
		  snakeParts.shift();
		  
		  
		  
	  }
	  
	  
	  
	  
	  
	  
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