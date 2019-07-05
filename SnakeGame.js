window.onload=function() {
	canvas = document.getElementById("gameCanvas");
	canContext=canvas.getContext("2d");
	document.addEventListener("keydown",keyPush);
	setInterval(game,1000);
}
var intialXPostion = 80;
var intialYPostion = 80; 
var gridSize = 20;
var foodXPostion = 20; 
var foodYPostion = 20;
var foodCount; 
headXSpeed = gridSize; 
headYSpeed = 0 ;
snake = [];
tail = 3;

function drawSnake(){
	//drawing the snake
	canContext.fillStyle="white";
	for(var i=0;i<snake.length;i++) {
		canContext.fillRect(snake[i].x,snake[i].y,gridSize-2,gridSize-2);
		if(snake[i].x==intialXPostion && snake[i].y==intialYPostion) {
			tail = 3;
		}
	}
	snake.push({x:intialXPostion,y:intialYPostion});
	while(snake.length>tail) {
	snake.shift();
	}
}

function drawFood(){
	canContext.fillStyle="red";
	canContext.fillRect(foodXPostion,foodYPostion,gridSize-2,gridSize-2);
}

function game() {
	
	intialXPostion = intialXPostion + headXSpeed;
	intialYPostion= intialYPostion + headYSpeed ;
	
	canContext.fillStyle="black";
	canContext.fillRect(0,0,canvas.width,canvas.height);
	
	drawSnake();

	if(foodXPostion == intialXPostion && foodYPostion == intialYPostion) {
		tail++;
		//for scoring 
		foodCount++;
		//randoize the food 
		foodXPostion = Math.floor(Math.random()*gridSize*20);
		foodYPostion = Math.floor(Math.random()*gridSize*20);

	}

	drawFood();
	
}

function keyPush(evt) {
	switch(evt.keyCode) {
		case 37:
			headXSpeed=-gridSize;
			headYSpeed=0;
			break;
		case 38:
			headXSpeed=0;
			headYSpeed=-gridSize;
			break;
		case 39:
			headXSpeed=gridSize;
			headYSpeed=0;
			break;
		case 40:
			headXSpeed=0;
			headYSpeed=gridSize;
			break;
	}
}