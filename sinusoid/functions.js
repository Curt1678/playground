window.onload = function(){
	let quantity = 100;
	
	let windowWidth = window.innerWidth;
	
	
	
	for(i=0; i<quantity; i++){
	
		let delay = (i/quantity) * 2;
	
		let xCoord = (i/quantity)*windowWidth;
		
		let point = document.createElement('div');
		
		point.classList.add('point');
		
		point.style = "left:" + xCoord + "px; animation-delay: " + delay.toString() + "s;";
		
		document.querySelector('body').append(point);
	}
	
	// now for the keyframe generation
	
	let styleTag = document.createElement('style');
	
	styleTag.innerHTML += "@keyframes sinusoid { ";
	
	for(i=0; i<100; i++){
		let height = -300 * Math.sin((i/100)*(2*Math.PI));
		styleTag.innerHTML += i.toString() + "% { transform:translateY(" + height.toString() + "px) }";
	}
	
	styleTag.innerHTML += "}";
	
	document.querySelector('head').append(styleTag);
}