let char = document.querySelector('div#char');

let xDisp = 0;
let yDisp = 0;

let xVel = 0;
let yVel = 0;

let xAccel = 0;
let yAccel = 0;

let instant = 0;

let forceArr = [0,0,0,0];

function stop(){
	time = 0;
};

window.addEventListener('keydown',function(e){
	switch(e.key){
		case 'w':
		case 'ArrowUp':
			yAccel += -75;
			if(yAccel < -75){yAccel = -75;}
			forceArr[0]="w";
			document.querySelector('span#w').classList.add('wasd-show');
			break;
		case 'a':
		case 'ArrowLeft':
			xAccel += -75;
			if(xAccel < -75){xAccel = -75;}
			forceArr[1]="a";
			document.querySelector('span#a').classList.add('wasd-show');
			break;
		case 's':
		case 'ArrowDown':
			yAccel += 75;
			if(yAccel > 75){yAccel = 75;}
			forceArr[2]="s";
			document.querySelector('span#s').classList.add('wasd-show');
			break;
		case 'd':
		case 'ArrowRight':
			xAccel += 75;
			if(xAccel > 75){xAccel = 75;}
			forceArr[3]="d";
			document.querySelector('span#d').classList.add('wasd-show');
			break;
	}
});

window.addEventListener('keyup',function(e){
	switch(e.key){
		case 'w':
		case 'ArrowUp':
			yAccel -= -75;
			forceArr[0]=0;
			document.querySelector('span#w').classList.remove('wasd-show');
			break;
		case 'a':
		case 'ArrowLeft':
			xAccel -= -75;
			forceArr[1]=0;
			document.querySelector('span#a').classList.remove('wasd-show');
			break;
		case 's':
		case 'ArrowDown':
			yAccel -= 75;
			forceArr[2]=0;
			document.querySelector('span#s').classList.remove('wasd-show');
			break;
		case 'd':
		case 'ArrowRight':
			xAccel -= 75;
			forceArr[3]=0;
			document.querySelector('span#d').classList.remove('wasd-show');
			break;
	}
});

function checkCollision(){
	
	let bumper1 = document.querySelector('div#bumper-1');
	let player = document.querySelector('div#char');
	
	let b1XPos = parseFloat(bumper1.style.left) + 25;
	let b1YPos = (-1*parseFloat(bumper1.style.top)) - 25 + 200;
	
	let pXPos = parseFloat(player.style.left) + 10;
	let pYPos = (-1*parseFloat(player.style.top)) - 10 + 200;
	
	let bRadius = 25;
	let pRadius = 10;
	
	let convxVel = xVel;
	let convyVel = -1 * yVel;
	
	// collision when dist between coords is less than or equal to sum of radii
	// sum of radii is 35
	// so when pythag of Xdiff and Ydiff <= 35, collision.
	
	let collDist = 35;
	
	let objDist = Math.sqrt(Math.pow(b1XPos - pXPos,2) + Math.pow(b1YPos - pYPos,2));
	
	let theta = 0;
	let iota = 0;
	
	
	
	if(objDist <= 35){
		// Collision!
		// angle of initial velocity will be called theta
		// angle of final velocity will be called beta
		// angle of line joining particle centres will be called iota
		// ive done the maths on paper. beta = theta + pi - 2*iota	

		let vMag = Math.sqrt(Math.pow(convxVel,2) + Math.pow(convyVel,2));
		xVel = 0; yVel = 0;
		
		// set theta
		
		if(convxVel > 0 && convyVel > 0){theta = Math.atan(convyVel/convxVel);}
		if(convxVel < 0 && convyVel > 0){theta = Math.PI + Math.atan(convyVel/convxVel);}
		if(convxVel < 0 && convyVel < 0){theta = Math.PI + Math.atan(convyVel/convxVel);}
		if(convxVel > 0 && convyVel < 0){theta = (2 * Math.PI) + Math.atan(convyVel/convxVel);}
		
		if(convxVel > 0 && convyVel == 0){theta = 0;}
		if(convxVel == 0 && convyVel > 0){theta = Math.PI * (1/2);}
		if(convxVel < 0 && convyVel == 0){theta = Math.PI;}
		if(convxVel == 0 && convyVel < 0){theta = Math.PI * (3/2);}
		
		if(convxVel == 0 && convyVel == 0){theta = 0;}
		
		//set iota
		
		if(b1XPos > pXPos && b1YPos > pYPos){iota = Math.atan((b1YPos - pYPos)/(b1XPos - pXPos));}
		if(b1XPos < pXPos && b1YPos > pYPos){iota = Math.PI + Math.atan((b1YPos - pYPos)/(b1XPos - pXPos));}
		if(b1XPos < pXPos && b1YPos < pYPos){iota = Math.PI + Math.atan((b1YPos - pYPos)/(b1XPos - pXPos));}
		if(b1XPos > pXPos && b1YPos < pYPos){iota = (2 * Math.PI) + Math.atan((b1YPos - pYPos)/(b1XPos - pXPos));}
		
		if(b1XPos > pXPos && b1YPos == pYPos){iota = 0;}
		if(b1XPos == pXPos && b1YPos > pYPos){iota = Math.PI * (1/2);}
		if(b1XPos < pXPos && b1YPos == pYPos){iota = Math.PI;}
		if(b1XPos == pXPos && b1YPos < pYPos){iota = Math.PI * (3/2);}
		
		let beta = Math.PI + theta - (2*iota);
		
		xVel = vMag * Math.cos(beta);
		yVel = -1 * vMag * Math.sin(beta);
		
		
	}
	
	
	
	
}

setInterval(function(){
	
	checkCollision();

	if(forceArr[0] == 0 && forceArr[2] == 0){
		yAccel = -0.48 * yVel; // friction!
	}
	
	if(forceArr[1] == 0 && forceArr[3] == 0){
		xAccel = -0.48 * xVel;	// friction!
	}

	if(instant != 0){
		let deltat = (Date.now() - instant)/1000;
		xDisp += xVel * deltat;
		yDisp += yVel * deltat;
		
		xVel += xAccel * deltat; if(xVel > 150){xVel = 150;} if(xVel < -150){xVel = -150;}
		yVel += yAccel * deltat; if(yVel > 150){yVel = 150;} if(yVel < -150){yVel = -150;}
		
		if(xVel < 1 && xVel > -1 && forceArr[1] == 0 && forceArr[3] == 0){xVel = 0}
		if(yVel < 1 && yVel > -1 && forceArr[0] == 0 && forceArr[2] == 0){yVel = 0}
		
		
	}
	
	document.querySelector('div#char').style.left = xDisp + "px";
	document.querySelector('div#char').style.top = yDisp + "px";
	instant = Date.now();
},25);