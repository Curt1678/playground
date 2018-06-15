let shrapnelAmount = 100;	// set number of firework projectiles here

window.addEventListener('click',function(e){
	
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	let shrapnelColor = Math.floor(Math.random() * 360);
	
	let body = document.querySelector('body');
	
	let firework = document.createElement('div');
	firework.classList.add('firework');
	firework.style="left: " + (mouseX - 150).toString() + "px; top: " + (mouseY - 150).toString() + "px;";
	firework.addEventListener('animationend',function(){
		firework.outerHTML = "";
	});
	body.append(firework);
	
	for(i=0; i<shrapnelAmount; i++){
		let shrapnelContainer = document.createElement('div');
		shrapnelContainer.classList.add('shrapnel-container');
		let angle = Math.floor(Math.random() * 360);
		let shrapnelContWidth = 25 + (Math.random()*25);
		shrapnelContainer.style = "transform: rotate(" + angle.toString() + "deg); width: " + shrapnelContWidth.toString() + "%;";
		
		let shrapnel = document.createElement('div');
		shrapnel.classList.add('shrapnel');
		shrapnel.style = "background: hsl(" + shrapnelColor.toString() + ",100%,50%);"; 
		
		shrapnelContainer.append(shrapnel);
		firework.append(shrapnelContainer);
	}
})