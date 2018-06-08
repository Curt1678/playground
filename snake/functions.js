window.onload=function(){
	let velocityX = 0;
	let velocityY = 0;
	
	let apple = document.createElement('div');
	apple.classList.add('apple');
	
	let appleX = Math.floor(Math.random() * 100);
	let appleY = Math.floor(Math.random() * 100);
	
	apple.style = "top: " + appleY.toString() + "%; left: " + appleX + "%;";
	
	document.querySelector('body').append(apple);
	
	let update = setInterval(function(){
		
		detectEat();
		
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
			},(seg.getAttribute("data-seg"))*300);
		});
				
		
	},300);
	
	window.addEventListener('keydown',function(e){
		switch(e.key){
			case "w":
				velocityY = -1;
				velocityX = 0;
				break;
			case "a":
				velocityX = -1;
				velocityY = 0;
				break;
			case "s":
				velocityY = 1;
				velocityX = 0;
				break;
			case "d":
				velocityX = 1;
				velocityY = 0;
				break;
			case " ":
			
				document.querySelector('.space-button').classList.add('space-button-active');
			
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
				plusOne.innerHTML = "+1 segment";
				document.querySelector('body').append(plusOne);
				plusOne.addEventListener('animationend',function(){plusOne.outerHTML="";})
				break;
		}
	});
	
	window.addEventListener('keyup',function(e){
		switch(e.key){
			case " ":
				document.querySelector('.space-button').classList.remove('space-button-active');
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