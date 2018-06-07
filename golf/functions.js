// zig-zag function is y = (1/pi)*arccos(cos(x))

let gravity = -900;
let friction = 0.8;
let restitution = -0.6;

let goalSet = 0;

let energyWidth = 0;
let counter = 0;

let SBDown = 0;

let timeStamp = 0;

function buildEnergy(e){
	console.log(e.key);
	let ball = document.querySelector('div.ball');
	let club = document.querySelector('div.club');
	
	switch(e.key){
		case " ":
			goalSetup();
			document.querySelector('button').classList.add('button-pressed');
			ball.style = "bottom: 50px; left: 50px;";
			ball.setAttribute('xVel',0);
			ball.setAttribute('yVel',0);
			club.classList.remove('club-swing');
			club.classList.remove('swung');
			
			if(SBDown == 0){
				SBDown = 1;
				counter = 0;
				energyWidth = 0;
				window.energyGrow = setInterval(function(){
					counter++;
					energyWidth = 100 * (1/Math.PI) * Math.acos(Math.cos(counter/10));
					document.querySelector('div.energy').style = "width: " + energyWidth.toString() + "%;"; 
				},35);
			}			
	}
};

function releaseEnergy(e){
	switch(e.key){
		case " ":
			goalSet = 0;
			document.querySelector('button').classList.remove('button-pressed');
			clearInterval(window.energyGrow);
			SBDown = 0;
			timeStamp = 0;
			swing();
	}
};


window.addEventListener('keydown',function(event){
	buildEnergy(event);
});

window.addEventListener('keyup',function(event){
	releaseEnergy(event);
});

function swing(){

	let club = document.querySelector('div.club');
	club.classList.add('club-swing');
	
	let energyValue = parseFloat(document.querySelector('div.energy').style.width);
	
	let velComponent = Math.pow(2,(-1/2)) * 8.7 * energyValue;
	
	let ball = document.querySelector('div.ball');
	ball.setAttribute('xVel',velComponent);
	ball.setAttribute('yVel',velComponent); // ball is launched at 45deg to x-axis 
	
	setTimeout(function(){
		let ballistics = setInterval(function(){
			if(timeStamp == 0){timeStamp = Date.now();}
		
			let ball = document.querySelector('div.ball');
			let ballIniYVel = parseFloat(ball.getAttribute('yVel'));
			let ballIniXVel = parseFloat(ball.getAttribute('xVel'))
		
			let ballIniX = parseFloat(ball.style.left);
			let ballIniY = parseFloat(ball.style.bottom);
		
			let deltaT = (Date.now() - timeStamp)/1000;
		
			ball.style = "bottom: " + (ballIniY + (ballIniYVel * deltaT)).toString() + "px; left: " + (ballIniX + (ballIniXVel * deltaT)).toString() + "px;"
			ball.setAttribute('yVel',(parseFloat(ball.getAttribute('yVel')) + (gravity * deltaT)));
		
			timeStamp = Date.now();
		
			if(parseFloat(ball.style.bottom) < 50){
				let ballBounceX = parseFloat(ball.style.left);
				ball.style = "bottom: 50px; left: " + ballBounceX.toString() + "px;"; 
				ball.setAttribute('yVel',ball.getAttribute('yVel') * restitution);
				ball.setAttribute('xVel',ball.getAttribute('xVel') * friction);				
			}
			
			if(parseFloat(ball.getAttribute('xVel')) < 10){
				let ballStopX = parseFloat(ball.style.left);
				ball.setAttribute('yVel',0);
				ball.setAttribute('xVel',0);
				ball.style = "bottom: 50px; left: " + ballStopX.toString() + "px;";
				clearInterval(ballistics);
				
			}
		},20);
	},150);
}

window.onload = function(){
document.querySelector('div.club').addEventListener('animationend',function(){
	document.querySelector('div.club').classList.add('swung');
});
};

function goalSetup(){
	if(goalSet == 0){
		let goal = document.querySelector('div.goal');
		let windowWidth = window.innerWidth;
		let potentialXwidth = windowWidth - 170;
	
		let goalX = (Math.random() * potentialXwidth) + 60;
		
		goal.classList.remove('invisible');
	
		goal.style = "left: " + goalX.toString() + "px;";
		goalSet = 1;
	}
}