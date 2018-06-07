window.onload = function(){

	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	// generate figure of eight keyframe animation
	
	let animationTag = document.createElement('style');
	animationTag.id = "animation";
	
	animationTag.innerHTML = "@keyframes figureOfEight { ";
	
	for(i=0; i<100; i++){
		animationTag.innerHTML += i.toString() + "%{ transform: translate(" + ((0.3 * windowWidth) * Math.sin((i/100) * (2*Math.PI))).toString() + "px," + ((0.3 * windowHeight) * Math.sin(2 * (i/100) * (2*Math.PI))).toString() + "px) } ";
	}
	
	animationTag.innerHTML += "}";
	
	document.querySelector('head').append(animationTag);
	
	// generate tracer divs
	
	for(i=0; i<50; i++){
		let tracer = document.createElement('div');
		tracer.classList.add('tracer');
		tracer.style="animation-delay:" + (i*0.05).toString() + "s;";
		document.querySelector('body').append(tracer);
	}
};