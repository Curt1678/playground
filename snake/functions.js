window.onload=function(){	
	
	let velocityX = 0;
	let velocityY = 0;
	
	let collisionCoeff = 0;
	
	let frequency = 100;
	
	let apple = document.createElement('div');
	apple.classList.add('apple');
	
	let appleX = /*Math.floor(Math.random() * 100)*/ 10;
	let appleY = /*Math.floor(Math.random() * 100)*/ 10;
	
	apple.style = "top: " + appleY.toString() + "%; left: " + appleX + "%;";
	
	document.querySelector('body').append(apple);
	
	let update = window.setInterval(function(){		
		
		let seg1 = document.querySelector('.seg-1');		
		
		let x = parseInt(seg1.style.left);
		let y = parseInt(seg1.style.top);
			
		if(velocityX == 1){
			x++;
		}
		if(velocityY == 1){
			y++;
		}
		if(velocityX == -1){
			x--;
		}
		if(velocityY == -1){
			y--;
		}
		
		seg1.style = "top: " + y.toString() + "%; left: " + x.toString() + "%;";		
		
		let seg1X = parseInt(seg1.style.left);
		let seg1Y = parseInt(seg1.style.top);
		
		let segments = document.querySelectorAll('.seg');
		
		segments.forEach(function(seg){
			setTimeout(function(){
				seg.style = "top: " + seg1Y + "%; left: " + seg1X + "%;";
			},(seg.getAttribute("data-seg"))*frequency);
		});
		
		if(collisionCoeff == 0){
			return;
		};

		detectTail();		
		detectEat();
		
	},frequency);
	
	window.addEventListener('keydown',function(e){
		switch(e.key){
			case "w":
				if(collisionCoeff == 0){
					collisionCoeff = 1;
				};
				if(velocityY != 1){
					velocityY = -1;
					velocityX = 0;
				}				
				break;
			case "a":
				if(collisionCoeff == 0){
					collisionCoeff = 1;
				};
				if(velocityX != 1){
					velocityX = -1;
					velocityY = 0;
				}				
				break;
			case "s":
				if(collisionCoeff == 0){
					collisionCoeff = 1;
				};
				if(velocityY != -1){
					velocityY = 1;
					velocityX = 0;
				}				
				break;
			case "d":
				if(collisionCoeff == 0){
					collisionCoeff = 1;
				};
				if(velocityX != -1){
					velocityX = 1;
					velocityY = 0;
				}				
				break;				
		}
	});
};

function detectEat(){
	let snakeMouth = document.querySelector('.seg-1');
	
	let snakeMouthX = parseInt(snakeMouth.style.left);
	let snakeMouthY = parseInt(snakeMouth.style.top);
	
	let apple = document.querySelector('.apple');
	
	let appleX = parseInt(apple.style.left);
	let appleY = parseInt(apple.style.top);
	
	if(snakeMouthX == appleX && snakeMouthY == appleY){
		apple.outerHTML = "";
		addSegment();
		createNewApple();
	}
};

function createNewApple(){
	let newApple = document.createElement('div');
	newApple.classList.add('apple');
	
	let appleX = Math.floor(Math.random() * 100);
	let appleY = Math.floor(Math.random() * 100);
	
	newApple.style = "top: " + appleY.toString() + "%; left: " + appleX + "%;";
	
	document.querySelector('body').append(newApple);
};

function addSegment(){
	let newSeg = document.createElement('div');
	let currentNumberOfSegs = document.querySelectorAll('.seg').length;
	let newSegData = currentNumberOfSegs;
				
	newSeg.classList.add('seg');
	newSeg.classList.add('seg-' + (currentNumberOfSegs + 1));
				
	newSeg.style="display:none;"
	newSeg.setAttribute('data-seg',newSegData);
				
	document.querySelector('body').append(newSeg);
				
	let plusOne = document.createElement('div');
	plusOne.classList.add('plusOne');
	plusOne.style = "left: " + parseInt(document.querySelector('.seg-3').style.left).toString() + "%; top: " +  (parseInt(document.querySelector('.seg-3').style.top)-1).toString() + "%;";
	plusOne.innerHTML = "+1 segment";
	document.querySelector('body').append(plusOne);
	plusOne.addEventListener('animationend',function(){plusOne.outerHTML="";})
};

function detectTail(){
	let snakeMouth = document.querySelector('.seg-1');
	
	let snakeMouthX = parseInt(snakeMouth.style.left);
	let snakeMouthY = parseInt(snakeMouth.style.top);
	
	let snakeTailSegments = document.querySelectorAll('.seg:not(.seg-1)');
	
	snakeTailSegments.forEach(function(tailSegment){
		let tailSegX = parseInt(tailSegment.style.left);
		let tailSegY = parseInt(tailSegment.style.top);
		
		if(tailSegX == snakeMouthX && tailSegY == snakeMouthY){
			for (var i = 1; i < 10; i++){
				window.clearInterval(i);
			}        
			fail();
		}
	});
};

function fail(){
	
	let body = document.querySelector('body');
	body.style = "opacity: 0.5";
	
	let failMessage = document.createElement('div');
	failMessage.classList.add('fail-message');
	failMessage.innerHTML = "Collision!";
	
	body.append(failMessage);
	
	let restartButton = document.createElement('div');
	restartButton.classList.add('restart-button');
	restartButton.innerHTML = "Restart";
	restartButton.addEventListener('mousedown',function(){
		restartButton.classList.add('restart-button-active');
		reload = 1;
	});
	restartButton.addEventListener('mouseup',function(){
		restartButton.classList.remove('restart-button-active');
		if(reload == 1){
			location.reload();
		} else {
			reload = 0;
		}
	});
	
	body.append(restartButton);
}
