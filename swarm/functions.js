let swarmPop = 50;

window.onload = function(){

	let oscillator = document.createElement('style');
	oscillator.innerHTML = "@keyframes oscillate {";
	for(i=0; i<100; i++){
		oscillator.innerHTML += i.toString() + "% { transform:translateY(" + (Math.sin((i/100)*2*Math.PI)*200).toString() + "px); }"
	}
	oscillator.innerHTML += " }";
	document.querySelector('head').append(oscillator);

	let body = document.querySelector('body');
	for(i=0; i<swarmPop; i++){
		let wasp = document.createElement('div');
		let waspRotator = document.createElement('div');
		waspRotator.classList.add('waspRotator');
		waspRotator.style.transform = "rotate(" + Math.floor(Math.random()*360) + "deg)";
		wasp.classList.add('wasp');
		waspRotator.style.transitionDuration = (Math.random()*0.45).toFixed(2).toString() + "s";
		wasp.style.animationDuration = (1 + (Math.random()*2)).toFixed(2) + "s";
		waspRotator.append(wasp);
		body.append(waspRotator);
	}
};
window.addEventListener('mousemove',function(e){
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	
	let wasps = document.querySelectorAll('.waspRotator');
	wasps.forEach(function(wasp){
		wasp.style.top = mouseY + "px";
		wasp.style.left = mouseX + "px";
	});
})